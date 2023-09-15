import Block from "../../js/block";
import template from "./form-change-pass.pug";
import { BtnMain } from "../../components/btn-main";
import { FormFiled } from "../../components/form-field";
import { fieldsChangePass } from "../../js/utils/change-pass-fields";
import * as validate from "../../js/utils/form-validation";

export class FormChangePass extends Block {
	constructor() {
		super({
			events: {
				submit: (e: Event) => {
					e.preventDefault();
					
					const oldPass = this.children.formFiledOldpass.getValue();
					const newPass = this.children.formFiledNewPass.getValue();
					const newPassDouble = this.children.formFiledNewDouble.getValue();

					if (newPass !== newPassDouble) {
						console.log("Passwords dont match each other");
						return;
					}

					console.log({
						oldPass,
						newPass,
						newPassDouble,
					})
				}
			}
		});
	}

	init() {
		this.children.formFiledOldpass = new FormFiled({
			labelTitle: fieldsChangePass[0].label,
			fieldType: fieldsChangePass[0].type,
			fieldName: fieldsChangePass[0].name,
			formId: "pass-change",
			fieldValue: fieldsChangePass[0].value,
			events: {
				focusout: (e: Event) => validate.isPassValid(e),
			},
		});
		this.children.formFiledNewPass = new FormFiled({
			labelTitle: fieldsChangePass[1].label,
			fieldType: fieldsChangePass[1].type,
			fieldName: fieldsChangePass[1].name,
			formId: "pass-change",
			fieldValue: fieldsChangePass[1].value,
			events: {
				focusout: (e: Event) => validate.isPassValid(e),
			},
		});
		this.children.formFiledNewDouble = new FormFiled({
			labelTitle: fieldsChangePass[2].label,
			fieldType: fieldsChangePass[2].type,
			fieldName: fieldsChangePass[2].name,
			formId: "pass-change",
			fieldValue: fieldsChangePass[2].value,
			events: {
				focusout: (e: Event) => validate.isPassValid(e),
			},
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
