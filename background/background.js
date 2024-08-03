chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "blockAds") {
    chrome.webRequest.onBeforeRequest.addListener(
      (details) => ({ cancel: true }),
      {
        urls: [
          "*://*.doubleclick.net/*",
          "*://*.googlesyndication.com/*",
          "*://*.googleadservices.com/*",
        ],
      },
      ["blocking"]
    );
  }
});
