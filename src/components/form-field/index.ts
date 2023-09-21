import Block from "../../js/block";
import { SpanError } from "../span-error-elem";
import template from "./form-field.pug";

interface FormFieldProps {
	labelTitle: string;
	fieldType: string;
	fieldName: string;
	formId: string;
	fieldPattern?: string;
	placeholder?: string;
	onFocusout: (e: Event) => void;

}

export class FormFiled extends Block {
  constructor(props: FormFieldProps) {
    super({
      ...props,
      events: {
        change: (e: Event) => {
          const input = e.target as HTMLInputElement;
					input!.value = (e.target as HTMLInputElement).value;
        },
        focusin: (e: Event) => {
          const input = e.target as HTMLInputElement;
					input!.placeholder = "";
        },
        focusout: props.onFocusout,
      },
    });
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
