import Block from "../../js/block";
import template from "./chat-content.pug";

interface ChatContentProps {
	date: string;
	interlocutorMsg: string;
	msgTime: string;
	ownMsg: string;
}

export class ChatContent extends Block {
	constructor(props: ChatContentProps) {
		super(props)
	}

	render() {
		return this.compile(template, this.props)
	}
}
