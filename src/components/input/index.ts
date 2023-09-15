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
	events?: {
		focusout?: (e: Event) => void,
	}
};

export class Input extends Block {
	constructor(props: InputProps) {
		super(props);
	}


	render() {
		return this.compile(template, this.props);
	}
}
