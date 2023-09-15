import Block from "../../js/block";
import { showHeaderPopup } from "../../js/pop-up-menu";
import { Avatar } from "../avatar";
import { ImgPopup } from "../img-popup";
import { PopupHeader } from "../popup-header";
import template from "./chat-header.pug";
import { ModalInput } from "../modal-input";
import { modalDeleteChat } from "../../js/modals/modals-chat-menu";
import { ModalDelChat } from "../modal-del-chat";

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
			src: "/imgs/expander.png" ,
			alt: "expander",
			className: "",
			onClick: () => showHeaderPopup(),
			events: {
				click: () => this.props.onClick,
			}
		})
		this.children.popupHeader = new PopupHeader();
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
