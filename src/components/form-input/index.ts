import Block from "../../js/block";
import template from "./form-input.pug";
import { chatList } from "../../js/forms/search-chat";

interface FormInputProps {
	className: string;
	method?: string;
	formId: string;
	fieldType: string;
	name: string;
	placeholder: string;
	fieldClassName: string;
}

export class FormInput extends Block {
	constructor(props: FormInputProps) {
		super({...props,
			events: {
				input: (e: Event) => {
					e.preventDefault();
					const { value } = (e.target as HTMLInputElement);
					const result = chatList.filter((chat) => chat.name.startsWith(value));
					// if (result.length === 0) {
					// 	const noChatsMsg = document.querySelector(".chats__list");
					// 	(noChatsMsg as HTMLElement).textContent = "Такого разговора нет";
					// }
					console.log({result});
				},
				submit: (e: Event) => {
					e.preventDefault();
					const form = this.getElement();
					const inputs = form!.querySelectorAll("input");
					const result: Record<string, string | FormData> = {};
					for (const input of inputs) {
						const name = input.name;
						const value = input.value;
						result[name] = value;
						if (input.type === "file") {
							const fileInput = input as HTMLInputElement;
							const file: File | null = fileInput.files![0];
							let formData = new FormData();
							formData.append("file", file)
							result[name] = formData;
						}
					}
					console.log(result);
					return;
				},
			},
		});
	}

	render() {
		return this.compile(template, this.props);
	}

}
