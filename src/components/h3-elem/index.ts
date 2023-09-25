import Block from "../../js/block";
import template from "./h3-elem.pug";

interface H3ElemProps {
	className: string;
	value: string;
}

export class H3Elem extends Block {
  constructor(props: H3ElemProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
