import Block from "../../js/block";
import { showHeaderPopup } from "../../js/pop-up-menu";
import { Avatar } from "../avatar";
import { ImgPopup } from "../img-popup";
import { PopupHeader } from "../popup-header";
import template from "./chat-header.pug";

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
	}

	render() {
		return this.compile(template, this.props);
	}
}
