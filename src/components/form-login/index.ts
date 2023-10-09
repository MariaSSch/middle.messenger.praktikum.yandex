import Block from "../../js/block";
import template from "./form-login.pug";
import { Input } from "../input";
import { BtnMain } from "../btn-main";
import { fieldsLogin } from "../../js/forms/login-page-fields";
import { Link } from "../link";
import { render } from "../../js/render";
import * as validate from "../../js/form-validation";
import { Form } from "../form";
import { onSubmit } from "../../js/onSubmit";
import authController from "../../controllers/auth-controller";

interface FormProps {
	// formId: string;
	// action: string;
	formTitle: string;
}

export class FormLogin extends Block {
  constructor(props: FormProps) {
    super({
      ...props,
      events: {
        submit: (e: Event) => {
          if (validate.isFormValid(e)) {
            ; //??
            // render("chats");
						authController.signin(onSubmit.call(this));
						
          } else {
            e.preventDefault();
            e.stopImmediatePropagation();
            console.log("form is invalid");
          }
        },
      },
    });
  }

  init() {
    this.children.form = new Form({
      formId: "login",
      action: "#",
      className: "form",
    });
    this.children.inputL = new Input({
      fieldType: fieldsLogin[0].type,
      fieldName: fieldsLogin[0].name,
      formId: "login-form",
      placeholder: fieldsLogin[0].placeholder,
      fieldPattern: "^[A-Za-z][a-z0-9_\\-]{2,19}$",
      events: {
        focusout: (e: Event) => { validate.isFieldValid(e); },
      },
    });
    this.children.inputP = new Input({
      fieldType: fieldsLogin[1].type,
      fieldName: fieldsLogin[1].name,
      formId: "login-form",
      placeholder: fieldsLogin[1].placeholder,
      fieldPattern: "^[A-Za-z0-9]{8,40}$",
      events: {
        focusout: (e: Event) => { validate.isFieldValid(e); },
      },

    });
    this.children.btnMain = new BtnMain({
      text: "Войти",
    });
    this.children.link = new Link({
      text: "Нет аккаунта?",
      linkClass: "form__link-to-action",
      onClick: () => render("registration"),
      events: {
        click: () => this.props.onClick,
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
