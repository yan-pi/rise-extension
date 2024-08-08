import { Plugin } from "./plugin-interface";

export class AdBlockerPlugin implements Plugin {
  private enabled = false;

  enable(): void {
    this.enabled = true;
    console.log("AdBlocker enabled");
    this.blockAds();
  }

  disable(): void {
    console.log("AdBlocker disabled");
    this.enabled = false;
  }
  private blockAds(): void {
    if (!this.enabled) return;

    const adSelectors = [
      'div[id^="ad-"]',
      'div[class^="ad-"]',
      'iframe[src*="advertisement"]',
      // Add more ad selectors as needed
    ];

    adSelectors.forEach((selector) => {
      const ads = document.querySelectorAll(selector);
      ads.forEach((ad) => ad.remove());
    });
  }
}
