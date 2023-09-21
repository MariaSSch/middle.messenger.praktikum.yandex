import { FormRegistration } from "../../components/form-registration";
import Block from "../../js/block";
import template from "./registration.pug";

export class Registration extends Block {
  constructor() {
    super();
  }

  init() {
    this.children.formRegistration = new FormRegistration({
      formTitle: "Зарегистрироваться",
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
