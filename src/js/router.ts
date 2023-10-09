import Block from "./block";

class Route {
	private pathname: string;
	private blockClass: typeof Block;
	private block: Block | null;
	private props: any;
	constructor(pathname: string, view: typeof Block, props: any) {
		this.pathname = pathname;
		this.blockClass = view;
		this.block = null;
		this.props = props;
	}

	navigate(pathname: string) {
		if (this.match(pathname)) {
			this.pathname = pathname;
			this.render();
		}
	}

	leave() {
		if (this.block) {
			this.block.hide();
		}
	}

	match(pathname: string) {
		return pathname === this.pathname;
	}

	render() {
		if (!this.block) {
			this.block = new this.blockClass(); //view typeof Block
		}
		const root = document.querySelector(this.props.rootQuery);//"#app"

		root!.innerHTML = "";
	
		root!.append(this.block.getContent()!);
		this.block.dispatchComponentDidMount();
	}
}

class Router {
	private static __instance: Router;
	routes: Route[] = [];
	history = window.history;
	private currentRoute: Route | null = null;
	private rootQuery: string = "";

	constructor(rootQuery: string) {
		if (Router.__instance) {
			return Router.__instance;
		}

		this.routes = [];
		this.history = window.history;
		this.currentRoute = null;
		this.rootQuery = rootQuery;

		Router.__instance = this;
	}

	use(pathname: string, block: typeof Block) {
		const route = new Route(pathname, block, {rootQuery: this.rootQuery});
	  
		this.routes.push(route);
	  
	  return this;
	}

	start() {
	  window.onpopstate = () => {
		this._onRoute(window.location.pathname);
	  };
	  
	  this._onRoute(window.location.pathname);
	}

	_onRoute(pathname: string) {
		const route = this.getRoute(pathname);
	  
		if(!route) {
		  return;
		}
	  //console.log(this._currentRoute)
		if (this.currentRoute && this.currentRoute !== route) {
			this.currentRoute.leave();
		}

		this.currentRoute = route;
		route.render();
	}

	go(pathname: string) {
	  this.history.pushState({}, "", pathname);
	  this._onRoute(pathname);
	}

	back() {
	  this.history.back();
	}

	forward() {
	  this.history.forward();
	}

	getRoute(pathname: string) {
	  
		return this.routes.find(route => route.match(pathname));
	}
}
export const router = new Router("#app");
