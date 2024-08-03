class FormFiller {
  static fill(data) {
    const selectors = {
      account: ".ant-select-search__field",
      password: "input[type='password']",
      name: "input[placeholder='Preencha o nome verdadeiro e torne -o conveniente para a retirada posterior!']",
      agreement: ".ant-checkbox-input",
      register: "button:contains('Registro')",
    };

    this.fillField(selectors.account, data.username);
    this.fillFields(selectors.password, data.password);
    this.fillField(selectors.name, data.name);
    this.checkBox(selectors.agreement);
    this.clickButton(selectors.register);
  }

  static fillField(selector, value) {
    const field = document.querySelector(selector);
    if (field) field.value = value;
  }

  static fillFields(selector, value) {
    const fields = document.querySelectorAll(selector);
    fields.forEach((field) => (field.value = value));
  }

  static checkBox(selector) {
    const checkbox = document.querySelector(selector);
    if (checkbox && !checkbox.checked) checkbox.click();
  }

  static clickButton(selector) {
    const button = document.querySelector(selector);
    if (button) button.click();
  }
}
