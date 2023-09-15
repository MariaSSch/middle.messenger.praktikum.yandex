export function changeAvatar(form: HTMLFormElement, e: Event) {
	
	const fileInput = form.querySelector('input') as HTMLInputElement;
	const file: File | null = fileInput.files![0];
	let formData = new FormData();
	formData.append("file", file)

	const modalTitle = document.querySelector(".modal-attach-title") as HTMLElement;
	const modalBlock = document.querySelector(".attach-not-chosen") as HTMLElement;
	const modalState = document.querySelector(".attach-placeholder")  as HTMLElement;


		if (file === null || undefined) {
			modalTitle.textContent = "Ошибка, попробуйте ещё раз"
			modalTitle.classList.add("modal__title_error");
		} 
		else if (file === undefined){
			modalBlock.textContent = "Нужно выбрать файл";
		} 
		else {	
			const modalContainer = document.querySelector(".modal-container") as HTMLElement;
			modalContainer!.style.display = "none";
			modalTitle.textContent = "Загрузите файл";
			modalState.textContent = "Выбрать файл на компьютере";
			(e.target as HTMLFormElement).reset();
			console.log({"newAvatar": formData});
		}
}
