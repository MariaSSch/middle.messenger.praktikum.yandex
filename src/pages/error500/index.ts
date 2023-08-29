import Block from "../../js/block";
import template from "./error500.pug";
import { Error } from "../../components/error";


export class Error500 extends Block {
	constructor() {
		super();
		
	}
	init() {
		this.children.error500 = new Error({
			errorCode: "500",
			message: "Мы уже фиксим",
			link: "chats",
			linkMessage: "Назад к чатам",
		});
	}


	render() {

		return this.compile(template, this.props);
	}
}
