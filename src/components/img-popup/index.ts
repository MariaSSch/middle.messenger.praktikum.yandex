import Block from "../../js/block";
import template from "./img-popup.pug";

interface ImgPopupProps {
	src: string;
	alt: string;
	className: string;
	onClick: () => void;
	events: {
		click: () => void;
	}
}

export class ImgPopup extends Block {
	constructor(props: ImgPopupProps){
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
