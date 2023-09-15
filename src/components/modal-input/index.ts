import Block from "../../js/block";
import { FormModalInput } from "../form-modal-input";
import { Modal } from "../modal";
import template from "./modal-input.pug";

interface ModalInputProps {
	formId: string;
	text: string;
	modalTitle: string;
	onClick: () => void;
	id?: string;
}
export class ModalInput extends Block {
	constructor(props: ModalInputProps) {
		super({...props,
			events: {
				click: props.onClick,
			},
		});
	}
	init() {
		this.children.modal = new Modal();
		this.children.formModalInput = new FormModalInput({
			formId: this.props.formId as string,
			text: this.props.text as string,
		})
	}
	render() {
		return this.compile(template, this.props);
	}
}
