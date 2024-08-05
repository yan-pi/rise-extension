document.getElementById("startRegistration")?.addEventListener("click", () => {
  const siteSelector = document.getElementById(
    "siteSelector"
  ) as HTMLSelectElement;
  const useRandomPassword = (
    document.getElementById("useRandomPassword") as HTMLInputElement
  ).checked;
  const useSpecialChars = (
    document.getElementById("useSpecialChars") as HTMLInputElement
  ).checked;
  const activateAdBlocker = (
    document.getElementById("activateAdBlocker") as HTMLInputElement
  ).checked;

  chrome.runtime.sendMessage({
    action: "startRegistration",
    data: {
      selectedSite: siteSelector.value,
      useRandomPassword,
      useSpecialChars,
      activateAdBlocker,
    },
  });
});
