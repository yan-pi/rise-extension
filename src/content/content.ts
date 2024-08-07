import { SiteLayout } from "../config/site-layouts";
import { generateUserData } from "../utils/data-generator";
import { getElements } from "../utils/element-selectors";
import { AdBlockerPlugin } from "../plugins/adblock-plugin";

class ContentScript {
  private currentLayout: SiteLayout;
  private adBlocker: AdBlockerPlugin;

  constructor() {
    this.currentLayout = {} as SiteLayout;
    this.adBlocker = new AdBlockerPlugin();
    this.initMessageListener();
  }

  private initMessageListener(): void {
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      if (message.action === "fillForm") {
        this.fillForm(message.layout, message.options);
        sendResponse({ success: true });
      }
    });
  }

  private async fillForm(
    layout: SiteLayout,
    options: {
      predefinedPassword?: string;
      useRandomPassword: boolean;
      enableAdBlocker: boolean;
    }
  ): Promise<void> {
    this.currentLayout = layout;
    const userData = generateUserData(options);
    const elements = getElements(this.currentLayout.selectors);

    if (options.enableAdBlocker) {
      this.adBlocker.enable();
    }

    if (elements.username)
      (elements.username as HTMLInputElement).value = userData.username;
    if (elements.email)
      (elements.email as HTMLInputElement).value = userData.email;
    if (elements.password)
      (elements.password as HTMLInputElement).value = userData.password;

    if (elements.submit) {
      elements.submit.click();
    }
  }
}

new ContentScript();
