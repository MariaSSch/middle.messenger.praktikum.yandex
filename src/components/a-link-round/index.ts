import Block from "../../js/block";
import template from "./a-link-round.pug";

interface LinkRoundProps {
	direction: string;
	onClick: () => void;
	events: {
		click: () => void;
	}
}

export class LinkRound extends Block {
	constructor(props: LinkRoundProps){
		super({
			...props,
		events: {
			click: props.onClick
		},
	});
	}

	render() {
		return this.compile(template, this.props)
	}
}
//direction="&#8594;"
