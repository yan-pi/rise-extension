class RegistrationController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  init() {
    this.view.bindStartRegistration(this.handleStartRegistration.bind(this));
  }

  handleStartRegistration(config) {
    if (config.activateAdBlocker) {
      chrome.runtime.sendMessage({ action: "blockAds" });
    }

    const userData = this.model.generateUserData(
      config.useRandomPassword,
      config.useSpecialChars
    );

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, {
        action: "fillForm",
        data: userData,
      });
    });

    this.view.setStatus("Registration process started.");
  }
}
