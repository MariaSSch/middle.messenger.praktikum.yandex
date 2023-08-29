//chat-header btn & menu
const expander = document.querySelector(".chats__header-expander");
const chatMenu = document.querySelector(".chats__header-menu");


if (expander) {
	expander.addEventListener("click", () => {
		(chatMenu as HTMLElement).classList.toggle("chats__header-menu_shown");
		(chatMenu as HTMLElement).classList.toggle("chats__header-menu");
	});
}

//chat-footer btn & send-menu
const attach = document.querySelector(".chats__send-menu-btn");
const attachMenu = document.querySelector(".chats__send-menu");

if (attach) {
	attach.addEventListener("click", () => {
		(attachMenu as HTMLElement).classList.toggle("chats__send-menu_shown");
		(attachMenu as HTMLElement).classList.toggle("chats__send-menu");
	});
}
