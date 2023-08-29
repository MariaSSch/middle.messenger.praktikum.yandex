import Block from "../../js/block";
import template from "./profile.pug";
import { ProfileAside } from "../../components/profile-aside";
import { Avatar } from "../../components/avatar";
import { userProfile } from "../../js/utils/user-profile";
import { SimpleFiled } from "../../components/simple-field";
import { Link } from "../../components/link";
import { render } from "../../js/render";

export class Profile extends Block {
	constructor() {
		super();
	}

	init() {
		this.children.profileAside = new ProfileAside({
			toPage: "chats",
		});
		this.children.avatar = new Avatar({
			avatarClass: "profile__avatar",
			// avatarSrc: "",
		});
		this.children.fieldEmail = new SimpleFiled({
			fieldTitle: userProfile[0].label,
			fieldValue: userProfile[0].value,
		});
		this.children.fieldLogin = new SimpleFiled({
			fieldTitle: userProfile[1].label,
			fieldValue: userProfile[1].value,
		});
		this.children.fieldName = new SimpleFiled({
			fieldTitle: userProfile[2].label,
			fieldValue: userProfile[2].value,
		});
		this.children.fieldSecondName = new SimpleFiled({
			fieldTitle: userProfile[3].label,
			fieldValue: userProfile[3].value,
		});
		this.children.fieldChatName = new SimpleFiled({
			fieldTitle: userProfile[4].label,
			fieldValue: userProfile[4].value,
		});
		this.children.fieldPhone = new SimpleFiled({
			fieldTitle: userProfile[5].label,
			fieldValue: userProfile[5].value,
		});
		this.children.linkChangeProfile = new Link({
			text: "Изменить данные",
			linkClass: "profile__change-data",
			onClick: () => render("changeProfile"),
			events: {
				click: () => this.props.onClick,
			}
		
		});
		this.children.linkChangePass = new Link({
			text: "Изменить пароль",
			linkClass: "profile__change-data",
			onClick: () => render("changePass"),
			events: {
				click: () => this.props.onClick,
			}
		
		});
		this.children.linkOut = new Link({
			text: "Выйти",
			linkClass: "profile__exit",
			onClick: () => render("chats"),
			events: {
				click: () => this.props.onClick,
			}
		
		});

	}

	render() {
		return this.compile(template, this.props)
	}
}
