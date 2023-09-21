import Block from "../../js/block";
import template from "./input-init.pug";


interface InputInitProps {
	fieldType: string;
	accept?: string;
	pattern?: string;
	name: string;
	fieldClassName: string;
	placeholder?: string;
	formId: string;
	events?: {
		change?: (e: Event) => void;
		focusout?: (e: Event) => void;
	}
}

export class InputInit extends Block {
  constructor(props: InputInitProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
