class RegistrationView {
  constructor() {
    this.siteSelector = document.getElementById('siteSelector');
    this.startButton = document.getElementById('startRegistration');
    this.statusDiv = document.getElementById('status');
    this.useRandomPasswordCheckbox = document.getElementById('useRandomPassword');
    this.useSpecialCharsCheckbox = document.getElementById('useSpecialChars');
    this.activateAdBlockerCheckbox = document.getElementById('activateAdBlocker');
  }

  initializeSiteSelector(sites) {
    sites.forEach(site => {
      const option = document.createElement('option');
      option.value = site.id;
      option.textContent = site.name;
      this.siteSelector.appendChild(option);
    });
  }

  bindStartRegistration(handler) {
    this.startButton.addEventListener('click', () => {
      const config = {
        siteId: this.siteSelector.value,
        useRandomPassword: this.useRandomPasswordCheckbox.checked,
        customPassword: document.getElementById('customPassword').value,
        useSpecialChars: this.useSpecialCharsCheckbox.checked,
        activateAdBlocker: this.activateAdBlockerCheckbox.checked,
        siteLayout: document.getElementById('siteLayout').value
      };
      handler(config);
    });
  }

  setStatus(message) {
    this.statusDiv.textContent = message;
  }
}

export default RegistrationView;