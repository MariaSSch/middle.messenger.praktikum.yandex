import Block from "../../js/block";
import template from "./form-change-profile.pug";
import { FormFiled } from "../../components/form-field";
import { BtnMain } from "../../components/btn-main";
import { userProfile } from "../../js/utils/user-profile";
import * as validate from "../../js/utils/form-validation";

// interface FormChangeProfileProps {
// 	events?: {
// 		submit: (e: Event) => void;
// 	}
// }
export class FormChangeProfile extends Block {
	constructor() {
		super({
			events: {
				submit: (e: Event) => {
					e.preventDefault();

					const email = this.children.fieldEmail.getValue();
					const login = this.children.fieldLogin.getValue();
					const firstName = this.children.fieldName.getValue();
					const secondName = this.children.fieldSecondName.getValue();
					const chatName = this.children.fieldChatName.getValue();
					const phone = this.children.fieldPhone.getValue();

					console.log({
						email,
						login,
						firstName,
						secondName,
						chatName,
						phone,
					});
				}
			}
		});
	}
	init() {
		this.children.fieldEmail = new FormFiled({
			labelTitle: userProfile[0].label,
			fieldType: userProfile[0].fieldType,
			fieldName: userProfile[0].fieldName,
			formId: "profile-change",
			fieldValue: userProfile[0].value,
			events: {
				focusout: (e: Event) => validate.isEmailValid(e),
			},
		});
		this.children.fieldLogin = new FormFiled({
			labelTitle: userProfile[1].label,
			fieldType: userProfile[1].fieldType,
			fieldName: userProfile[1].fieldName,
			formId: "profile-change",
			fieldValue: userProfile[1].value,
			events: {
				focusout: (e: Event) => validate.isLoginValid(e),
			},
		});
		this.children.fieldName = new FormFiled({
			labelTitle: userProfile[2].label,
			fieldType: userProfile[2].fieldType,
			fieldName: userProfile[2].fieldName,
			formId: "profile-change",
			fieldValue: userProfile[2].value,
			events: {
				focusout: (e: Event) => validate.isNameValid(e),
			},
		});
		this.children.fieldSecondName = new FormFiled({
			labelTitle: userProfile[4].label,
			fieldType: userProfile[4].fieldType,
			fieldName: userProfile[3].fieldName,
			formId: "profile-change",
			fieldValue: userProfile[3].value,
			events: {
				focusout: (e: Event) => validate.isNameValid(e),
			},
		});
		this.children.fieldChatName = new FormFiled({
			labelTitle: userProfile[4].label,
			fieldType: userProfile[4].fieldType,
			fieldName: userProfile[4].fieldName,
			formId: "profile-change",
			fieldValue: userProfile[4].value,
			events: {
				focusout: (e: Event) => validate.isNameValid(e),
			},
		});
		this.children.fieldPhone = new FormFiled({
			labelTitle: userProfile[5].label,
			fieldType: userProfile[5].fieldType,
			fieldName: userProfile[5].fieldName,
			formId: "profile-change",
			fieldValue: userProfile[5].value,
			events: {
				focusout: (e: Event) => validate.isPhoneValid(e),
			},
		});
		this.children.btnMain = new BtnMain({
			text: "Сохранить",
			// onSubmit: (e: Event) => e.preventDefault(),
			// events: {
			// 	submit: () => this.props.onSubmit,
			// }
		
		});

	}
	render() {
		return this.compile(template, this.props);
	}
}
