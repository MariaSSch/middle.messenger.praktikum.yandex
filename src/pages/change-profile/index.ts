import { Avatar } from "../../components/avatar";
import { FormChangeProfile } from "../../components/form-change-profile";
import { ProfileAside } from "../../components/profile-aside";
import Block from "../../js/block";
import template from "./change-profile.pug";

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
		});
		this.children.formChangeProfile = new FormChangeProfile();
	}
	render() {
		return this.compile(template, this.props);
	}
}
