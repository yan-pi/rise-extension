import browser from 'webextension-polyfill';
import { FormFiller } from '../utils/form-filler';

class ContentScript {
  private formFiller: FormFiller;

  constructor() {
    this.formFiller = new FormFiller();
    this.init();
  }

  private init(): void {
    browser.runtime.onMessage.addListener(this.handleMessage.bind(this));
  }

  private handleMessage(message: any, sender: browser.Runtime.MessageSender): Promise<any> {
    if (message.action === 'fillForm') {
      this.formFiller.fillForm(message.data);
      return Promise.resolve({ success: true });
    }
    return Promise.resolve();
  }
}

new ContentScript();