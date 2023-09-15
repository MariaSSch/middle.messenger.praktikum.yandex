import Block from "../../js/block";
import { BtnMain } from "../btn-main";
import template from "./form-modal-del-chat.pug";

interface FormModalDelChatProps {
	formId: string;
	text: string;
}

export class FormModalDelChat extends Block {
	constructor(props: FormModalDelChatProps) {
		super({...props,
			events: {
				submit: (e: Event) => {
					e.preventDefault();
						console.log("chat")
				},
			},
		});
	}
	init() {
		this.children.btnMain = new BtnMain({
			text: this.props.text as string,
		})
	}

	render() {
		return this.compile(template, this.props);
	}

}
