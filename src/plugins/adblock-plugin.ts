export class AdBlockerPlugin {
  private enabled = false;

  enable(): void {
    this.enabled = true;
    this.blockAds();
  }

  disable(): void {
    this.enabled = false;
    this.unblockAds();
  }

  private blockAds(): void {
    if (!this.enabled) return;

    const adSelectors = [
      'div[id^="ad-"]',
      'div[class^="ad-"]',
      'iframe[src*="advertisement"]',
      'div[role="document"] .ant-modal-content .ant-modal-body .hPZOlHm6KewFnQBA6C_0',
      'div[role="document"] .ant-modal-root',
      'div.ant-modal-root',
      'div.cms-mango-popup[data-type="NotiftPopup"]',
      // Add more ad selectors as needed
    ];

    adSelectors.forEach((selector) => {
      const ads = document.querySelectorAll(selector);
      console.log(ads);
      ads.forEach((ad) => {
        (ad as HTMLElement).style.display = "none";
      });
    });
  }

  private unblockAds(): void {
    const adSelectors = [
      'div[id^="ad-"]',
      'div[class^="ad-"]',
      'iframe[src*="advertisement"]',
      'div[role="document"] .ant-modal-content .ant-modal-body .hPZOlHm6KewFnQBA6C_0',
      'div[role="document"] .ant-modal-root',
      'div.cms-mango-popup[data-type="NotiftPopup"]',
      // Add more ad selectors as needed
    ];

    adSelectors.forEach((selector) => {
      const ads = document.querySelectorAll(selector);
      console.log(ads);
      ads.forEach((ad) => {
        (ad as HTMLElement).style.display = "";
      });
    });
  }
}
