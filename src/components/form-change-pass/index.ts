import Block from "../../js/block";
import template from "./form-change-pass.pug";
import { BtnMain } from "../../components/btn-main";
import { FormFiled } from "../../components/form-field";
import { fieldsChangePass } from "../../js/utils/change-pass-fields";

export class FormChangePass extends Block {
	constructor() {
		super();
	}

	init() {
		this.children.formFiledOldpass = new FormFiled({
			labelTitle: fieldsChangePass[0].label,
			fieldType: fieldsChangePass[0].type,
			fieldName: fieldsChangePass[0].name,
			formId: "pass-change",
			fieldValue: fieldsChangePass[0].value
		});
		this.children.formFiledNewPass = new FormFiled({
			labelTitle: fieldsChangePass[1].label,
			fieldType: fieldsChangePass[1].type,
			fieldName: fieldsChangePass[1].name,
			formId: "pass-change",
			fieldValue: fieldsChangePass[1].value
		});
		this.children.formFiledNewDouble = new FormFiled({
			labelTitle: fieldsChangePass[2].label,
			fieldType: fieldsChangePass[2].type,
			fieldName: fieldsChangePass[2].name,
			formId: "pass-change",
			fieldValue: fieldsChangePass[2].value
		});
		this.children.btnMain = new BtnMain({
			text: "Сохранить",
			onSubmit: (e) => e.preventDefault,
			events: {
				submit: () => this.props.onSubmit,
			}
		});
	}

	render() {
		return this.compile(template, this.props);
	}
}
