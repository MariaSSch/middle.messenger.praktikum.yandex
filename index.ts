import { render } from "./src/js/render";
import { router } from "./src/js/router"
import { Error500 } from "./src/pages/error500";
import { Error404 } from "./src/pages/error404";
import { Login } from "./src/pages/login";
import { Registration } from "./src/pages/registration";
import { Profile } from "./src/pages/profile";
import { ChangePass } from "./src/pages/change-pass";
import { ChangeProfile } from "./src/pages/change-profile";
import { MainPage } from "./src/pug";
import { Chats } from "./src/pages/chats";

export enum Routes {
	main = "/chats",
	signin = "/signin",
	signup = "/signup",
	profile = "/user/profile",
	changeProfile = "/user/profile",
	changePass = "/user/password",
	error = "/error",
}

window.addEventListener("DOMContentLoaded", () => {

	const root = document.getElementById("app");

	router
		.use(Routes.main, Chats)
		.use(Routes.signin, Login)
		.use(Routes.signup, Registration)
		.use(Routes.profile, Profile)
		.use(Routes.changeProfile, ChangeProfile)
		.use(Routes.changePass, ChangePass)
		.use(Routes.error, Error404)


  // render("main");
});
