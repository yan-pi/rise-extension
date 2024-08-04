import SiteModel from '../models/SiteModel';
import UserModel from '../models/UserModel';
import ApiService from '../services/ApiService';
import StorageService from '../services/StorageService';

class RegistrationController {
  constructor(view) {
    this.view = view;
    this.apiService = new ApiService();
    this.storageService = new StorageService();
  }

  init() {
    const sites = SiteModel.getSites();
    this.view.initializeSiteSelector(sites);
    this.view.bindStartRegistration(this.handleStartRegistration.bind(this));
  }

  async handleStartRegistration(config) {
    if (config.activateAdBlocker) {
      chrome.runtime.sendMessage({ action: "blockAds" });
    }

    const siteConfig = SiteModel.getSiteConfig(config.siteId);
    const userData = UserModel.generateRandomUser();

    try {
      await this.registerUser(siteConfig, userData, config);
      this.view.setStatus("Registration successful!");
    } catch (error) {
      this.view.setStatus(`Registration failed: ${error.message}`);
    }
  }

  async registerUser(siteConfig, userData, config) {
    // Send message to content script to fill the form
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });
    await chrome.tabs.sendMessage(tab.id, {
      action: "fillForm",
      siteConfig,
      userData,
      config,
    });

    // Wait for form submission (you might need to implement this part in the content script)
    // For now, we'll just simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Store the registered user
    await this.storageService.storeUser(siteConfig.id, userData);

    // Make API call if needed
    if (siteConfig.apiEndpoint) {
      await this.apiService.registerUser(siteConfig.apiEndpoint, userData);
    }
  }
}
