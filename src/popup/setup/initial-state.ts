import { getElements } from './elements';

export function setInitialState(elements: ReturnType<typeof getElements>) {
	elements.useRandomPassword.checked = true;
	elements.adBlockerCheckbox.checked = true;
	elements.autoRegisterCheckbox.checked = true;
	elements.predefinedPassword.disabled = elements.useRandomPassword.checked;

	elements.useRandomPassword.checked = localStorage.getItem('useRandomPassword') === 'true';
	elements.adBlockerCheckbox.checked = localStorage.getItem('enableAdBlocker') === 'true';
	elements.autoRegisterCheckbox.checked = localStorage.getItem('autoRegister') === 'true';
	elements.adBlockerCheckbox.checked = localStorage.getItem('adBlockerEnabled') === 'true';

	// const isPopupPinned = localStorage.getItem('popupPinned') === 'true';

	// if (isPopupPinned) {
	// 	elements.pinPopupButton.textContent = 'Desfixar Pop-up';
	// } else {
	// 	elements.pinPopupButton.textContent = 'Fixar Pop-up';
	// }
}
