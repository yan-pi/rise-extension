import { initializePopup } from './setup/index';
import { checkAdBlockerStatus } from './background-communication';
import { createLogger } from '../utils/logger';

const logger = createLogger();

document.addEventListener('DOMContentLoaded', () => {
	initializePopup();

	chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
		const tabId = tabs[0]?.id;
		if (!tabId) {
			logger.error('Unable to find the active tab');
			return;
		}

		checkAdBlockerStatus(tabId);
	});
});
