import { Form } from "../components/form";

export function onSubmit(this: Form) {
  const form = this.getElement();
  const inputs = form!.querySelectorAll("input");
  const result: Record<string, string | FormData> = {};
  // eslint-disable-next-line
  for (const input of inputs) {
    const { name, value } = input;
    result[name] = value;
    if (input.type === "file") {
      const fileInput = input as HTMLInputElement;
      const file: File | null = fileInput.files![0];
      const formData = new FormData();
      formData.append("file", file);
      result[name] = formData;
    }
  }
	return result;
  console.log(result);
}
