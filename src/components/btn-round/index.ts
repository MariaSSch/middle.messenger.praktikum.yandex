import Block from "../../js/block";
import template from "./btn-round.pug";

interface BtnRoundProps {
	btnType: string;
	direction: string;
	style?: string;
	onSubmit?: (e: Event) => void;
	events?: {
		submit: (e: Event) => void,
	}

}

export class BtnRound extends Block {
	constructor(props: BtnRoundProps) {
		super(props)
	}

	render() {
		return this.compile(template, this.props)
	}
}
//direction="&#8594;"
