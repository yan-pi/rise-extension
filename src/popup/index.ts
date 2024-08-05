import browser from "webextension-polyfill";
import {
  registerUser,
  RegistrationConfig,
} from "../services/registrationService";
import { SiteConfig, SiteLayout } from "../models/SiteLayout";

// This should be implemented to return the correct site configurations
// You might want to store this in a separate file or fetch from an API
function getSites(): SiteConfig[] {
  return [
    {
      id: "site1",
      name: "Site 1",
      url: "https://site1.com",
      layout: SiteLayout.LAYOUT1,
    },
    {
      id: "site2",
      name: "Site 2",
      url: "https://site2.com",
      layout: SiteLayout.LAYOUT2,
    },
  ];
}

function initializeSiteSelector(): void {
  const siteSelector = document.getElementById(
    "site-selector"
  ) as HTMLSelectElement;
  const sites = getSites();

  sites.forEach((site) => {
    const option = document.createElement("option");
    option.value = site.id;
    option.textContent = site.name;
    siteSelector.appendChild(option);
  });
}

function getRegistrationConfig(): RegistrationConfig {
  const siteSelector = document.getElementById(
    "site-selector"
  ) as HTMLSelectElement;
  const adBlockerCheckbox = document.getElementById(
    "ad-blocker"
  ) as HTMLInputElement;
  const autoLoginCheckbox = document.getElementById(
    "auto-login"
  ) as HTMLInputElement;

  return {
    siteId: siteSelector.value,
    activateAdBlocker: adBlockerCheckbox.checked,
    autoLogin: autoLoginCheckbox.checked,
  };
}

async function handleStartRegistration(): Promise<void> {
  const statusElement = document.getElementById("status");
  if (!statusElement) return;

  statusElement.textContent = "Registration in progress...";

  const config = getRegistrationConfig();
  const result = await registerUser(config);

  statusElement.textContent = result;
}

function init(): void {
  initializeSiteSelector();

  const startButton = document.getElementById("start-registration");
  if (startButton) {
    startButton.addEventListener("click", handleStartRegistration);
  }
}

document.addEventListener("DOMContentLoaded", init);
