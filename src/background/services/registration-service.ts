import browser from "webextension-polyfill";
import { SiteConfig, LayoutConfigs } from "../models/site-layouts";
import { generateUser, User } from "./user-service";
import * as storageService from "./storageService";
import * as apiService from "./apiService";

export interface RegistrationConfig {
  siteId: string;
  activateAdBlocker: boolean;
  autoLogin: boolean;
}

export async function registerUser(
  config: RegistrationConfig
): Promise<string> {
  if (config.activateAdBlocker) {
    await browser.runtime.sendMessage({ action: "blockAds" });
  }

  const siteConfig = getSiteConfig(config.siteId);
  const userData = generateUser();

  try {
    await performRegistration(siteConfig, userData, config);

    return "Registration successful!";
  } catch (error: any) {
    return `Registration failed: ${error.message}`;
  }
}

function getSiteConfig(siteId: string): SiteConfig {
  // This should be implemented to return the correct site configuration
  // You might want to store this in a separate file or fetch from an API
  const sites: SiteConfig[] = [
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
  const site = sites.find((s) => s.id === siteId);
  if (!site) {
    throw new Error(`Site configuration not found for ID: ${siteId}`);
  }
  return site;
}

async function performRegistration(
  siteConfig: SiteConfig,
  userData: User,
  config: RegistrationConfig
): Promise<void> {
  const [tab] = await browser.tabs.query({ active: true, currentWindow: true });
  if (!tab.id) {
    throw new Error("No active tab found");
  }

  const layoutConfig = LayoutConfigs[siteConfig.layout];

  await browser.tabs.sendMessage(tab.id, {
    action: "fillForm",
    layoutConfig,
    userData,
    config,
  });

  // Wait for form submission (you might need to implement this part in the content script)
  await new Promise((resolve) => setTimeout(resolve, 2000));

  await storageService.set(siteConfig.id, userData);

  if (siteConfig.apiEndpoint) {
    await apiService.registerUser(siteConfig.apiEndpoint, userData);
  }
}