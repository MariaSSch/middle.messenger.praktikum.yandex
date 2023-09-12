import Block from "../../js/block";
import { PopupHeaderItem } from "../popup-header-item";
import template from "./popup-header.pug";
import { modalAddUser, modalDeleteUser, modalDeleteChat } from "../../js/modals/modals-chat-menu";

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
			onClick: () => modalAddUser(),
			events: {
				click: () => this.props.onClick,
			}
		});
		this.children.popupDelUser = new PopupHeaderItem({
			src: "/imgs/cross.png",
			descr: "Удалить пользователя",
			onClick: () => modalDeleteUser(),
			events: {
				click: () => this.props.onClick,
			}
		});
		this.children.popupDelChat = new PopupHeaderItem({
			src: "/imgs/bin.png",
			descr: "Удалить чат",
			onClick: () => modalDeleteChat(),
			events: {
				click: () => this.props.onClick,
			}
		});
	}
	render() {
		return this.compile(template, this.props);
	}
}
