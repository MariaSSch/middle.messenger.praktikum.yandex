import Block from "../../js/block";
import template from "./form-registration.pug";
import { Input } from "../input";
import { BtnMain } from "../btn-main";
import { fieldsRegistration } from "../../js/utils/registration-page-fields"
import { Link } from "../link";
import { render } from "../../js/render";
import * as validate from "../../js/utils/form-validation";

interface FormProps {
	formId: string;
	action: string;
	formTitle: string;
};

export class FormRegistration extends Block {
	constructor(props: FormProps) {
		super({...props,
			events: {
				submit: (e: Event) => {
					e.preventDefault();
					const email = this.children.inputE.getValue();
					const login = this.children.inputL.getValue();
					const name = this.children.inputN.getValue();
					const lastName = this.children.inputS.getValue();
					const phone = this.children.inputT.getValue();
					const pass = this.children.inputP.getValue();
					const pass2 = this.children.inputP2.getValue();
					
					console.log({
						email,
						login,
						name,
						lastName,
						phone,
						pass,
						pass2
					})
				}
			}});
	}

	init() {

		this.children.inputE = new Input({
			fieldType: fieldsRegistration[0].type,
			fieldName: fieldsRegistration[0].name,
			formId: "registration",
			placeholder: fieldsRegistration[0].placeholder,
			fieldPattern: "/^[A-Z0-9.\-_]+@[A-Z0-9]+.+.[A-Z]{2,4}$/i",
			events: {
				focusout: function (e: Event) {validate.isEmailValid(e)},
			},

		});
		this.children.inputL = new Input({
			fieldType: fieldsRegistration[1].type,
			fieldName: fieldsRegistration[1].name,
			formId: "registration",
			placeholder: fieldsRegistration[1].placeholder,
			fieldPattern: "/^[a-zA-Z]([a-zA-Z0-9_]){3,20}$/gi",
			events: {
				focusout: function (e: Event) {validate.isLoginValid(e)},
			},

		});
		this.children.inputN = new Input({
			fieldType: fieldsRegistration[2].type,
			fieldName: fieldsRegistration[2].name,
			formId: "registration",
			placeholder: fieldsRegistration[2].placeholder,
			fieldPattern: "/^[A-ZА-Я\\-][a-zа-я\\-]+/g",
			events: {
				focusout: function (e: Event) {validate.isNameValid(e)},
			},

		});
		this.children.inputS= new Input({
			fieldType: fieldsRegistration[3].type,
			fieldName: fieldsRegistration[3].name,
			formId: "registration",
			placeholder: fieldsRegistration[3].placeholder,
			fieldPattern: "/^[A-ZА-Я][a-zа-я]+/g",
			events: {
				focusout: function (e: Event) {validate.isNameValid(e)},
			},

		});
		this.children.inputT = new Input({
			fieldType: fieldsRegistration[4].type,
			fieldName: fieldsRegistration[4].name,
			formId: "registration",
			placeholder: fieldsRegistration[4].placeholder,
			fieldPattern: `^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/g`,
			events: {
				focusout: function (e: Event) {validate.isPhoneValid(e)},
			},

		});
		this.children.inputP = new Input({
			fieldType: fieldsRegistration[5].type,
			fieldName: fieldsRegistration[5].name,
			formId: "registration",
			placeholder: fieldsRegistration[5].placeholder,
			fieldPattern: "/^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,40}$/g",
			events: {
				focusout: function (e: Event) {validate.isPassValid(e)},
			},

		});
		this.children.inputP2 = new Input({
			fieldType: fieldsRegistration[6].type,
			fieldName: fieldsRegistration[6].name,
			formId: "registration",
			placeholder: fieldsRegistration[6].placeholder,
			fieldPattern: "/^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,40}$/g",
			events: {
				focusout: function (e: Event) {validate.isPassValid(e)},
			},

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
