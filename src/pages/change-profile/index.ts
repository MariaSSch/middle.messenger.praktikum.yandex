import { Avatar } from "../../components/avatar";
import { FormChangeProfile } from "../../components/form-change-profile";
import { ModalAttach } from "../../components/modal-attach";
import { ProfileAside } from "../../components/profile-aside";
import Block from "../../js/block";
import template from "./change-profile.pug";
import { displayModalContainer } from "../../js/modals/modals-change-avatar";
export class ChangeProfile extends Block{
	constructor() {
		super();
	}

	init() {
		this.children.profileAside = new ProfileAside({
			toPage: "profile"
		});
		this.children.avatar = new Avatar({
			avatarClass: "profile__avatar",
			// avatarSrc: "",
			onClick: () => displayModalContainer(),
			events: {
				click: () => this.props.onClick,
			}
		});
		this.children.formChangeProfile = new FormChangeProfile();
		this.children.modalAttach = new ModalAttach({
			formId: "attach-modal",
			fieldName: "avatar-file",
		});
	}
	render() {
		return this.compile(template, this.props);
	}
}
