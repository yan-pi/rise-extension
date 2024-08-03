class RegistrationView {
  constructor() {
    this.startButton = document.getElementById('startRegistration');
    this.statusDiv = document.getElementById('status');
    this.useRandomPasswordCheckbox = document.getElementById('useRandomPassword');
    this.useSpecialCharsCheckbox = document.getElementById('useSpecialChars');
    this.activateAdBlockerCheckbox = document.getElementById('activateAdBlocker');
  }

  bindStartRegistration(handler) {
    this.startButton.addEventListener('click', () => {
      const config = {
        useRandomPassword: this.useRandomPasswordCheckbox.checked,
        useSpecialChars: this.useSpecialCharsCheckbox.checked,
        activateAdBlocker: this.activateAdBlockerCheckbox.checked
      };
      handler(config);
    });
  }

  setStatus(message) {
    this.statusDiv.textContent = message;
  }
}