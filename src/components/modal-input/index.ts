import Block from "../../js/block";
import { FormModalInput } from "../form-modal-input";
import { Modal } from "../modal";
import template from "./modal-input.pug";
import * as validate from "../../js/form-validation";
import { onSubmit } from "../../js/onSubmit";


interface ModalInputProps {
	formId: string;
	text: string;
	modalTitle: string;
	onClick: () => void;
	id?: string;
}
export class ModalInput extends Block {
  constructor(props: ModalInputProps) {
    super({
      ...props,
      events: {
        click: props.onClick,
      },
    });
  }

  init() {
    this.children.modal = new Modal();
    this.children.formModalInput = new FormModalInput({
      formId: this.props.formId as string,
      text: this.props.text as string,
      onSubmit: (e: Event) => {
        if (validate.isFormValid(e)) {
					e.preventDefault();
          onSubmit.call(this);
          this.hide();
        } else {
          e.preventDefault();
          e.stopImmediatePropagation();
          console.log("form is invalid");
        }
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
