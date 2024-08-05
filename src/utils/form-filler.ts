import { FormField } from "../background/models/site-layouts";
import { User } from "../background/models/user";

export function fillForm(fields: FormField[], user: User): void {
  fields.forEach((field) => {
    const element = document.querySelector(
      field.selector
    ) as HTMLInputElement | null;
    if (element) {
      if (field.type === "text") {
        element.value = user.username || "";
      } else if (field.type === "password") {
        element.value = user.password || "";
      }
      // Adicione lógica para outros tipos de campos se necessário
    }
  });
}
