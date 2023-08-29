import Block from "../../js/block";
import template from "./popup-footer.pug";

export class PopupFooter extends Block {
	constructor() {
		super({
			footerMenu: [
				{
					src: "/imgs/attach_media.png",
					accept: "video/*, image/*",
					name: "attach_media",
					descr: "Фото или видео"
				},
				{
					src: "/imgs/attach_file.png",
					accept: "text/*, application/*",
					name: "attach_file",
					descr: "Файл"
				},
				{
					src: "/imgs/attach_location.png",
					accept: "application/*",
					name: "attach_location",
					descr: "Локация"
				}
			]
		});
	}

	render() {
		return this.compile(template, this.props);
	}
}
