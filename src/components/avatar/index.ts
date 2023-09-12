import Block from "../../js/block";
import template from "./avatar.pug";

interface AvatarProps {
	avatarClass?: string;
	avatarSrc?: string;
	onClick?: () => void;
	events?: {
		click: () => void,
	};
}

export class Avatar extends Block {
	constructor(props: AvatarProps) {
		super({...props,
			events: {
				click: props.onClick
			}
		});
	}

	render() {
		return this.compile(template, this.props);
	}
}
