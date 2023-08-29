import { Error500 } from "./src/pages/error500/index";
import { Error404 } from "./src/pages/error404/index";
import { Error } from "./src/components/error";
import { render } from "./src/js/render";

window.addEventListener("DOMContentLoaded", () => {
	// const root = document.querySelector("#app");
	// const errorPage404 = new Error500();

	// root!.append(errorPage500.getContent()!);
	// errorPage500.dispatchComponentDidMount();
	render("main");
});
// 
