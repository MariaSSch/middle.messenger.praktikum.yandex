import Block from "../../js/block";
import { BtnMain } from "../btn-main";
import template from "./modal-input.pug";

interface ModalInputProps {
	modalTitle: string;
	formId: string;
	fieldName: string;
	btnValue: string;
}
export class ModalInput extends Block {
	constructor(props: ModalInputProps) {
		super(props);
	}
	init() {
		this.children.btnMain = new BtnMain({
			text: this.props.btnValue as string,
			btnMainClass: "chat-modal-btn",
			onSubmit: (e) => e.preventDefault(),
			events: {
				submit: () => this.props.onClick,
			}
				})
	}
	render() {
		return this.compile(template, this.props);
	}
}
