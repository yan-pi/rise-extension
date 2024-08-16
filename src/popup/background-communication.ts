export function checkAdBlockerStatus(tabId: number) {
  chrome.tabs.sendMessage(
    tabId,
    { action: "checkAdBlockerStatus" },
    (response) => {
      if (response) {
        console.log("AdBlocker enabled:", response.enabled);
      }
    }
  );
}
