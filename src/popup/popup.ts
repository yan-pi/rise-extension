import { siteLayouts } from "../config/site-layouts";

document.addEventListener("DOMContentLoaded", () => {
  const layoutSelector = document.getElementById(
    "layoutSelector"
  ) as HTMLSelectElement;
  const predefinedPassword = document.getElementById(
    "predefinedPassword"
  ) as HTMLInputElement;
  const useRandomPassword = document.getElementById(
    "useRandomPassword"
  ) as HTMLInputElement;
  const enableAdBlocker = document.getElementById(
    "enableAdBlocker"
  ) as HTMLInputElement;
  const generateUserButton = document.getElementById(
    "generateUser"
  ) as HTMLButtonElement;

  // Populate layout selector
  siteLayouts.forEach((layout) => {
    const option = document.createElement("option");
    option.value = layout.name;
    option.textContent = layout.name;
    layoutSelector.appendChild(option);
  });

  generateUserButton.addEventListener("click", () => {
    const selectedLayout = siteLayouts.find(
      (layout) => layout.name === layoutSelector.value
    );

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]?.id !== undefined) {
        chrome.tabs.sendMessage(tabs[0].id, {
          action: "fillForm",
          layout: selectedLayout,
          options: {
            predefinedPassword: predefinedPassword.value,
            useRandomPassword: useRandomPassword.checked,
            enableAdBlocker: enableAdBlocker.checked,
          },
        });
      }
    });
  });
});
