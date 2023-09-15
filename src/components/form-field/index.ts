import Block from "../../js/block";
import template from "./form-field.pug";

interface FormFieldProps {
	labelTitle: string;
	fieldType: string;
	fieldName: string;
	formId: string;
	fieldValue?: string;
	pattern?: string;
	events?: {
		focusout?: (e: Event) => void,
	}
};

export class FormFiled extends Block {
	constructor(props: FormFieldProps) {
		super({...props,
			events: {
				change: (e: Event) => {
					const input = e.target as HTMLInputElement;
					input!.value = (e.target as HTMLInputElement).value;
					console.log("changed")
				}
			}})
	}

	render() {
		return this.compile(template, this.props);
	}
}
