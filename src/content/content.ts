import { SiteLayout } from "../config/site-layouts";
import { generateUserData, UserData } from "../utils/data-generator";
import { clickDepositButton } from "../config/site-layouts";
import { getElements } from "../utils/element-selectors";
import { AdBlockerPlugin } from "../plugins/adblock-plugin";
import { clickButtonWithSpan } from "../config/site-layouts";

class ContentScript {
  private currentLayout: SiteLayout | null; // Alterado para permitir null
  private adBlocker: AdBlockerPlugin;

  constructor() {
    this.currentLayout = null;
    this.adBlocker = new AdBlockerPlugin();
    this.initMessageListener();
  }

  private init(): void {
    this.initMessageListener();
    // Outras inicializações
  }

  private initMessageListener(): void {
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      switch (message.action) {
        case "clickDepositButton":
          clickDepositButton();
          break;
        case "fillForm":
          this.fillForm(message.layout, message.options);
          break;
        case "toggleAdBlocker":
          if (message.enable) {
            this.adBlocker.enable();
          } else {
            this.adBlocker.disable();
          }
          break;
      }
      sendResponse({ success: true });
    });
  }

  private async fillForm(
    layout: SiteLayout,
    options: {
      predefinedPassword?: string;
      useRandomPassword: boolean;
    }
  ): Promise<void> {
    // console.log("Filling form with layout:", layout);
    // console.log("Options:", options);

    this.currentLayout = layout;
    const userData = generateUserData(this.currentLayout, options);
    // console.log("Generated user data:", userData);

    const elements = getElements(this.currentLayout.selectors);
    // console.log("Form elements:", elements);

    this.fillFormFields(elements, userData);

    if (elements.agreeCheckbox instanceof HTMLInputElement) {
      // console.log("Checking agreement checkbox");
      elements.agreeCheckbox.checked = true;
    }

    await new Promise((resolve) => setTimeout(resolve, 500));

    if (elements.submit instanceof HTMLElement) {
      // console.log("Clicking submit button");
      elements.submit.click();
    }

    document.addEventListener("DOMContentLoaded", () => {
      clickButtonWithSpan("Registro");
    });
  }

  private fillFormFields(
    elements: { [key: string]: HTMLElement | null },
    userData: UserData
  ): void {
    for (const [key, element] of Object.entries(elements)) {
      if (
        key !== "form" &&
        key !== "submit" &&
        key !== "agreeCheckbox" &&
        element instanceof HTMLInputElement
      ) {
        element.value = userData[key] || "";
        // console.log(`Set value of ${key} to:`, element.value);

        // Dispatch input event to trigger any potential listeners
        element.dispatchEvent(new Event("input", { bubbles: true }));
      }
    }
  }
}

new ContentScript();
