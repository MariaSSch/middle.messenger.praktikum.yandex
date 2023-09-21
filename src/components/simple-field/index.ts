import Block from "../../js/block";
import template from "./simple-field.pug";

interface SimpleFieldProps {
	fieldTitle: string;
	fieldValue: string;
}

export class SimpleFiled extends Block {
  constructor(props: SimpleFieldProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
