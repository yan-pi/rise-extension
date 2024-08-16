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
          if (message.enable) {
            this.adBlocker.enable();
          } else {
            this.adBlocker.disable();
          }
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
    logger.info(`Filling form with data: ${layout}`);
    logger.info(`Options: ${options}`);

    this.currentLayout = layout;
    const userData = generateUserData(this.currentLayout, options);
    logger.info(`Generated user data: ${userData}`);

    const elements = getElements(this.currentLayout.selectors);
    logger.info(`Elements found: ${elements}`);

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
