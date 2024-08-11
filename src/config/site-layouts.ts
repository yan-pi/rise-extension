export interface SiteLayout {
  name: string;
  selectors: { [key: string]: string };
  dataFields: string[];
}

export const siteLayouts: SiteLayout[] = [
  {
    name: "Generic",
    selectors: {
      form: "form.ant-form",
      username:
        "input[name='username'], input[placeholder*='usuário'], input[placeholder*='username'], input.ant-select-search__field, input[placeholder='Nome de Usuário'], input[placeholder='Nome de Usuário']",
      password:
        "input[type='password'], input[placeholder*='senha'], input[placeholder*='password'], input[type='password'],input[type='password']",
      passwordConfirm:
        "input[placeholder*='confirme'], input[placeholder*='confirm password'], input[placeholder='Por favor, confirme sua senha novamente'], input[placeholder='Confirme a senha novamente, o mesmo que a senha!']",
      realName:
        "input[placeholder*='nome'], input[placeholder*='real name'] input[placeholder='Preencha o nome verdadeiro e torne -o conveniente para a retirada posterior!'], input[placeholder='Preencha o nome verdadeiro e torne -o conveniente para a retirada posterior!']",
      email: "input[type='email'], input[placeholder*='email']",
      cpf: "input[placeholder*='cpf'], input[placeholder*='ssn']",
      phoneNumber:
        "input[type='tel'], input[placeholder*='telefone'], input[placeholder*='phone'], input[placeholder='Digite o Número do Celular']",
      firstName:
        "input[placeholder*='primeiro nome'], input[placeholder*='first name']",
      lastName:
        "input[placeholder*='sobrenome'], input[placeholder*='last name']",
      submit:
        "button[type='submit'], button[placeholder*='enviar'], button[placeholder='Registro'], button[placeholder*='submit'], button.ant-btn-primary, button.ant-btn, button.ant-btn.ant-btn-primary.ant-btn-block.GaL3XJonIwzK4ZeJyCyq, button.ant-btn.ant-btn-primary.ant-btn-block.GaL3XJonIwzK4ZeJyCyq",
      agreeCheckbox:
        "input[type='checkbox'], input[placeholder*='concordo'], input[placeholder*='agree'], input.ant-checkbox-input",
    },
    dataFields: [
      "username",
      "password",
      "passwordConfirm",
      "realName",
      "email",
      "cpf",
      "phoneNumber",
      "firstName",
      "lastName",
    ],
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

// siteLayouts.forEach((layout) => {
//   console.log("Selectors:", layout.selectors);
//   console.log("Data Fields:", layout.dataFields);
// });
