import Block from "../../js/block";
import { showFooterPopup } from "../../js/pop-up-menu";
import { BtnRound } from "../btn-round";
import { ImgPopup } from "../img-popup";
import { PopupFooter } from "../popup-footer";
import template from "./chat-footer.pug";

export class ChatFooter extends Block {
	constructor() {
		super()
	}

	init() {
		this.children.imgPopup = new ImgPopup({
			src: "/imgs/attach_sign.png",
			alt: "attach-sign",
			className: "chats__send-menu-btn",
			onClick: () => showFooterPopup(),
			events: {
				click: () => this.props.onClick,
			}
		})
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
