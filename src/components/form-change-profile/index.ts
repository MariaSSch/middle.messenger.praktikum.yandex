import Block from "../../js/block";
import template from "./form-change-profile.pug";
import { FormFiled } from "../../components/form-field";
import { BtnMain } from "../../components/btn-main";
import { userProfile } from "../../js/utils/user-profile";

export class FormChangeProfile extends Block {
	constructor() {
		super();
	}
	init() {
		this.children.fieldEmail = new FormFiled({
			labelTitle: userProfile[0].label,
			fieldType: userProfile[0].fieldType,
			fieldName: userProfile[0].fieldName,
			formId: "profile-change",
			fieldValue: userProfile[0].value,
		});
		this.children.fieldLogin = new FormFiled({
			labelTitle: userProfile[1].label,
			fieldType: userProfile[1].fieldType,
			fieldName: userProfile[1].fieldName,
			formId: "profile-change",
			fieldValue: userProfile[1].value,
		});
		this.children.fieldName = new FormFiled({
			labelTitle: userProfile[2].label,
			fieldType: userProfile[2].fieldType,
			fieldName: userProfile[2].fieldName,
			formId: "profile-change",
			fieldValue: userProfile[2].value,
		});
		this.children.fieldSecondName = new FormFiled({
			labelTitle: userProfile[4].label,
			fieldType: userProfile[4].fieldType,
			fieldName: userProfile[3].fieldName,
			formId: "profile-change",
			fieldValue: userProfile[3].value,
		});
		this.children.fieldChatName = new FormFiled({
			labelTitle: userProfile[4].label,
			fieldType: userProfile[4].fieldType,
			fieldName: userProfile[4].fieldName,
			formId: "profile-change",
			fieldValue: userProfile[4].value,
		});
		this.children.fieldPhone = new FormFiled({
			labelTitle: userProfile[5].label,
			fieldType: userProfile[5].fieldType,
			fieldName: userProfile[5].fieldName,
			formId: "profile-change",
			fieldValue: userProfile[5].value,
		});
		this.children.btnMain = new BtnMain({
			text: "Сохранить",
			onSubmit: (e: Event) => e.preventDefault,
			events: {
				submit: () => {
					this.props.onSubmit;
				}
			}
		});

	}
	render() {
		return this.compile(template, this.props);
	}
}
