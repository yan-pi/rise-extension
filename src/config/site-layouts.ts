export interface SiteLayout {
  name: string;
  selectors: { [key: string]: string };
  dataFields: string[];
}

export const siteLayouts: SiteLayout[] = [
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
  {
    name: "dd1998",
    selectors: {
      form: "form.ant-form",
      username: "input[placeholder='Nome de Usuário']",
      password: "input[type='password']",
      passwordConfirm:
        "input[placeholder='Confirme a senha novamente, o mesmo que a senha!']",
      realName:
        "input[placeholder='Preencha o nome verdadeiro e torne -o conveniente para a retirada posterior!']",
      phoneNumber: "input[placeholder='Digite o Número do Celular']", // Verifique este seletor
      submit: "button.van-button",
      agreeCheckbox: "input.ant-checkbox-input",
    },
    dataFields: [
      "username",
      "password",
      "passwordConfirm",
      "phoneNumber",
      "realName",
    ],
  },
];

siteLayouts.forEach((layout) => {
  console.log("Selectors:", layout.selectors);
  console.log("Data Fields:", layout.dataFields);
});
