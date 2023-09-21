import Block from "../../js/block";
import template from "./p-elem.pug";

interface PElemProps {
	className: string;
	value: string;
}

export class PElem extends Block {
  constructor(props: PElemProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
