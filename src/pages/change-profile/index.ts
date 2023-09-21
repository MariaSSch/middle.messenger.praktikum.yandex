import { Avatar } from "../../components/avatar";
import { FormChangeProfile } from "../../components/form-change-profile";
import { ModalAttach } from "../../components/modal-attach";
import { ProfileAside } from "../../components/profile-aside";
import Block from "../../js/block";
import template from "./change-profile.pug";

export class ChangeProfile extends Block {
  constructor() {
    super();
  }

  init() {
    this.children.profileAside = new ProfileAside({
      toPage: "profile",
    });
    this.children.avatar = new Avatar({
      avatarClass: "profile__avatar  profile__avatar_active",
      // avatarSrc: "",
      onClick: () => {
        this.children.modalAttach.show("flex");
      },
      events: {
        click: () => this.props.onClick,
      },
    });
    this.children.formChangeProfile = new FormChangeProfile();

    this.children.modalAttach = new ModalAttach({
      onClick: () => this.children.modalAttach.hide(),
      events: {
        click: () => this.props.onClick,
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
