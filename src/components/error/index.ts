import Block from "../../js/block";
import { Link } from "../link";
import { render } from "../../js/render";
import template from "./error.pug";

interface ErrorProps {
	errorCode: string;
	message: string;
	toPage?: string;
	linkMessage: string;
}

export class Error extends Block {
  constructor(props: ErrorProps) {
    super(props);
  }

  init() {
    this.children.link = new Link({
      text: this.props.linkMessage as string,
      linkClass: "error__linkTo",
      onClick: () => render("chats"),
      events: {
        click: () => this.props.onClick,
      },

    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
