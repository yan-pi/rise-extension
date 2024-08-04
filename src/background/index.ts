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
    chrome.runtime.onInstalled.addListener(this.onInstalled.bind(this));
    chrome.runtime.onMessage.addListener(this.handleMessage.bind(this));
  }

  private onInstalled(): void {
    // Inicialização da extensão
  }

  private handleMessage(message: any, sender: chrome.runtime.MessageSender, sendResponse: (response?: any) => void): void {
    // Lógica para lidar com mensagens
  }
}

new Background();