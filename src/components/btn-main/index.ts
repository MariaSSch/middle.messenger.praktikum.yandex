import Block from "../../js/block";
import template from "./btn-main.pug";

interface BtnMainProps {
	text: string;
	btnMainClass?: string;
	onSubmit?: (e: Event) => void;
	events?: {
		submit: () => void,
	};
}

export class BtnMain extends Block {
  constructor(props: BtnMainProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
