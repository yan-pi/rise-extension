import { AdBlockerPlugin } from '../plugins/adblock-plugin';
import { createLogger } from '../utils/logger';

const logger = createLogger();
const adBlocker = AdBlockerPlugin();

export const toggleAdBlocker = (enable: boolean): void => {
	if (enable) {
		adBlocker.enable();
	} else {
		adBlocker.disable();
	}
	localStorage.setItem('adBlockerEnabled', enable.toString());
	logger.info(`AdBlocker ${enable ? 'enabled' : 'disabled'}`);
};

export const checkAdBlockerStatusOnLoad = (): void => {
	const adBlockerEnabled = localStorage.getItem('adBlockerEnabled') === 'true';
	if (adBlockerEnabled) {
		adBlocker.enable();
	} else {
		adBlocker.disable();
	}
	logger.info(`AdBlocker status on load: ${adBlockerEnabled ? 'enabled' : 'disabled'}`);
};

export const isAdBlockerEnabled = (): boolean => {
	return true;
};
