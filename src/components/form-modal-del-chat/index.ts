import Block from "../../js/block";
import { onSubmit } from "../../js/onSubmit";
import { BtnMain } from "../btn-main";
import { Form } from "../form";
import template from "./form-modal-del-chat.pug";

interface FormModalDelChatProps {
	text: string;
	onSubmit: () => void;
}

export class FormModalDelChat extends Block {
  constructor(props: FormModalDelChatProps) {
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
      formId: "delChat",
      onSubmit: (e) => {
        e.preventDefault();
        onSubmit.call(this);
      },
    });
    this.children.btnMain = new BtnMain({
      text: this.props.text as string,
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
