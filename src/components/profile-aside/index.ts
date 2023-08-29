import Block from "../../js/block";
import { LinkRound } from "../a-link-round";
import template from "./profile-aside.pug";
import { render } from "../../js/render";

interface ProfileAsideProps {
	toPage: string;
}

export class ProfileAside extends Block {
	constructor(props: ProfileAsideProps) {
		super(props)
	}

	init() {
		this.children.linkRound = new LinkRound({
			direction: "&#8592;",
			onClick: () => render(this.props.toPage as any),
			events: {
				click: () => this.props.onClick,
			}
		})
	}

	render() {
		return this.compile(template, this.props)
	}
}
