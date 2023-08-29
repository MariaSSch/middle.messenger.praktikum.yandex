//define modal window
export const modalContainer = document.querySelector(".modal-container");
export const modal = document.querySelector(".modal");

//chat. vars to modify modal

export const chatModalVariables = [
	{
		title: "Добавить пользователя",
		formId: "add-user",
		btnValue: "Добавить",
	},
	{
		title: "Удалить пользователя",
		formId: "del-user",
		btnValue: "Удалить",
	},
	{
		title: "Удалить чат",
		formId: "del-chat",
		btnValue: "Удалить",
		block: `<p class="modal-block"> Вы уверены, что хотите удалить чат?</p>`,
	},
];

//attach
export const attachVariables = {
	errorClass: "modal__title_error",
};
