import Block from "../../js/block";
import { Avatar } from "../avatar";
import { ImgPopup } from "../img-popup";
import template from "./chat-header.pug";
import { ModalInput } from "../modal-input";
import { ModalDelChat } from "../modal-del-chat";
import { PopupHeaderItem } from "../popup-header-item";
import { PopupHeader } from "../popup-header";

interface ChatHeaderProps {
	name: string;
	avatarSrc: string;
	src: string;
	descr: string;
}

export class ChatHeader extends Block {
  constructor(props: ChatHeaderProps) {
    super(props);
  }

  init() {
    this.children.avatar = new Avatar({
      avatarClass: "chats__header-avatar",
      avatarSrc: this.props.avatarSrc as string,
    });
    this.children.imgPopup = new ImgPopup({
      src: "/imgs/expander.png",
      alt: "expander",
      className: "",
      onClick: () => {
        const popup = this.children.popupHeader.getElement();
        if (popup?.style.display === "none") {
          this.children.popupHeader.show("block");
        } else {
          this.children.popupHeader.hide();
        }
      },
      events: {
        click: () => this.props.onClick,
      },
    });
    this.children.popupHeader = new PopupHeader();
    this.children.popupAddUser = new PopupHeaderItem({
      src: "/imgs/cross.png",
      descr: "Добавить пользователя",
      onClick: () => {
        this.children.modalAddUser.show("flex");
        this.children.popupHeader.hide();
      },
    });
    this.children.popupDelUser = new PopupHeaderItem({
      src: "/imgs/cross.png",
      descr: "Удалить пользователя",
      onClick: () => {
        this.children.modalDelUser.show("flex");
        this.children.popupHeader.hide();
      },
    });
    this.children.popupDelChat = new PopupHeaderItem({
      src: "/imgs/bin.png",
      descr: "Удалить чат",
      onClick: () => {
        this.children.modalDelChat.show("flex");
        this.children.popupHeader.hide();
      },
    });
    this.children.modalAddUser = new ModalInput({
      formId: "add-user",
      id: "addUser",
      text: "Добавить",
      modalTitle: "Добавить пользователя",
      onClick: () => this.children.modalAddUser.hide(),
    });
    this.children.modalDelUser = new ModalInput({
      formId: "delete-user",
      id: "delUser",
      text: "Удалить",
      modalTitle: "Удалить пользователя",
      onClick: () => this.children.modalDelUser.hide(),

    });
    this.children.modalDelChat = new ModalDelChat({
      formId: "delete-chat",
      id: "delChat",
      text: "Удалить чат",
      modalTitle: "Удалить чат",
      onClick: () => this.children.modalDelChat.hide(),

    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
