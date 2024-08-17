import { setupEventListeners } from './event-listeners';
import { setInitialState } from './initial-state';
import { populateLayoutSelector } from './elements';
import { getElements } from './elements';

export function initializePopup() {
	const elements = getElements();
	populateLayoutSelector(elements.layoutSelector);
	setInitialState(elements);
	setupEventListeners(elements);
}
