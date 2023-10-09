import AuthAPI from "../api/authAPI";
import { SignupDTO, SigninDTO } from "../js/dto/auth";
import { router } from "../js/router";
import { Routes } from "../../index";
import { store } from "../js/store";

class AuthController {
	private api = new AuthAPI();

	async signup(data: SignupDTO) {
		try {
			await this.api.signup(data);
			await this.fetchUser();
			router.go(Routes.main);
		} catch (error: any) {
			console.error(error.message);
		}
	}

	async signin(data: SigninDTO) {
		try {
			await this.api.signin(data);
			await this.fetchUser();
			router.go(Routes.main);
		} catch (error: any) {
			console.error(error.message);
		}
	}

	async logout() {
		try {
			await this.api.logout();

			store.set("user", null); //undefined
			store.set("chats", null); //undefined

			router.go(Routes.signin);
		} catch (error: any) {
			console.error(error.message);
		}
	}

	async fetchUser() {
		try {
			const user = await this.api.getUser();

			store.set("user", user);
		} catch (error: any) {
			console.error(error.message);
		}
	}
}

export default new AuthController();
