export const handleButtonWithSpan = (spanText: string): void => {
  // const autoRegisterCheckbox = document.getElementById(
  //   "autoRegister"
  // ) as HTMLInputElement;

  // if (!autoRegisterCheckbox) {
  //   console.error("Auto register checkbox not found");
  //   return;
  // }

  // if (!autoRegisterCheckbox.checked) {
  //   console.log("Auto register checkbox is not checked");
  //   return;
  // }

  const spans = document.querySelectorAll("button span");
  let buttonClicked = false;

  spans.forEach((span) => {
    if (span.textContent && span.textContent.includes(spanText)) {
      const button = span.closest("button");
      if (button) {
        button.click();
        buttonClicked = true;
        console.log("Clicked button with span:", spanText);
      }
    }
  });

  if (!buttonClicked) {
    console.error(`Button with span text "${spanText}" not found`);
  }
};
