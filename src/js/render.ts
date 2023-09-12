import { Error500 } from "../pages/error500";
import { Error404 } from "../pages/error404";
import { Login } from "../pages/login";
import { Registration } from "../pages/registration";
import { Profile } from "../pages/profile";
import { ChangePass } from "../pages/change-pass";
import { ChangeProfile } from "../pages/change-profile";
import { MainPage } from "../pug";
import { Chats } from "../pages/chats";
import { PopupFooter } from "../components/popup-footer";

const ROUTES = {
	'error500': Error500,
	'error404': Error404,
	'login': Login,
	'registration': Registration,
	'profile': Profile,
	'changePass': ChangePass,	
	'changeProfile': ChangeProfile,	
	'chats': Chats,
	'main': MainPage,
	'test': PopupFooter,
};

export function render(name: keyof typeof ROUTES) {
	const root = document.querySelector("#app");

	root!.innerHTML = "";

	const Page = ROUTES[name];

	const page = new Page();

	root!.append(page.getContent()!);

	page.dispatchComponentDidMount();
}
