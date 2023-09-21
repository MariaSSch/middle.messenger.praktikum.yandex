export function isFormValid(e: Event): boolean {
  const isValidAll: boolean[] = [];
  const form = e.target as HTMLFormElement;
  const inputs = form.querySelectorAll("input");

  inputs.forEach((input: HTMLInputElement) => {
    if (input.validity.patternMismatch || input.validity.valueMissing) {
      isValidAll.push(false);
    } else {
      isValidAll.push(true);
    }
  });
  const isValid: boolean = isValidAll.every((position) => position === true);

  return isValid;
}

function showError(input: HTMLInputElement, errorMsg: HTMLElement) {
  if (input.value === "") {
    errorMsg.textContent = "Поле не должно быть пустым";
  } else if (input.validity.patternMismatch) {
    if (input.name === "login") {
      errorMsg.textContent = "Поле должно содержать не менее 3 символов латиницей, без пробелов";
    }
    if (input.name === "first_name") {
      errorMsg.textContent = "Первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов";
    }
    if (input.name === "second_name") {
      errorMsg.textContent = "Первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов";
    }
    if (input.name === "email") {
      errorMsg.textContent = "Введите email в формате youremail@domen.abc";
    }
    if (input.type === "tel") {
      errorMsg.textContent = "Введите от 10 до 15 цифр в формате +7(8)123456789";
    }
    if (input.name === "password") {
      errorMsg.textContent = "Введите от 8 до 40 символов, обязательно 1 заглавная буква и цифра";
    }
  }
}

export function isFieldValid(e: Event) {
  const input = e.target as HTMLInputElement;
  const errorMsg = input.parentNode!.querySelector("span.input-error") as HTMLSpanElement;

  if (input.validity.valid) {
    errorMsg.textContent = "";
  } else {
    showError(input, errorMsg);
  }
}

export function isPassMatching(e: Event, value: string) {
  const input = e.target as HTMLInputElement;
  const errorMsg = input.parentNode!.querySelector("span.input-error") as HTMLSpanElement;

  if (input.value === value) {
    errorMsg.textContent = "";
  } else {
    errorMsg.textContent = "Пароли не совпадают";
  }
}

