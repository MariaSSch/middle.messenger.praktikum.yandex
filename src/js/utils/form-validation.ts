export function isFormValid(e: Event)  {
	let valid = false;

	const form = e.target as HTMLFormElement;
	const inputs = form.querySelectorAll("input");

	for (const input of inputs) {
		if(input.validity.patternMismatch) {
			return valid = false;
		} else {
			return valid = true;
		}
	}

	return valid;
}

export function isLoginValid(e: Event) {
	const input = e.target as HTMLInputElement;
	// console.log("input: ", input)
	const errorMsg = input.parentNode!.querySelector("span.input-error") as  HTMLSpanElement;
	// console.log("tearget: ", errorMsg);
	if(input.validity.patternMismatch) {
		errorMsg.textContent = "Поле должно содержать не менее 3 символов латиницей, без пробелов";
	} else if (input.value.length === 0) {
		errorMsg.textContent = "Поле не должно быть пустым";

	} else if (!input.validity.patternMismatch) {
		errorMsg.textContent = "";
	}

	return false;
}

export function isNameValid(e: Event) {
	const input = e.target as HTMLInputElement;
	const errorMsg = input.parentNode!.querySelector("span.input-error") as  HTMLSpanElement;

	if(input.validity.patternMismatch) {
		errorMsg.textContent = "Первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов";
	} else if (input.value.length === 0) {
		errorMsg.textContent = "Поле не должно быть пустым";
	} else if (!input.validity.patternMismatch) {
		errorMsg.textContent = "";
	}
}

export function isEmailValid(e: Event) {
	const input = e.target as HTMLInputElement;
	const errorMsg = input.parentNode!.querySelector("span.input-error") as  HTMLSpanElement;

	if(input.validity.patternMismatch) {
		errorMsg.textContent = "Введите email в формате youremail@domen.abc";
	} else if (input.value.length === 0) {
		errorMsg.textContent = "Поле не должно быть пустым";
	} else if (!input.validity.patternMismatch) {
		errorMsg.textContent = "";
	}
}

export function isPhoneValid(e: Event) {
	const input = e.target as HTMLInputElement;
	const errorMsg = input.parentNode!.querySelector("span.input-error") as  HTMLSpanElement;

	if(input.validity.patternMismatch) {
		errorMsg.textContent = "Введите от 10 до 15 цифр";
	} else if (input.value.length === 0) {
		errorMsg.textContent = "Поле не должно быть пустым";
	} else if (!input.validity.patternMismatch) {
		errorMsg.textContent = "";
	}
}


export function isPassValid(e: Event) {

	const input = e.target as HTMLInputElement;
	const errorMsg = input.parentNode!.querySelector("span.input-error") as  HTMLSpanElement;

	if(input.validity.patternMismatch) {
		errorMsg.textContent = "Введите от 8 до 40 символов, обязательно 1 заглавная буква и цифра";
	} else if (input.value.length === 0) {
		errorMsg.textContent = "Поле не должно быть пустым";
	} else if (!input.validity.patternMismatch) {
		errorMsg.textContent = "";
	}
}
