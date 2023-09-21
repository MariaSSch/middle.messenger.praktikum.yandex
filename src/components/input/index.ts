import Block from "../../js/block";
import { SpanError } from "../span-error-elem";
import template from "./input.pug";

interface InputProps {
	fieldType: string;
	fieldName: string;
	formId: string;
	placeholder: string;
	fieldPattern: string;
	events: {
		focusout: (e: Event) => void,
	}
}

export class Input extends Block {
  constructor(props: InputProps) {
    super(props);
  }

  init() {
    this.children.spanError = new SpanError({
      inputError: "",
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
