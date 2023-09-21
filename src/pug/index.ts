import { Link } from "../components/link";
import Block from "../js/block";
import template from "./index.pug";
import { render } from "../js/render";

export class MainPage extends Block {
  constructor() {
    super();
  }

  init() {
    this.children.linkLogin = new Link({
      text: "Логин",
      linkClass: "primary-title",
      onClick: () => render("login"),
      events: {
        click: this.props.onClick as () => void,
      },
    });
    this.children.linkReg = new Link({
      text: "Регистрация",
      linkClass: "primary-title",
      onClick: () => render("registration"),
      events: {
        click: this.props.onClick as () => void,
      },
    });
    this.children.linkChats = new Link({
      text: "Чаты",
      linkClass: "primary-title",
      onClick: () => render("chats"),
      events: {
        click: this.props.onClick as () => void,
      },
    });
    this.children.linkProfile = new Link({
      text: "Профиль",
      linkClass: "primary-title",
      onClick: () => render("profile"),
      events: {
        click: this.props.onClick as () => void,
      },
    });
    this.children.linkChangeProfile = new Link({
      text: "Изменить данные",
      linkClass: "primary-title",
      onClick: () => render("changeProfile"),
      events: {
        click: this.props.onClick as () => void,
      },
    });
    this.children.linkChangePass = new Link({
      text: "Изменить пароль",
      linkClass: "primary-title",
      onClick: () => render("changePass"),
      events: {
        click: this.props.onClick as () => void,
      },
    });
    this.children.linkError404 = new Link({
      text: "Ошибка 404",
      linkClass: "primary-title",
      onClick: () => render("error404"),
      events: {
        click: this.props.onClick as () => void,
      },
    });
    this.children.linkError500 = new Link({
      text: "Ошибка 500",
      linkClass: "primary-title",
      onClick: () => render("error500"),
      events: {
        click: this.props.onClick as () => void,
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
