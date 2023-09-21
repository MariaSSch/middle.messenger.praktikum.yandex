import Block from "../../js/block";
import { BtnMain } from "../btn-main";
import { Form } from "../form";
import { InputInit } from "../input-init";
import template from "./form-modal-input.pug";
import * as validate from "../../js/form-validation";
import { SpanError } from "../span-error-elem";


interface FormModalInputProps {
	formId: string;
	text: string;
	onSubmit: (e: Event) => void;

}

export class FormModalInput extends Block {
  constructor(props: FormModalInputProps) {
    super({
      ...props,
      events: {
        submit: props.onSubmit,
      },
    });
  }

  init() {
    this.children.form = new Form({
      className: "modal__form chat-modal-form",
      formId: this.props.formId as string,
    });
    this.children.input = new InputInit({
      fieldType: "text",
      name: "login",
      formId: this.props.formId as string,
      placeholder: "Логин",
      fieldClassName: "chat-modal-label",
      pattern: "^[A-Za-z][a-z0-9_\\-]{2,19}$",
      events: {
        focusout: (e: Event) => { validate.isFieldValid(e); },
      },
    });
    this.children.spanError = new SpanError({
      inputError: "",
    });
    this.children.btnMain = new BtnMain({
      text: this.props.text as string,
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
