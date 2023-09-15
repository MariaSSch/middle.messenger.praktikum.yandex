import Block from "../../js/block";
import { BtnMain } from "../btn-main";
import template from "./form-modal-input.pug";

interface FormModalInputProps {
	formId: string;
	text: string;
}

export class FormModalInput extends Block {
	constructor(props: FormModalInputProps) {
		super({...props,
			events: {
				submit: (e: Event) => {
					e.preventDefault();
					const form = this.getElement();
					if (form!.querySelector("input")) {
						const value = form!.querySelector("input")!.value;
						console.log({value});
					} else {
						console.log("chat")
					}
				},
			},
			text: props.text,

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
