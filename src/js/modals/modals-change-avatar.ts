import { modalContainer, modal } from "../vars.ts";

//avatar to click
const changeAvatar = document.querySelector(".profile__avatar");

//attach. modal form
const modalForm = document.querySelector(".attach-modal-form");
//attach. label, input, p-block
const modalState = document.querySelector(".attach-placeholder");
const modalInput = document.querySelector(".attach-input");
const modalBlock = document.querySelector(".attach-not-chosen");

function modifyAttachModal(e: Event) {
	e.preventDefault();
	const modalTitle = document.querySelector(".modal-attach-title");
	if ((modalTitle as HTMLElement).textContent === "Ошибка, попробуйте ещё раз") {
		(modalTitle as HTMLElement).classList.add("modal__title_error");
	}
	if (!(modalInput as HTMLInputElement).value) { //modalInput as HTMLInputElement).value == 0
		(modalBlock as HTMLElement).textContent = "Нужно выбрать файл";
	} else {
		(modalTitle as HTMLElement).textContent = "Файл загружен";
		(modalState as HTMLElement).textContent = (modalInput as HTMLInputElement).value;
		(modalBlock as HTMLElement).textContent = "";
	}
}

export function displayModalContainer() {
	console.log("modal");
	(modalContainer as HTMLElement).style.display = "flex";
	
}

if (changeAvatar) {
	changeAvatar.addEventListener("click", displayModalContainer);
}

if (modalForm) {
	modalForm.addEventListener("submit", modifyAttachModal);
}

//COMMON rules for all modals
if (modal) {
	modal.addEventListener("click", (e) => e.stopPropagation());
}
if (modalContainer) {
	modalContainer.addEventListener("click", () => {
		(modalContainer as HTMLElement).style.display = "none";
	});
}
