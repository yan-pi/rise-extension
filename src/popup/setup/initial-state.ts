import { getElements } from './elements';

export function setInitialState(elements: ReturnType<typeof getElements>) {
	elements.useRandomPassword.checked = true;
	elements.enableAdBlockerCheckbox.checked = true;
	elements.autoRegisterCheckbox.checked = true;
	elements.predefinedPassword.disabled = elements.useRandomPassword.checked;

	elements.useRandomPassword.checked = localStorage.getItem('useRandomPassword') === 'true';
	elements.enableAdBlockerCheckbox.checked = localStorage.getItem('enableAdBlocker') === 'true';
	elements.autoRegisterCheckbox.checked = localStorage.getItem('autoRegister') === 'true';
}
