import { EventBus } from "./event-bus";
import { v4 as uuidv4 } from "uuid";

class Block {
	static Events = {
		INIT: "init",
		FLOW_CMD: "flow: component-did-mount",
		FLOW_CDU: "flow: component-did-update",
		FLOW_RENDER: "flow: render"
	};

	protected props: Record<string, unknown>;
	private eventBus: () => EventBus;
	private _element: HTMLElement | null = null;
	private _meta: { props: any };
	protected children: Record<string, Block>;
	public id = uuidv4();

	constructor(propsWithChildren: object = {}) {
		const eventBus = new EventBus();

		const { props, children } = this._getChildrenAndProps(propsWithChildren);
		
		this._meta = {
			props,
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

	protected compile(template: (context: any) => string, context: any) {
		const contextAndStabs = { ...context };

		Object.entries(this.children).forEach(([name, component]) => {
			contextAndStabs[name] = `div data-id=${component.id}`;
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
			
			component.getContent()?.append(...Array.from(stub.childNodes));
			stub.replaceWith(component.getContent()!);
	});

		//returns documentFragment, donde stubs are replaced with components
		return temp.content;
	}
	_addEvents() {
		const { events = {} } = this.props as { events: Record<string, () => void>};

		Object.keys(events).forEach(event => {
			this._element!.addEventListener(event, events[event])
		});
	}

	_registerEvents(eventBus: EventBus) {
		eventBus.on(Block.Events.INIT, this._init.bind(this));
		eventBus.on(Block.Events.FLOW_CMD, this._componentDidMount.bind(this));
		eventBus.on(Block.Events.FLOW_CDU, this._componentDidUpdate.bind(this));
		eventBus.on(Block.Events.FLOW_RENDER, this._render.bind(this));
	}

	private _init() { 
		this.init();
		
		//вызывает первый рендер
		this.eventBus().emit(Block.Events.FLOW_RENDER);
	}

	protected init() {} 
	_componentDidMount() { 
		this.componentDidMount();
	}

	componentDidMount() {} 

	public dispatchComponentDidMount() { 
		this.eventBus().emit(Block.Events.FLOW_CMD);
		
		Object.values(this.children).forEach(child => child.dispatchComponentDidMount())
	}

	private _componentDidUpdate(oldProps: any, newProps: any) { 
		if (this.componentDidUpdate(oldProps, newProps)) {
			this.eventBus().emit(Block.Events.FLOW_RENDER)
		}
	}

	protected componentDidUpdate(oldProps: any, newProps: any) { 
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

	private _render() {
		const block = this.render();

		//take off extra cover
		const newElem: HTMLElement = block.firstElementChild as HTMLElement;

		//to rewrite content
		if(this._element) {
			this._element.replaceWith(newElem);
		}
		this._element = newElem;

		this._addEvents();
	}

	protected render(): DocumentFragment {
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

	show(display: string) {
		this.getContent()!.style.display = display;
	}

	hide() {
		this.getContent()!.style.display = "none";
	}

	
	public getValue(): string {
		const input = this.getElement()?.querySelector("input") as HTMLInputElement;
		return input.value;
	}
}

export default Block;
