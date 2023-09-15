import Block from "../../js/block";
import { FormModalAttach } from "../form-modal-attach";
import { Modal } from "../modal";
import template from "./modal-attach.pug";

interface ModalAttachProps {
	onClick: () => void;
	events: {
		click: () => void,
	};
}
export class ModalAttach extends Block {
	constructor(props: ModalAttachProps) {
		super({...props,
			events: {
				click: props.onClick
			}});
	}
	init() {
		this.children.modal = new Modal();
		this.children.formModalAttach = new FormModalAttach();
	}
	render() {
		return this.compile(template, this.props);
	}
}
