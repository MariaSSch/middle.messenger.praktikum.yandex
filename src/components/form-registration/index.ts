import Block from "../../js/block";
import template from "./form-registration.pug";
import { Input } from "../input";
import { BtnMain } from "../btn-main";
import { fieldsRegistration } from "../../js/utils/registration-page-fields"
import { Link } from "../link";
import { render } from "../../js/render";

interface FormProps {
	formId: string;
	action: string;
	formTitle: string;
};

export class FormRegistration extends Block {
	constructor(props: FormProps) {
		super(props);
	}

	init() {

		this.children.inputE = new Input({
			fieldType: fieldsRegistration[0].type,
			fieldName: fieldsRegistration[0].name,
			formId: "registration",
			placeholder: fieldsRegistration[0].placeholder,
		});
		this.children.inputL = new Input({
			fieldType: fieldsRegistration[1].type,
			fieldName: fieldsRegistration[1].name,
			formId: "registration",
			placeholder: fieldsRegistration[1].placeholder,
		});
		this.children.inputN = new Input({
			fieldType: fieldsRegistration[2].type,
			fieldName: fieldsRegistration[2].name,
			formId: "registration",
			placeholder: fieldsRegistration[2].placeholder,
		});
		this.children.inputS= new Input({
			fieldType: fieldsRegistration[3].type,
			fieldName: fieldsRegistration[3].name,
			formId: "registration",
			placeholder: fieldsRegistration[3].placeholder,
		});
		this.children.inputT = new Input({
			fieldType: fieldsRegistration[4].type,
			fieldName: fieldsRegistration[4].name,
			formId: "registration",
			placeholder: fieldsRegistration[4].placeholder,
		});
		this.children.inputP = new Input({
			fieldType: fieldsRegistration[5].type,
			fieldName: fieldsRegistration[5].name,
			formId: "registration",
			placeholder: fieldsRegistration[5].placeholder,
		});
		this.children.inputP2 = new Input({
			fieldType: fieldsRegistration[6].type,
			fieldName: fieldsRegistration[6].name,
			formId: "registration",
			placeholder: fieldsRegistration[6].placeholder,
		});
		this.children.btnMain = new BtnMain({
			text: "Зарегистрироваться",
			onSubmit: (e) => e.preventDefault(),
			events: {
				submit: () => this.props.onSubmit,
			}
		});
		this.children.link = new Link({
			text: "Войти",
			linkClass: "form__link-to-action",
			onClick: () => render("login"),
			events: {
				click: () => this.props.onClick,
			}
		
		})
	}

	render() {
		return this.compile(template, this.props);
	}
}
