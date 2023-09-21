import { FormLogin } from "../../components/form-login";
import Block from "../../js/block";
import template from "./login.pug";
// import { fieldValidation } from "../../js/utils/form-validation";

export class Login extends Block {
  constructor() {
    super();
  }

  init() {
    this.children.formLogin = new FormLogin({
      // formId: "login",
      // action: "#",
      formTitle: "Войти",
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
