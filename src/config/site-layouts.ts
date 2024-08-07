export interface SiteLayout {
  name: string;
  selectors: { [key: string]: string };
  dataFields: string[];
}

export const siteLayouts: SiteLayout[] = [
  {
    name: "Default",
    selectors: {
      form: "form",
      username: "input[name='username']",
      email: "input[type='email']",
      password: "input[type='password']",
      submit: "button[type='submit']",
    },
    dataFields: ["username", "email", "password"],
  },
  {
    name: "Generic Social Media",
    selectors: {
      form: "#signup-form",
      username: "#username",
      email: "#email",
      password: "#password",
      firstName: "#first-name",
      lastName: "#last-name",
      submit: "#submit-button",
    },
    dataFields: ["username", "email", "password", "firstName", "lastName"],
  },
  {
    name: "BraApp",
    selectors: {
      form: "form.ant-form",
      username: "input.ant-select-search__field",
      password: "input[type='password']",
      passwordConfirm:
        "input[placeholder='Por favor, confirme sua senha novamente']",
      realName:
        "input[placeholder='Preencha o nome verdadeiro e torne -o conveniente para a retirada posterior!']",
      submit: "button.ant-btn-primary",
      agreeCheckbox: "input.ant-checkbox-input",
    },
    dataFields: ["username", "password", "passwordConfirm", "realName"],
  },
  // Add more layouts as needed
];
