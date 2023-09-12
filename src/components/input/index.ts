import Block from "../../js/block";
import template from "./input.pug";
// import { fieldValidation } from "../../js/utils/form-validation";

interface InputProps {
	fieldType: string;
	fieldName: string;
	formId: string;
	placeholder: string;
	inputErrorMsg?: string;
	fieldPattern: string;
	onBlur?: (e: Event) => void;
	events?: {
		focusout: (e: Event) => void;
	}
};

export class Input extends Block {
	constructor(props: InputProps) {
		super({
			...props,
		events: {
			blur: props.onBlur,
		}
	});
	}

	render() {
		return this.compile(template, this.props);
	}
}
