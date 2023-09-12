import Block from "../../js/block";
import { BtnMain } from "../btn-main";
import template from "./modal-attach.pug";

interface ModalAttachProps {
	formId: string;
	fieldName: string;
}
export class ModalAttach extends Block {
	constructor(props: ModalAttachProps) {
		super(props);
	}
	init() {
		this.children.btnMain = new BtnMain({
			text: "Поменять",
			btnMainClass: "attach-modal-btn",
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
