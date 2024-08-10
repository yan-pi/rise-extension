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

  // Set initial state of checkboxes to true
  useRandomPassword.checked = true;
  enableAdBlocker.checked = true;

  // Disable predefined password input if useRandomPassword is checked
  predefinedPassword.disabled = useRandomPassword.checked;

  // Restore checkbox states from localStorage
  useRandomPassword.checked =
    localStorage.getItem("useRandomPassword") === "true" || true;
  enableAdBlocker.checked =
    localStorage.getItem("enableAdBlocker") === "true" || true;

  // Save checkbox states to localStorage when changed
  useRandomPassword.addEventListener("change", () => {
    localStorage.setItem(
      "useRandomPassword",
      useRandomPassword.checked.toString()
    );
    predefinedPassword.disabled = useRandomPassword.checked;
  });

  enableAdBlocker.addEventListener("change", () => {
    localStorage.setItem("enableAdBlocker", enableAdBlocker.checked.toString());
  });

  generateUserButton.addEventListener("click", () => {
    const selectedLayout = siteLayouts.find(
      (layout) => layout.name === layoutSelector.value
    );

    if (selectedLayout) {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const tabId = tabs[0]?.id;
        if (tabId === undefined) {
          console.error("Não foi possível encontrar a aba ativa");
          return;
        }

        chrome.tabs.sendMessage(tabId, {
          action: "fillForm",
          layout: selectedLayout,
          options: {
            predefinedPassword: predefinedPassword.value,
            useRandomPassword: useRandomPassword.checked,
            enableAdBlocker: enableAdBlocker.checked,
          },
        });
      });
    }
  });
});
