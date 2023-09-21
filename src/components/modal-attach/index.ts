import Block from "../../js/block";
import { Form } from "../form";
import { InputInit } from "../input-init";
import { BtnMain } from "../btn-main";
import { Modal } from "../modal";
import template from "./modal-attach.pug";
import { PElem } from "../p-elem";
import { H3Elem } from "../h3-elem";
import { onSubmit } from "../../js/onSubmit";

interface ModalAttachProps {
	onClick: () => void;
	events: {
		click: () => void,
	};
}
export class ModalAttach extends Block {
  constructor(props: ModalAttachProps) {
    super({
      ...props,
      events: {
        click: props.onClick,
      },
    });
  }

  init() {
    this.children.modal = new Modal();
    this.children.title = new H3Elem({
      className: "modal__title modal-attach-title",
      value: "Загрузите файл",
    });
    this.children.form = new Form({
      className: "modal__form attach-modal-form",
      formId: "attach-avatar",
      onSubmit: (e: Event) => {
        const input = this.children.inputFile.getElement() as HTMLInputElement;
        if (input.value === "") {
          this.children.note.show("block");
          e.preventDefault();
          e.stopImmediatePropagation();
        } else {
					e.preventDefault();
          onSubmit.call(this);
          this.hide();
        }
      },
    });
    this.children.inputFile = new InputInit({
      fieldType: "file",
      accept: "image/*",
      fieldClassName: "attach-input",
      name: "avatarInput",
      formId: "attach-avatar",
      events: {
        change: () => {
          const input = this.children.inputFile.getElement() as HTMLInputElement;
          const attachStatus = this.children.attachStatus.getElement() as HTMLElement;
          const title = this.children.title.getElement() as HTMLElement;
          if (input.value === "") {
            title.textContent = "Загрузите файл";
          } else if (input.value !== "") {
            attachStatus.textContent = input.value;
            title.textContent = "Файл выбран";
            this.children.note.hide();
          }
        },
      },
    });
    this.children.attachStatus = new PElem({
      className: "attach-placeholder",
      value: "Выбрать файл на компьютере",
    });
    this.children.btnMain = new BtnMain({
      text: "Поменять",
      btnMainClass: "attach-modal-btn",
    });
    this.children.note = new PElem({
      className: "attach-not-chosen",
      value: "Нужно выбрать файл",
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
