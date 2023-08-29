import Block from "../../js/block";
import template from "./popup-header.pug";

export class PopupHeader extends Block {
	constructor() {
		super({
			headerMenu: [
				{
					src: "/imgs/cross.png",
					descr: "Добавить пользователя"
				},
				{
					src: "/imgs/cross.png",
					descr: "Удалить пользователя"
				},
				{
					src: "/imgs/bin.png",
					descr: "Удалить чат"
				}
			]
		});
	}

	render() {
		return this.compile(template, this.props);
	}
}
