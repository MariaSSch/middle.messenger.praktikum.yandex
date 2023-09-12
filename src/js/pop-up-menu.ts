//chat-header btn & menu
export function showHeaderPopup() {
	const expander = document.querySelector(".chats__header-expander") as HTMLElement;
	const chatMenu = document.querySelector(".pop-up-menu-header") as HTMLElement;
	
	expander.addEventListener("click", () => {
			chatMenu.classList.toggle("chats__header-menu_shown");
			// chatMenu.classList.toggle("chats__header-menu");

	});
	
}
//chat-footer btn & send-menu

export function showFooterPopup(){
	console.log("footer")
	const attach = document.querySelector(".chats__send-menu-btn") as HTMLElement;
	const attachMenu = document.querySelector(".pop-up-menu-footer") as HTMLElement;
	
	if(attach){
		attach.addEventListener("click", () => {
			attachMenu.classList.toggle("chats__send-menu_shown");
			// attachMenu.classList.toggle("chats__send-menu");
		});
	}
}
