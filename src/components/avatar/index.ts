import Block from "../../js/block";
import template from "./avatar.pug";

interface AvatarProps {
	avatarClass?: string;
	avatarSrc?: string;
}

export class Avatar extends Block {
	constructor(props: AvatarProps) {
		super(props);
	}

	render() {
		return this.compile(template, this.props);
	}
}
