import Block from "../../js/block";
import template from "./btn-main.pug";

interface BtnMainProps {
	text: string;
	onSubmit: (e: Event) => void;
	events: {
		submit: (e: Event) => void,
	}
}

export class BtnMain extends Block {
	constructor(props: BtnMainProps) {
		super({
			...props,
		events: {
			submit: props.onSubmit,
		}
	});
	}

	render() {
		return this.compile(template, this.props);
	}
}
