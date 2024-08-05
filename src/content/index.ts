import { FormField } from "../background/models/site-layouts";

// Interface para estratégias de preenchimento de formulário
interface FormStrategy {
  fillForm(
    fields: FormField[],
    user: { username: string; password: string; name: string; email: string }
  ): void;
}

// Exemplo de uma estratégia de preenchimento para um site específico
class Site1Strategy implements FormStrategy {
  fillForm(
    fields: FormField[],
    user: { username: string; password: string; name: string; email: string }
  ): void {
    fields.forEach((field) => {
      const element = document.querySelector(field.selector) as
        | HTMLInputElement
        | HTMLSelectElement
        | null;
      if (element) {
        switch (field.type) {
          case "text":
            // Assumindo que você tem um campo de texto para username, name, e email
            if (field.selector.includes("username")) {
              (element as HTMLInputElement).value = user.username;
            } else if (field.selector.includes("name")) {
              (element as HTMLInputElement).value = user.name;
            } else if (field.selector.includes("email")) {
              (element as HTMLInputElement).value = user.email;
            }
            break;
          case "password":
            if (field.selector.includes("password")) {
              (element as HTMLInputElement).value = user.password;
            }
            break;
          case "checkbox":
            (element as HTMLInputElement).checked = true;
            break;
          case "select":
            (element as HTMLSelectElement).value = field.value || "";
            break;
        }
      }
    });
  }
}

// Adiciona um listener para quando a mensagem for recebida
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "fillForm") {
    const { strategyName, fields, user } = message.data;

    let strategy: FormStrategy;

    // Seleciona a estratégia com base no nome
    switch (strategyName) {
      case "site1":
        strategy = new Site1Strategy();
        break;
      // Adicione mais casos conforme necessário para outras estratégias
      default:
        console.error("Estratégia não encontrada:", strategyName);
        return;
    }

    strategy.fillForm(fields, user);
  }
});
