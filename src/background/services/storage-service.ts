import browser from 'webextension-polyfill';

export class StorageService {
  async set(key: string, value: any): Promise<void> {
    return browser.storage.local.set({ [key]: value });
  }

  async get(key: string): Promise<any> {
    const result = await browser.storage.local.get([key]);
    return result[key];
  }
}