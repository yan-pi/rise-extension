chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "fillForm") {
    fillForm(request.data);
  }
});

function fillForm(data) {
  if (data.siteLayout === 'layout1') {
    const accountField = document.querySelector(".ant-select-search__field");
    const passwordFields = document.querySelectorAll("input[type='password']");
    const nameField = document.querySelector(
      "input[placeholder='Preencha o nome verdadeiro e torne -o conveniente para a retirada posterior!']"
    );
    const agreementCheckbox = document.querySelector(".ant-checkbox-input");
    const registerButton = document.querySelector("button:contains('Registro')");

    if (accountField) accountField.value = data.username;
    
    passwordFields.forEach((field) => (field.value = data.password));

    if (nameField) nameField.value = data.name;

    if (agreementCheckbox && !agreementCheckbox.checked)
      agreementCheckbox.click();

    if (registerButton) registerButton.click();
  }
  
  // Adicione mais layouts conforme necessário
}

export { fillForm };
