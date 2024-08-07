import { Plugin } from "./plugin-interface";

export class AdBlockerPlugin implements Plugin {
  private enabled = true;

  enable(): void {
    this.enabled = true;
    this.blockAds();
  }

  disable(): void {
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
