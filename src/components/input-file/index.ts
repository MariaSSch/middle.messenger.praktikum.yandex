import Block from "../../js/block";
import template from "./input-file.pug";

interface InputFileProps {
	accept: string;
	className: string;
	name: string;
	formId: string;
	events?: {
		change: (e: Event) => void,
	};
}

export class InputFile extends Block {
	constructor(props: InputFileProps) {
		super(props)
	}

	render() {
		return this.compile(template, this.props);
	}

}

