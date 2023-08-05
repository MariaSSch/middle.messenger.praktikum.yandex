import{ modalContainer, modal } from "../vars.js"; 

//avatar to click
const changeAvatar = document.querySelector(".profile__avatar");

//attach. modal form 
const modalForm = document.querySelector(".attach-modal-form");
//attach. label, input, p-block
const modalState = document.querySelector(".attach-placeholder");
const modalInput = document.querySelector(".attach-input");
const modalBlock = document.querySelector(".attach-not-chosen");

function modifyAttachModal() {
    const modalTitle = document.querySelector(".modal-attach-title");
    if(modalTitle.textContent === "Ошибка, попробуйте ещё раз") {
        modalTitle.classList.add("modal__title_error");
    }
    if(modalInput.value == 0) {
        modalBlock.textContent = "Нужно выбрать файл";
    } else {
        modalTitle.textContent = "Файл загружен";
        modalState.textContent = modalInput.value;
        modalBlock.textContent = "";
    }
}


changeAvatar.addEventListener('click', () => {
    modalContainer.style.display = "flex";
} );

modalForm.addEventListener("submit", (e) => {
    e.preventDefault();
    modifyAttachModal();

})


//COMMON rules for all modals
modal.addEventListener('click', (e) => e.stopPropagation()); 

modalContainer.addEventListener('click', () => {
    modalContainer.style.display = "none";
} )

