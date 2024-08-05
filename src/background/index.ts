import { RegistrationService } from "./services/registration-service";
import { blockAds } from "../utils/ad-blocker";
import { SiteStrategyFactory } from "./strategies/site-strategy";
import { FormField } from "./models/site-layouts";
import layoutConfig from "../../static/layout-config.json";
import { LayoutConfig } from "./models/site-layouts";
import { User } from "./models/user";
import { generateEmail } from "../utils/email-generator";
import { generateUsername } from "../utils/username-generator";
import { generateRandomName } from "../utils/name-generator";
import { generatePassword } from "../utils/password-generator";

const config: LayoutConfig = layoutConfig;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "startRegistration") {
    const {
      useRandomPassword,
      useSpecialChars,
      activateAdBlocker,
      selectedSite,
    } = message.data;

    if (activateAdBlocker) {
      blockAds();
    }

    const siteConfig = config[selectedSite as keyof LayoutConfig];
    if (!siteConfig) {
      console.error(`Configuração para o site ${selectedSite} não encontrada`);
      return;
    }

    const fields: FormField[] = siteConfig.fields;
    const strategy = SiteStrategyFactory.getStrategy(selectedSite);

    const user: User = {
      name: generateRandomName(),
      email: generateEmail(generateUsername()),
      username: generateUsername(),
      password: generatePassword(useRandomPassword, useSpecialChars),
    };
    RegistrationService.registerUser(strategy, fields, user);
  }
});
