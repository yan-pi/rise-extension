class AdBlocker {
  static activate() {
    chrome.runtime.sendMessage({ action: "blockAds" });
  }
}
