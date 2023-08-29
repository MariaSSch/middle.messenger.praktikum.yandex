import { EventBus } from "./event-bus";
import { v4 as uuidv4 } from "uuid";

class Block1<P = any> {
	static Events = {
		INIT: "init",
		FLOW_CMD: "flow: component-did-mount",
		FLOW_CDU: "flow: component-did-update",
		FLOW_RENDER: "flow: render"
	};

	protected props: P;
	private eventBus: () => EventBus;
	private _element: HTMLElement | null = null;
	private _meta: { tagName: string, props: any };
	protected children: Record<string, Block>;
	public id = uuidv4();

	constructor(tagName: string = "div", propsWithChildren: object = {}) {
		const eventBus = new EventBus();

		const { props, children } = this._getChildrenAndProps(propsWithChildren);
		
		this._meta = {
			tagName,
			props
		};
		this.children = children;
		this.props = this._makePropsProxy(props);
		this.eventBus = () => eventBus;
		this._registerEvents(eventBus);
		eventBus.emit(Block.Events.INIT);
	}

	_getChildrenAndProps(childrenAndProps: object) {
		const props: Record<string, any> = {};
		const children: Record<string, Block> = {};

		Object.entries(childrenAndProps).forEach(([key, value]) => {
			if (value instanceof Block) {
				children[key] = value;
			} else {
				props[key] = value;
			}
		});
		return { props, children };
	}

	compile(template: (context: any) => string, context: any) {
		const contextAndStabs = { ...context };

		Object.entries(this.children).forEach(([name, component]) => {
			contextAndStabs[name] = `<div data-id=${component.id}></div>`;
		});

		const html = template(contextAndStabs);

		//contains DocumentFragment
		const temp = document.createElement("template");
		temp.innerHTML = html;

		Object.entries(this.children).forEach(([_, component]) => {
			const stub = temp.content.querySelector(`[data-id="${component.id}"]`);

			if(!stub) {
				return;
			}
			stub.replaceWith(component.getContent());
	});

		//returns documentFragment, donde stubs are replaced with components
		return temp.content;
	}
	_addEvents() {
		const { events = {} } = this.props as { events: Record<string, () => void>};

		Object.keys(events).forEach(event => {
			this._element!.addEventListener(event, events[event])
		})
	}

	_registerEvents(eventBus: EventBus) {
		eventBus.on(Block.Events.INIT, this._init.bind(this));
		eventBus.on(Block.Events.FLOW_CMD, this._componentDidMount.bind(this));
		eventBus.on(Block.Events.FLOW_CDU, this._componentDidUpdate.bind(this));
		eventBus.on(Block.Events.FLOW_RENDER, this._render.bind(this));
	}

	_createResources() {
		const { tagName } = this._meta;
		this._element = this._createDocumentElement(tagName);
	}

	_init() {
		//создает элемент-обертку
		this._createResources();

		this.init();
		
		//вызывает первый рендер
		this.eventBus().emit(Block.Events.FLOW_RENDER);
	}

	init() {}

	_componentDidMount() {
		this.componentDidMount();
	}

	componentDidMount() {}

	dispatchComponentDidMount() {
		this.eventBus().emit(Block.Events.FLOW_CMD);
	}

	_componentDidUpdate(oldProps: any, newProps: any) {
		if (this.componentDidUpdate(oldProps, newProps)) {
			this.eventBus().emit(Block.Events.FLOW_RENDER)
		}
	}

	componentDidUpdate(oldProps: any, newProps: any) {
		return true;
	}

	setProps = (nextProps: any) => {
		if (!nextProps) {
			return;
		}

		Object.assign(this.props, nextProps);
	};

	getElement() {
		return this._element;
	}

	_render() {
		const block = this.render();

		//to rewrite content
		this._element!.innerHTML = "";
		this._element!.append(block);

		this._addEvents();
	}

	render(): DocumentFragment {
		return new DocumentFragment();
	}

	getContent() {
		return this._element;
	}

	_makePropsProxy(props: any) {
		const self = this;

		return new Proxy (props, {
			get(target, prop: string | symbol) {
				const value = target[prop];
				return typeof value === "function" ? value.bind(target) : value;
			},
			set(target, prop: string | symbol, value) {

				const oldTarget = {...target}
				target[prop] = value;

				self.eventBus().emit(Block.Events.FLOW_CDU, oldTarget, target);
				return true;
			},
			deleteProperty() {
				throw new Error("No access");
			}
		});
	}

	_createDocumentElement(tagName: string) {
		return document.createElement(tagName);
	}

	show() {
		this.getContent()!.style.display = "block";
	}

	hide() {
		this.getContent()!.style.display = "none";
	}
}

export default Block;
