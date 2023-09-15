import Block from "../../js/block";
import { changeAvatar } from "../../js/modals/modals-change-avatar";
import { BtnMain } from "../btn-main";
import { InputFile } from "../input-file";
import template from "./form-modal-attach.pug";

export class FormModalAttach extends Block {
	constructor() {
		super({
			events: {
				submit: (e: Event) => {
					e.preventDefault();
					const form = this.getElement() as HTMLFormElement;
					changeAvatar(form, e);
				}
			}});
	}
	init() {
		this.children.inputFile = new InputFile({
			accept: "image/*",
			className: "attach-input",
			name: "avatarInput",
			formId: "attach-avatar",
		});
		this.children.btnMain = new BtnMain({
			text: "Поменять",
			btnMainClass: "attach-modal-btn",
			onSubmit: (e) => e.preventDefault(),
			events: {
				submit: () => this.props.onSubmit,
			}
		});
	}
	render() {
		return this.compile(template, this.props);
	}
}
