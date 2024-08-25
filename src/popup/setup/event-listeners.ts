import { getElements } from './elements';
import { toggleAdBlocker } from './adblocker';
import { handleDepositButtonClick, handleGenerateUserClick } from './popup-message-handlers';

export function setupEventListeners(elements: ReturnType<typeof getElements>) {
	elements.useRandomPassword.addEventListener('change', () => {
		localStorage.setItem('useRandomPassword', elements.useRandomPassword.checked.toString());
		elements.predefinedPassword.disabled = elements.useRandomPassword.checked;
	});

	elements.autoRegisterCheckbox.addEventListener('change', () => {
		localStorage.setItem('autoRegister', elements.autoRegisterCheckbox.checked.toString());
	});

	if (elements.adBlockerCheckbox) {
		elements.adBlockerCheckbox.addEventListener('change', () => {
			toggleAdBlocker(elements.adBlockerCheckbox.checked);
			localStorage.setItem('adBlockerEnabled', elements.adBlockerCheckbox.checked.toString());
		});
	}

	if (elements.depositButton) {
		elements.depositButton.addEventListener('click', handleDepositButtonClick);
	}

	if (elements.generateUserButton) {
		elements.generateUserButton.addEventListener('click', () => handleGenerateUserClick(elements));
	}

	elements.pinPopupButton.addEventListener('click', () => {
		chrome.windows.getCurrent({ populate: true }, window => {
			const isPopupPinned = window.type === 'popup' && window.state === 'normal';

			if (isPopupPinned) {
				if (window.id !== undefined) {
					chrome.windows.update(window.id, { state: 'minimized' });
					elements.pinPopupButton.textContent = 'Fixar Pop-up';
					localStorage.setItem('popupPinned', 'false');
				}
			} else {
				chrome.windows.create(
					{
						url: chrome.runtime.getURL('popup.html'),
						type: 'popup',
						width: 400,
						height: 600
					},
					newWindow => {
						elements.pinPopupButton.textContent = 'Desfixar Pop-up';
						localStorage.setItem('popupPinned', 'true');
					}
				);
			}
		});
	});
}
