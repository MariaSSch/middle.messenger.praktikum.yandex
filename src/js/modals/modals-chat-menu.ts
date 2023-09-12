function modalElements () {
	const modal = document.querySelector(".modal")  as HTMLElement;
	const modalContainer = document.querySelector(".modal-container") as HTMLElement;

	//chat. title of modal window
	const modalTitle = document.querySelector(".chat-modal-title") as HTMLElement;
	//chat. modal form
	const modalForm = document.querySelector(".chat-modal-form") as HTMLFormElement;
	//chat. label (to remove before append additional block)
	const modalLabel = document.querySelector(".chat-modal-label") as HTMLElement;
	const modalBtn = document.querySelector(".chat-modal-btn")  as HTMLElement;
	return {
		modalContainer,
		modal,
		modalTitle, 
		modalForm, 
		modalLabel, 
		modalBtn
	}
}

export function modalAddUser() {
	
	const {modalContainer, modal, modalTitle, modalForm, modalBtn} = modalElements()
	
	modalContainer.style.display = "flex";
	modalTitle.textContent = "Добавить пользователя";
	modalForm.setAttribute("id", "add-user");
	modalBtn.textContent = "Добавить";
	
	modal.addEventListener("click", (e) => e.stopPropagation());
	
	modalBtn.addEventListener("click", (e) => {
		e.preventDefault();
		modalContainer.style.display = "none";
	});
	modalContainer.addEventListener("click", () => {
		(modalContainer as HTMLElement).style.display = "none";
	});
}

export function modalDeleteUser() {

	const {modalContainer, modal, modalTitle, modalForm, modalBtn} = modalElements()

	modalContainer.style.display = "flex";
	modalTitle.textContent = "Удалить пользователя";
	modalForm.setAttribute("id", "delete-user");
	modalBtn.textContent = "Удалить";
	
	modal.addEventListener("click", (e) => e.stopPropagation());
	modalBtn.addEventListener("click", (e) => {
		e.preventDefault();
		modalContainer.style.display = "none";
	});
	modalContainer.addEventListener("click", () => {
		(modalContainer as HTMLElement).style.display = "none";
	});

}

export function modalDeleteChat() {

	const {modalContainer, modal, modalTitle, modalForm, modalLabel, modalBtn} = modalElements()

	modalContainer.style.display = "flex";
	modalTitle.textContent = "Удалить чат";
	modalForm.setAttribute("id", "delete-chat");
	modalBtn.textContent = "Удалить";
	const block: string = `<p class="modal-block"> Вы уверены, что хотите удалить чат?</p>`;
	modalLabel.remove();
	modalForm.insertAdjacentHTML("afterbegin", block);
	
	modal.addEventListener("click", (e) => e.stopPropagation());
	modalBtn.addEventListener("click", (e) => {
		e.preventDefault();
		modalContainer.style.display = "none";
	});
	modalContainer.addEventListener("click", () => {
		(modalContainer as HTMLElement).style.display = "none";
	});
}
