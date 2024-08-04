import browser from 'webextension-polyfill';
import { StorageService } from '../background/services/storage-service';
import { AdBlocker } from '../utils/ad-blocker';

class Background {
  private storageService: StorageService;
  private adBlocker: AdBlocker;

  constructor() {
    this.storageService = new StorageService();
    this.adBlocker = new AdBlocker();
    this.init();
  }

  private init(): void {
    browser.runtime.onInstalled.addListener(this.onInstalled.bind(this));
    browser.runtime.onMessage.addListener(this.handleMessage.bind(this));
  }

  private onInstalled(): void {
    console.log('Ryse Extension installed');
  }

  private handleMessage(message: any, sender: browser.Runtime.MessageSender): Promise<any> {
    if (message.action === 'blockAds') {
      this.adBlocker.blockAds();
      return Promise.resolve({ success: true });
    }
    return Promise.resolve();
  }
}

new Background();