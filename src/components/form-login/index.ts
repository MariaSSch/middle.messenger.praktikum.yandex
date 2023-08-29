import Block from "../../js/block";
import template from "./form-login.pug";
import { Input } from "../input";
import { BtnMain } from "../btn-main";
import { fieldsLogin } from "../../js/utils/login-page-fields"
import { Link } from "../link";
import { render } from "../../js/render";

interface FormProps {
	formId: string;
	action: string;
	formTitle: string;
};

export class FormLogin extends Block {
	constructor(props: FormProps) {
		super(props);
	}

	init() {

		this.children.inputL = new Input({
			fieldType: fieldsLogin[0].type,
			fieldName: fieldsLogin[0].name,
			formId: "login",
			placeholder: fieldsLogin[0].placeholder,
		});
		this.children.inputP = new Input({
			fieldType: fieldsLogin[1].type,
			fieldName: fieldsLogin[1].name,
			formId: "login",
			placeholder: fieldsLogin[1].placeholder,
		});
		this.children.btnMain = new BtnMain({
			text: "Войти",
			onSubmit: (e) => e.preventDefault(),
			events: {
				submit: () => this.props.onSubmit,
			}
		});
		this.children.link = new Link({
			text: "Нет аккаунта?",
			linkClass: "form__link-to-action",
			onClick: () => render("registration"),
			events: {
				click: () => this.props.onClick,
			}
		})
	}

	render() {
		return this.compile(template, this.props);
	}
}
