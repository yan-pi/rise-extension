import { createLogger } from "../logger";

const logger = createLogger();

export const handleDepositButton = (): void => {
  const depositButtonSelector = "button.deposit-button";

  const depositButton = document.querySelector(
    depositButtonSelector
  ) as HTMLButtonElement;
  if (depositButton) {
    depositButton.click();
    logger.info("Clicked deposit button");
  } else {
    logger.error("Deposit button not found");
  }
};
