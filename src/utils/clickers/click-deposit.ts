export const clickDepositButton = (): void => {
  const depositButtonSelector = "button.deposit-button";

  const depositButton = document.querySelector(
    depositButtonSelector
  ) as HTMLButtonElement;
  if (depositButton) {
    depositButton.click();
    console.log("Clicked deposit button");
  } else {
    console.error("Deposit button not found");
  }
};