import Block from "../../js/block";
import template from "./error404.pug";
import { Error } from "../../components/error";

export class Error404 extends Block {
  constructor() {
    super();
  }

  init() {
    this.children.error404 = new Error({
      errorCode: "404",
      message: "Не туда попали",
      toPage: "chats",
      linkMessage: "Назад к чатам",
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
