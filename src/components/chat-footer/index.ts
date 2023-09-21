import Block from "../../js/block";
import { onSubmit } from "../../js/onSubmit";
import { BtnRound } from "../btn-round";
import { Form } from "../form";
import { ImgPopup } from "../img-popup";
import { InputInit } from "../input-init";
import { PopupFooter } from "../popup-footer";
import template from "./chat-footer.pug";

export class ChatFooter extends Block {
  constructor() {
    super();
  }

  init() {
    this.children.form = new Form({
      formId: "send-msg",
      className: "chats__send-form",
      onSubmit: (e) => {
        // if one of four inputs has value the form is valid and to be submited;
        const form = this.getElement();
        const inputs = form!.querySelectorAll("input");
        const hasInputValue: boolean[] = [];
        inputs.forEach((input) => {
          if (input.value !== "") {
            hasInputValue.push(true);
          } else {
            hasInputValue.push(false);
          }
        });
        if (hasInputValue.some((input) => input === true)) {
          e.preventDefault();
          onSubmit.call(this);
        } else {
          e.preventDefault();
          e.stopImmediatePropagation();
          console.log("form is invalid");
        }
      },
    });
    this.children.input = new InputInit({
      fieldType: "text",
      name: "message",
      fieldClassName: "chats__send-msg-input",
      placeholder: "Сообщение",
      formId: "send-msg",
    });
    this.children.imgPopup = new ImgPopup({
      src: "/imgs/attach_sign.png",
      alt: "attach-sign",
      className: "chats__send-menu-btn",
      onClick: () => {
        const popup = this.children.popupFooter.getElement();
        if (popup?.style.display === "none") {
          this.children.popupFooter.show("flex");
        } else {
          this.children.popupFooter.hide();
        }
      },
      events: {
        click: () => this.props.onClick,
      },
    });
    this.children.btnRound = new BtnRound({
      btnType: "submit",
      direction: "&#8594;",
    });

    this.children.popupFooter = new PopupFooter();
  }

  render() {
    return this.compile(template, this.props);
  }
}
