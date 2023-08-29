import Block from "../../js/block";
import { BtnRound } from "../btn-round";
import { PopupFooter } from "../popup-footer";
import template from "./chat-footer.pug";

export class ChatFooter extends Block {
	constructor() {
		super()
	}

	init() {
		this.children.btnRound = new BtnRound({
			btnType: "submit",
			direction: "&#8594;",
			onSubmit: (e) => e.preventDefault,
			events: {
				submit: () => this.props.onSumit,
			}
		});

		this.children.popupFooter = new PopupFooter();
	}
	render() {
		return this.compile(template, this.props)
	}
}
