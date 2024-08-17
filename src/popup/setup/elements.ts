import { siteLayouts } from '../../config/site-layouts';

export function getElements() {
	return {
		enableAdBlockerCheckbox: document.getElementById('enableAdBlocker') as HTMLInputElement,
		depositButton: document.getElementById('depositButton') as HTMLButtonElement,
		generateUserButton: document.getElementById('generateUser') as HTMLButtonElement,
		layoutSelector: document.getElementById('layoutSelector') as HTMLSelectElement,
		predefinedPassword: document.getElementById('predefinedPassword') as HTMLInputElement,
		useRandomPassword: document.getElementById('useRandomPassword') as HTMLInputElement,
		autoRegisterCheckbox: document.getElementById('autoRegister') as HTMLInputElement
	};
}

export function populateLayoutSelector(layoutSelector: HTMLSelectElement) {
	siteLayouts.forEach(layout => {
		const option = document.createElement('option');
		option.value = layout.name;
		option.textContent = layout.name;
		layoutSelector.appendChild(option);
	});
}
