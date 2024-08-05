import browser from "webextension-polyfill";
import { LayoutConfig } from "../models/SiteLayout";
import { User } from "../services/userService";

function fillForm(layoutConfig: LayoutConfig, userData: User): void {
  const setFieldValue = (selector: string, value: string) => {
    const element = document.querySelector(selector) as HTMLInputElement;
    if (element) {
      element.value = value;
    }
  };

  setFieldValue(layoutConfig.firstNameSelector, userData.firstName);
  setFieldValue(layoutConfig.lastNameSelector, userData.lastName);
  setFieldValue(layoutConfig.usernameSelector, userData.username);
  setFieldValue(layoutConfig.passwordSelector, userData.password);
  setFieldValue(layoutConfig.emailSelector, userData.email);

  const submitButton = document.querySelector(
    layoutConfig.submitSelector
  ) as HTMLButtonElement;
  if (submitButton) {
    submitButton.click();
  }
}

function autoLogin(layoutConfig: LayoutConfig, userData: User): void {
  const setFieldValue = (selector: string, value: string) => {
    const element = document.querySelector(selector) as HTMLInputElement;
    if (element) {
      element.value = value;
    }
  };

  setFieldValue(layoutConfig.loginUsernameSelector, userData.username);
  setFieldValue(layoutConfig.loginPasswordSelector, userData.password);

  const loginSubmitButton = document.querySelector(
    layoutConfig.loginSubmitSelector
  ) as HTMLButtonElement;
  if (loginSubmitButton) {
    loginSubmitButton.click();
  }
}

browser.runtime.onMessage.addListener((message: any) => {
  if (message.action === "fillForm") {
    fillForm(message.layoutConfig, message.userData);
    return Promise.resolve({ success: true });
  } else if (message.action === "autoLogin") {
    autoLogin(message.layoutConfig, message.userData);
    return Promise.resolve({ success: true });
  }
  return Promise.resolve();
});
