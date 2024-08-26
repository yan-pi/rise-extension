import { siteLayouts } from '../../config/site-layouts';
import { createLogger } from '../../utils/logger';
import { getElements } from './elements';

const logger = createLogger();

export function handleDepositButtonClick() {
	chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
		const tabId = tabs[0]?.id;
		if (tabId === undefined) {
			logger.error('Unable to find the active tab');
			return;
		}
		chrome.tabs.sendMessage(tabId, {
			action: 'handleDepositButton'
		});
	});
}

export function handleGenerateUserClick(elements: ReturnType<typeof getElements>) {
	const selectedLayout = siteLayouts.find(layout => layout.name === elements.layoutSelector.value);
	if (selectedLayout) {
		chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
			const tabId = tabs[0]?.id;
			if (tabId === undefined) {
				logger.error('Unable to find the active tab');
				return;
			}
			chrome.tabs.sendMessage(tabId, {
				action: 'fillForm',
				layout: selectedLayout,
				options: {
					predefinedPassword: elements.predefinedPassword.value,
					useRandomPassword: elements.useRandomPassword.checked,
					autoRegister: elements.autoRegisterCheckbox.checked
				}
			});
		});
	}
}
