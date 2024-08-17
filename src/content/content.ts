import { SiteLayoutInteface } from "../interfaces/site-layout-interface";
import { generateUserData, UserData } from "../utils/data-generator";
import { handleDepositButton } from "../utils/handlers/handle-deposit-button";
import { getElements } from "../utils/element-selectors";
import { AdBlockerPlugin } from "../plugins/adblock-plugin";
import { handleButtonWithSpan } from "../utils/handlers/handle-span-button";
import { createLogger } from "../utils/logger";

const logger = createLogger();

class ContentScript {
  private currentLayout: SiteLayoutInteface | null;
  private adBlocker: AdBlockerPlugin;

  constructor() {
    this.currentLayout = null;
    this.adBlocker = new AdBlockerPlugin();
    this.init();
  }

  private init(): void {
    this.initMessageListener();
    this.checkAdBlockerStatusOnLoad();
  }

  private initMessageListener(): void {
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      switch (message.action) {
        case "handleDepositButton":
          handleDepositButton();
          break;
        case "fillForm":
          this.fillForm(message.layout, message.options);
          break;
        case "toggleAdBlocker":
          this.toggleAdBlocker(message.enable);
          break;
        case "checkAdBlockerStatus":
          sendResponse({ enabled: this.adBlocker.isEnabled() });
          break;
        case "clickButton":
          handleButtonWithSpan(message.spanText);
          sendResponse({ status: "Button clicked" });
          break;
      }
      sendResponse({ success: true });
    });
  }

  private async fillForm(
    layout: SiteLayoutInteface,
    options: {
      predefinedPassword?: string;
      useRandomPassword: boolean;
    }
  ): Promise<void> {
    logger.info(`Filling form with data: ${JSON.stringify(layout)}`);
    logger.info(`Options: ${JSON.stringify(options)}`);

    this.currentLayout = layout;
    const userData = generateUserData(this.currentLayout, options);
    console.log("Generated user data:", userData);

    const elements = getElements(this.currentLayout.selectors);
    console.log("Elements found:", elements);

    this.fillFormFields(elements, userData);

    if (elements.agreeCheckbox instanceof HTMLInputElement) {
      logger.info("Agreeing to terms and conditions");
      elements.agreeCheckbox.checked = true;
    }

    await new Promise((resolve) => setTimeout(resolve, 500));

    try {
      handleButtonWithSpan("Registro");
    } catch (error) {
      logger.error(`Error clicking button with span: Registro ${error}`);
    }
  }

  private toggleAdBlocker(enable: boolean): void {
    if (enable) {
      this.adBlocker.enable();
    } else {
      this.adBlocker.disable();
    }
    logger.info(`AdBlocker ${enable ? "enabled" : "disabled"}`);
  }

  private checkAdBlockerStatusOnLoad(): void {
    const adBlockerEnabled =
      localStorage.getItem("adBlockerEnabled") === "true";
    if (adBlockerEnabled) {
      this.adBlocker.enable();
    } else {
      this.adBlocker.disable();
    }
    logger.info(
      `AdBlocker status on load: ${adBlockerEnabled ? "enabled" : "disabled"}`
    );
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

        element.dispatchEvent(new Event("input", { bubbles: true }));
      }
    }
  }
}

new ContentScript();

document.addEventListener("DOMContentLoaded", () => {
  const adBlocker = new AdBlockerPlugin();
  if (adBlocker.isEnabled()) {
    adBlocker.enable(); // This will reapply the rules
  }
});
