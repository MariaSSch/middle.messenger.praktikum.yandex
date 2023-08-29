import Block from "../../js/block";
import { Avatar } from "../avatar";
import template from "./chat.pug";

interface ChatProps {
	name: string;
	time: string;
	messagePre: string;
	unreadNum: number;
	avatarSrc?: string | null;
}

export class Chat extends Block {
	constructor(props: ChatProps) {
		super(props)
	}

	init() {
		this.children.avatar = new Avatar({
			avatarClass: "chats__item-avatar",
			avatarSrc: this.props.avatarSrc as string,
		})
	}

	render() {
		return this.compile(template, this.props)
	}
}
