import { initMessageListener } from './message-listener';
import { checkAdBlockerStatusOnLoad } from './ad-blocker';
import { createLogger } from '../utils/logger';

const logger = createLogger();

const initContentScript = () => {
	initMessageListener();
	checkAdBlockerStatusOnLoad();
	logger.info('Content script initialized');
};

initContentScript();
