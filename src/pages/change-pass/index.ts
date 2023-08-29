import { ProfileAside } from "../../components/profile-aside";
import Block from "../../js/block";
import { Avatar } from "../../components/avatar";
import { FormChangePass } from "../../components/form-change-pass";
import template from "./change-pass.pug";

export class ChangePass extends Block{
	constructor() {
		super();
	}

	init() {
		this.children.profileAside = new ProfileAside({
			toPage: "profile",
		});
		this.children.avatar = new Avatar({
			avatarClass: "profile__avatar",
			// avatarSrc: ""
		});
		this.children.formChangePass = new FormChangePass();
	}

	render() {
		return this.compile(template, this.props)
	}
}
