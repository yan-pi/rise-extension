import { handleDepositButton } from '../handlers/deposit-button-handler';
import { fillForm } from './form-filler';
import { toggleAdBlocker, isAdBlockerEnabled } from './adblocker';
import { handleButtonWithSpan } from '../handlers/span-button-handler';

export const initMessageListener = () => {
	chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
		switch (message.action) {
			case 'handleDepositButton':
				handleDepositButton();
				break;
			case 'fillForm':
				fillForm(message.layout, message.options);
				break;
			case 'toggleAdBlocker':
				toggleAdBlocker(message.enable);
				break;
			case 'checkAdBlockerStatus':
				sendResponse({ enabled: isAdBlockerEnabled() });
				break;
			case 'clickButton':
				handleButtonWithSpan(message.spanText);
				sendResponse({ status: 'Button clicked' });
				break;
		}
		sendResponse({ success: true });
	});
};
