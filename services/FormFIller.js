class FormFiller {
  static fillForm(siteConfig, userData) {
    const selectors = siteConfig.selectors;

    this.fillField(selectors.username, userData.username);
    this.fillField(selectors.password, userData.password);
    this.fillField(selectors.name, userData.name);
    this.fillField(selectors.email, userData.email);
    this.checkAgreement(selectors.agreement);
    this.submitForm(selectors.submitButton);
  }

  static fillField(selector, value) {
    const field = document.querySelector(selector);
    if (field) field.value = value;
  }

  static checkAgreement(selector) {
    const checkbox = document.querySelector(selector);
    if (checkbox && !checkbox.checked) checkbox.click();
  }

  static submitForm(selector) {
    const button = document.querySelector(selector);
    if (button) button.click();
  }
}
