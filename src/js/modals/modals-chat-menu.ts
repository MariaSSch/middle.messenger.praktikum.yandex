import { chatModalVariables, modalContainer, modal } from "../vars.ts";

//chat menu items to click
const menuItems = document.querySelectorAll(".chats__header-menu-item");
//chat. title of modal window
const modalTitle = document.querySelector(".chat-modal-title");
//chat. modal form
const modalForm = document.querySelector(".chat-modal-form");
//chat. label (to remove before append additional block)
const modalLabel = document.querySelector(".chat-modal-label");
const modalBtn = document.querySelector(".chat-modal-btn");

//CHAT modals rules
function modifyChatModal(title: string, formId: string, btnValue: string, block: string) {
	(modalTitle as HTMLElement).textContent = title;
	(modalForm as HTMLFormElement).setAttribute("id", formId);
	(modalBtn as HTMLElement).textContent = btnValue;
	if ((modalTitle as HTMLElement).textContent === "Удалить чат") {
		(modalLabel as HTMLElement).remove();
		(modalForm as HTMLFormElement).insertAdjacentHTML("afterbegin", block);
	}
}

for (let i = 0; i < menuItems.length; i++) {
	menuItems[i].addEventListener("click", () => {
		(modalContainer as HTMLElement).style.display = "flex";
		modifyChatModal(
			chatModalVariables[i].title,
			chatModalVariables[i].formId,
			chatModalVariables[i].btnValue,
			(chatModalVariables[2].block as string),
		);
	});
}

//COMMON rules for all modals

if (modal) {
	modal.addEventListener("click", (e) => e.stopPropagation());
}
if (modalBtn) {
	modalBtn.addEventListener("click", (e) => {
		e.preventDefault();
		(modalContainer as HTMLElement).style.display = "none";
	});
}

if (modalContainer) {
	modalContainer.addEventListener("click", () => {
		(modalContainer as HTMLElement).style.display = "none";
	});
}
