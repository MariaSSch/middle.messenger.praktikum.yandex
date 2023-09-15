import Block from "../../js/block";
import { PopupHeaderItem } from "../popup-header-item";
import template from "./popup-header.pug";
import { ModalInput } from "../modal-input";
export class PopupHeader extends Block {
	constructor() {
		super({
			headerMenu: [
				{
					src: "/imgs/cross.png",
					descr: "Добавить пользователя",
				},
				{
					src: "/imgs/cross.png",
					descr: "Удалить пользователя",
				},
				{
					src: "/imgs/bin.png",
					descr: "Удалить чат",
				}
			]
		});
	}
	init() {
		this.children.popupAddUser = new PopupHeaderItem({
			src: "/imgs/cross.png",
			descr: "Добавить пользователя",
			onClick: () => {
				(document.querySelector(".chats__header-expander")!.querySelector("#addUser") as HTMLElement).style.display = "flex";
			},
			events: {
				click: () => this.props.onClick,
			},
		});
		this.children.popupDelUser = new PopupHeaderItem({
			src: "/imgs/cross.png",
			descr: "Удалить пользователя",
			onClick: () => {
				(document.querySelector(".chats__header-expander")!.querySelector("#delUser") as HTMLElement).style.display = "flex";
			},
			events: {
				click: () => this.props.onClick,
			},

		});
		this.children.popupDelChat = new PopupHeaderItem({
			src: "/imgs/bin.png",
			descr: "Удалить чат",
			onClick: () => {
				(document.querySelector(".chats__header-expander")!.querySelector("#delChat") as HTMLElement).style.display = "flex";
			},
			events: {
				click: () => this.props.onClick,
			},
		});
		// this.children.modalAddUser = new ModalInput({
		// 	formId: "add-user",
		// 	text: "Добавить",
		// 	modalTitle: "Добавить пользователя",
		// });
		// this.children.modalDelUser = new ModalInput({
		// 	formId: "delete-user",
		// 	text: "Удалить",
		// 	modalTitle: "Удалить пользователя",
		// });
		// this.children.modalDelChat = new ModalInput({
		// 	formId: "delete-chat",
		// 	text: "Удалить чат",
		// 	modalTitle: "Удалить чат",
		// });

		

	}
	render() {
		return this.compile(template, this.props);
	}
}
