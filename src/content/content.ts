import { SiteLayout } from "../config/site-layouts";
import { generateUserData, UserData } from "../utils/data-generator";
import { getElements } from "../utils/element-selectors";
import { AdBlockerPlugin } from "../plugins/adblock-plugin";

class ContentScript {
  private currentLayout: SiteLayout | null; // Alterado para permitir null
  private adBlocker: AdBlockerPlugin;

  constructor() {
    this.currentLayout = null;
    this.adBlocker = new AdBlockerPlugin();
    this.initMessageListener();
  }

  private initMessageListener(): void {
    chrome.runtime.onMessage.addListener(
      (message: any, sender: any, sendResponse: any) => {
        console.log("Received message:", message);
        if (message.action === "fillForm") {
          this.fillForm(message.layout, message.options);
          sendResponse({ success: true });
        }
      }
    );
  }

  private async fillForm(
    layout: SiteLayout,
    options: {
      predefinedPassword?: string;
      useRandomPassword: boolean;
      enableAdBlocker: boolean;
    }
  ): Promise<void> {
    console.log("Filling form with layout:", layout);
    console.log("Options:", options);

    this.currentLayout = layout;
    const userData = generateUserData(this.currentLayout, options);
    console.log("Generated user data:", userData);

    const elements = getElements(this.currentLayout.selectors);
    console.log("Form elements:", elements);

    if (options.enableAdBlocker) {
      console.log("Enabling ad blocker");
      this.adBlocker.enable();
    }

    this.fillFormFields(elements, userData);

    // Check the agreement checkbox
    if (elements.agreeCheckbox instanceof HTMLInputElement) {
      console.log("Checking agreement checkbox");
      elements.agreeCheckbox.checked = true;
    }

    // Small delay to simulate human interaction
    await new Promise((resolve) => setTimeout(resolve, 500));

    if (elements.submit instanceof HTMLElement) {
      console.log("Clicking submit button");
      elements.submit.click();
    }
  }

  private fillFormFields(
    elements: { [key: string]: Element },
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
        console.log(`Set value of ${key} to:`, element.value);

        // Dispatch input event to trigger any potential listeners
        element.dispatchEvent(new Event("input", { bubbles: true }));
      }
    }
  }
}

new ContentScript();
