import browser from "webextension-polyfill";
import * as storageService from "./services/storage-service";
import { blockAds } from "../utils/ad-blocker";

function onInstalled(): void {
  console.log("Ryse Extension installed");
}

function handleMessage(
  message: any,
  sender: browser.Runtime.MessageSender
): Promise<any> {
  if (message.action === "blockAds") {
    blockAds();
    return Promise.resolve({ success: true });
  }
  return Promise.resolve();
}

function init(): void {
  browser.runtime.onInstalled.addListener(onInstalled);
  browser.runtime.onMessage.addListener(handleMessage);
}

init();
