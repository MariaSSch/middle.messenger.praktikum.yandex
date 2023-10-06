import Block from "../../js/block";
import template from "./form.pug";

interface FormProps {
	className: string;
	method?: string;
	formId: string;
	action?: string;
	onInput?: (e: Event) => void;
	onSubmit?: (e: Event) => void;
}

export class Form extends Block {
  constructor(props: FormProps) {
    super({
      ...props,
      events: {
        input: props.onInput,
        submit: props.onSubmit,
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
