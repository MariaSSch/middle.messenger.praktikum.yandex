import HTTPTransport from "../js/HTTPTransport";
import BaseAPI from "./baseAPI";
import { SignupDTO, SigninDTO } from "../js/dto/auth";

const authAPIInstance = new HTTPTransport("/auth");

export default class AuthAPI extends BaseAPI {
	constructor() {
		super();
	}
	signup(data: SignupDTO): Promise<unknown> {
		return authAPIInstance.post("/signup", { data });
	}

	signin(data: SigninDTO): Promise<unknown> {
		return authAPIInstance.post("/signin", { data });
	}

	getUser(): Promise<unknown> {
		return authAPIInstance.get("/user");
	}

	logout(): Promise<unknown> {
		return authAPIInstance.post("/logout");
	}
}
