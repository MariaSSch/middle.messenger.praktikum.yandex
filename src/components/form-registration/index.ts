import Block from "../../js/block";
import template from "./form-registration.pug";
import { Input } from "../input";
import { BtnMain } from "../btn-main";
import { fieldsRegistration } from "../../js/forms/registration-page-fields";
import { Link } from "../link";
import { render } from "../../js/render";
import * as validate from "../../js/form-validation";
import { Form } from "../form";
import { onSubmit } from "../../js/onSubmit";

interface FormProps {
	formTitle: string;
}

export class FormRegistration extends Block {
  constructor(props: FormProps) {
    super({
      ...props,
      events: {
        submit: (e: Event) => {
          const pass1 = this.children.inputP.getValue();
          const pass2 = this.children.inputP2.getValue();
          if (pass1 === pass2 && validate.isFormValid(e)) {
            onSubmit.call(this);
            render("chats");
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
      formId: "registration",
      action: "#",
      className: "form",
    });
    this.children.inputE = new Input({
      fieldType: fieldsRegistration[0].type,
      fieldName: fieldsRegistration[0].name,
      formId: "registration",
      placeholder: fieldsRegistration[0].placeholder,
      fieldPattern: "^\\w+([\\.\\-]?\\w+)*@\\w+([\\.\\-]?\\w+)*(\\.\\w{2,3})+$",
      events: {
        focusout: (e: Event) => { validate.isFieldValid(e); },
      },

    });
    this.children.inputL = new Input({
      fieldType: fieldsRegistration[1].type,
      fieldName: fieldsRegistration[1].name,
      formId: "registration",
      placeholder: fieldsRegistration[1].placeholder,
      fieldPattern: "^[A-Za-z][a-z0-9_\\-]{2,19}$",
      events: {
        focusout: (e: Event) => { validate.isFieldValid(e); },
      },

    });
    this.children.inputN = new Input({
      fieldType: fieldsRegistration[2].type,
      fieldName: fieldsRegistration[2].name,
      formId: "registration",
      placeholder: fieldsRegistration[2].placeholder,
      fieldPattern: "^[A-ZА-Я][a-zа-я\\-]+",
      events: {
        focusout: (e: Event) => { validate.isFieldValid(e); },
      },

    });
    this.children.inputS = new Input({
      fieldType: fieldsRegistration[3].type,
      fieldName: fieldsRegistration[3].name,
      formId: "registration",
      placeholder: fieldsRegistration[3].placeholder,
      fieldPattern: "^[A-ZА-Я][a-zа-я]+",
      events: {
        focusout: (e: Event) => { validate.isFieldValid(e); },
      },

    });
    this.children.inputT = new Input({
      fieldType: fieldsRegistration[4].type,
      fieldName: fieldsRegistration[4].name,
      formId: "registration",
      placeholder: fieldsRegistration[4].placeholder,
      fieldPattern: "^(8|\\+7)[0-9]{9,14}$",
      events: {
        focusout: (e: Event) => { validate.isFieldValid(e); },
      },

    });
    this.children.inputP = new Input({
      fieldType: fieldsRegistration[5].type,
      fieldName: fieldsRegistration[5].name,
      formId: "registration",
      placeholder: fieldsRegistration[5].placeholder,
      fieldPattern: "^[A-Za-z0-9]{8,40}$",
      events: {
        focusout: (e: Event) => { validate.isFieldValid(e); },
      },

    });
    this.children.inputP2 = new Input({
      fieldType: fieldsRegistration[6].type,
      fieldName: fieldsRegistration[6].name,
      formId: "registration",
      placeholder: fieldsRegistration[6].placeholder,
      fieldPattern: "^[A-Za-z0-9]{8,40}$",
      events: {
        focusout: (e: Event) => {
          validate.isFieldValid(e);
          const value = this.children.inputP.getValue();
          validate.isPassMatching(e, value);
        },
      },

    });
    this.children.btnMain = new BtnMain({
      text: "Зарегистрироваться",
    });
    this.children.link = new Link({
      text: "Войти",
      linkClass: "form__link-to-action",
      onClick: () => render("login"),
      events: {
        click: () => this.props.onClick,
      },

    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
