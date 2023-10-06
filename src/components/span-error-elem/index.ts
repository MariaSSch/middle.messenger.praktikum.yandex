import Block from "../../js/block";
import template from "./span-error-elem.pug";

interface SpanErrorProps {
	inputError?: string;
}

export class SpanError extends Block {
  constructor(props: SpanErrorProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
