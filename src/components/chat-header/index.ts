import Block from "../../js/block";
import { Avatar } from "../avatar";
import { PopupHeader } from "../popup-header";
import template from "./chat-header.pug";

interface ChatHeaderProps {
	name: string;
	avatarSrc: string;
	src: string;
	descr: string;
	onClick?: () => void;
	events: {
		click: () => void,
	}
}

export class ChatHeader extends Block {
	constructor(props: ChatHeaderProps) {
		super({
			...props,
			events: {
				click: () => console.log("click")
			}
	});
	}

	init() {
		this.children.avatar = new Avatar({
			avatarClass: "chats__header-avatar",
			avatarSrc: this.props.avatarSrc as string,
		})
		this.children.popupHeader = new PopupHeader();
	}

	render() {
		return this.compile(template, this.props);
	}
}
