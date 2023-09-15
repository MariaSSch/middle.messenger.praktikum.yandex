import Block from "../../js/block";
import { FormModalDelChat } from "../form-modal-del-chat";
import { Modal } from "../modal";
import template from "./modal-del-chat.pug";

interface ModalDelChatProps {
	formId: string;
	text: string;
	modalTitle: string;
	onClick: () => void;
	id?: string;
}
export class ModalDelChat extends Block {
	constructor(props: ModalDelChatProps) {
		super({...props,
			events: {
				click: props.onClick,
			},
		});
	}
	init() {
		this.children.modal = new Modal();
		this.children.formModalDelChat = new FormModalDelChat({
			formId: "delChat",
			text: "Удалить",
		});
	}
	render() {
		return this.compile(template, this.props);
	}
}
