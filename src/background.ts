import { createLogger } from './utils/logger';

const logger = createLogger();

chrome.runtime.onInstalled.addListener(() => {
	logger.info('Extension installed');
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	logger.debug(`Received message: ${JSON.stringify(message)}`);
	// Handle the message
});
