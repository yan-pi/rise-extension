import { siteLayouts } from "../config/site-layouts";

document.addEventListener("DOMContentLoaded", () => {
  const enableAdBlockerCheckbox = document.getElementById(
    "enableAdBlocker"
  ) as HTMLInputElement;
  const depositButton = document.getElementById(
    "depositButton"
  ) as HTMLButtonElement;
  const layoutSelector = document.getElementById(
    "layoutSelector"
  ) as HTMLSelectElement;
  const predefinedPassword = document.getElementById(
    "predefinedPassword"
  ) as HTMLInputElement;
  const useRandomPassword = document.getElementById(
    "useRandomPassword"
  ) as HTMLInputElement;
  const generateUserButton = document.getElementById(
    "generateUser"
  ) as HTMLButtonElement;
  const autoRegisterCheckbox = document.getElementById(
    "autoRegister"
  ) as HTMLInputElement;

  // Populate layout selector
  siteLayouts.forEach((layout) => {
    const option = document.createElement("option");
    option.value = layout.name;
    option.textContent = layout.name;
    layoutSelector.appendChild(option);
  });

  // Set initial state of checkboxes to true
  useRandomPassword.checked = true;
  enableAdBlockerCheckbox.checked = true;
  autoRegisterCheckbox.checked = true;

  // Disable predefined password input if useRandomPassword is checked
  predefinedPassword.disabled = useRandomPassword.checked;

  // Restore checkbox states from localStorage
  const enableAdBlocker = document.getElementById(
    "enableAdBlocker"
  ) as HTMLInputElement;
  useRandomPassword.checked =
    localStorage.getItem("useRandomPassword") === "true";
  enableAdBlocker.checked = localStorage.getItem("enableAdBlocker") === "true";
  autoRegisterCheckbox.checked = localStorage.getItem("autoRegister") === "true"; 

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

  autoRegisterCheckbox.addEventListener("change", () => {
    localStorage.setItem("autoRegister", autoRegisterCheckbox.checked.toString());
  });

  // Event listener for enableAdBlockerCheckbox
  if (enableAdBlockerCheckbox) {
    enableAdBlockerCheckbox.addEventListener("change", () => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const tabId = tabs[0]?.id;
        if (tabId !== undefined) {
          chrome.tabs.sendMessage(tabId, {
            action: "toggleAdBlocker",
            enable: enableAdBlockerCheckbox.checked,
          });
        }
      });
    });
  }

  // Event listener for depositButton
  if (depositButton) {
    depositButton.addEventListener("click", () => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const tabId = tabs[0]?.id;
        if (tabId === undefined) {
          console.error("Unable to find the active tab");
          return;
        }
        chrome.tabs.sendMessage(tabId, {
          action: "clickDepositButton",
        });
      });
    });
  }

  // Event listener for generateUserButton
  if (generateUserButton) {
    generateUserButton.addEventListener("click", () => {
      const selectedLayout = siteLayouts.find(
        (layout) => layout.name === layoutSelector.value
      );

      if (selectedLayout) {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          const tabId = tabs[0]?.id;
          if (tabId === undefined) {
            console.error("Unable to find the active tab");
            return;
          }

          chrome.tabs.sendMessage(tabId, {
            action: "fillForm",
            layout: selectedLayout,
            options: {
              predefinedPassword: predefinedPassword.value,
              useRandomPassword: useRandomPassword.checked,
            },
          });
        });
      }
    });
  }

  // Check AdBlocker status
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tabId = tabs[0]?.id;
    if (tabId === undefined) {
      console.error("Unable to find the active tab");
      return;
    }

    chrome.tabs.sendMessage(
      tabId,
      { action: "checkAdBlockerStatus" },
      (response) => {
        if (response) {
          console.log("AdBlocker enabled:", response.enabled);
        }
      }
    );
  });
});
