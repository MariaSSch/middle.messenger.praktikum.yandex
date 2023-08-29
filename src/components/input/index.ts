import Block from "../../js/block";
import template from "./input.pug";

interface InputProps {
	fieldType: string;
	fieldName: string;
	formId: string;
	placeholder: string;
	inputErrorMsg?: string;
	onBlur?: () => void;
	events?: {
		blur: () => void;
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
