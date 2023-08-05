import {chatModalVariables} from "../vars.js"; 
import{ modalContainer, modal } from "../vars.js"; 

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
function modifyChatModal(title, formId, btnValue, block) {
    modalTitle.textContent = title;
    modalForm.setAttribute("id", formId);
    modalBtn.textContent = btnValue;
    if(modalTitle.textContent === "Удалить чат") {
        modalLabel.remove();
        modalForm.insertAdjacentHTML("afterbegin", block);
    } 

}

for(let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', () => {
        modalContainer.style.display = "flex";
        modifyChatModal(chatModalVariables[i].title, chatModalVariables[i].formId, chatModalVariables[i].btnValue, chatModalVariables[2].block)
    } );
}

//COMMON rules for all modals
modal.addEventListener('click', (e) => e.stopPropagation()); 

modalBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modalContainer.style.display = "none";
} ); 
modalContainer.addEventListener('click', () => {
    modalContainer.style.display = "none";
} )
