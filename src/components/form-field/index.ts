import Block from "../../js/block";
import template from "./form-field.pug";

interface FormFieldProps {
	labelTitle: string;
	fieldType: string;
	fieldName: string;
	formId: string;
	fieldValue?: string;
};

export class FormFiled extends Block {
	constructor(props: FormFieldProps) {
		super(props)
	}

	render() {
		return this.compile(template, this.props);
	}
}
