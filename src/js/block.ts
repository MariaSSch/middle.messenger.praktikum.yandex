import { v4 as uuidv4 } from "uuid";
import { EventBus } from "./event-bus";

abstract class Block {
  static Events = {
    INIT: "init",
    FLOW_CMD: "flow: component-did-mount",
    FLOW_CDU: "flow: component-did-update",
    FLOW_RENDER: "flow: render",
  };

  protected props: Record<string, unknown>;

  private eventBus: () => EventBus;

  private _element: HTMLElement | null = null;

  protected children: Record<string, Block>; // eslint-disable-line

  public id = uuidv4();

  constructor(propsWithChildren: object = {}) {
    const eventBus = new EventBus();

    const { props, children } = this._getChildrenAndProps(propsWithChildren);

    this.children = children;
    this.props = this._makePropsProxy(props);
    this.eventBus = () => eventBus;
    this._registerEvents(eventBus);
    eventBus.emit(Block.Events.INIT);
  }

  _getChildrenAndProps(childrenAndProps: Record<string, any>) {// eslint-disable-line
    const props: Record<string, unknown> = {};
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

  protected compile(template: (context: any) => string, context: Record<string, unknown>) { // eslint-disable-line
    const contextAndStabs = { ...context };

    Object.entries(this.children).forEach(([name, component]) => {
      contextAndStabs[name] = `div data-id=${component.id}`;
    });

    const html = template(contextAndStabs);

    //contains DocumentFragment
    const temp = document.createElement("template");
    temp.innerHTML = html;

    Object.entries(this.children).forEach(([_, component]) => {// eslint-disable-line
      const stub = temp.content.querySelector(`[data-id="${component.id}"]`);

      if (!stub) {
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

    Object.keys(events).forEach((event) => {
			this._element!.addEventListener(event, events[event]);
    });
  }

	_removeEvents() {
		const { events = {} } = this.props  as { events: Record<string, () => void>};
		if (!events) {
			return;
		}

		Object.keys(events).forEach((event) => {
			this._element!.removeEventListener(event, events[event]);
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

  protected init() {} // eslint-disable-line

  _componentDidMount() {
    this.componentDidMount();
  }

  componentDidMount() {} // eslint-disable-line

  public dispatchComponentDidMount() {
    this.eventBus().emit(Block.Events.FLOW_CMD);

    Object.values(this.children).forEach((child) => child.dispatchComponentDidMount());
  }

  private _componentDidUpdate(oldProps: any, newProps: any) { //eslint-disable-line
    if (this.componentDidUpdate(oldProps, newProps)) {
      this.eventBus().emit(Block.Events.FLOW_RENDER);
    }
  }

  protected componentDidUpdate( //eslint-disable-line
    oldProps: Record<string, unknown>, //eslint-disable-line
    newProps: Record<string, unknown>, //eslint-disable-line
  ) {
    return true;
  }

  setProps = (nextProps: Record<string, any>) => { //eslint-disable-line
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
    if (this._element) {
			this._removeEvents();
      this._element.replaceWith(newElem);
    }
    this._element = newElem;

    this._addEvents();
  }

  protected render(): DocumentFragment { //eslint-disable-line
    return new DocumentFragment();
  }

  getContent() {
    return this._element;
  }

  _makePropsProxy(props: Record<string, unknown>) {
    const self = this;

    return new Proxy (props, {
      get(target, prop: string) {
        const value = target[prop];
        return typeof value === "function" ? value.bind(target) : value;
      },
      set(target, prop: string, value) {
        const oldTarget = { ...target };
        target[prop] = value;

        self.eventBus().emit(Block.Events.FLOW_CDU, oldTarget, target);
        return true;
      },
      deleteProperty() {
        throw new Error("No access");
      },
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
