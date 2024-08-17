import { createLogger } from '../logger';

const logger = createLogger();

export const handleDepositButton = (): void => {
	const depositSelectors = [
		'div.header-deposit-btn-text-FWRWB',
		"div:has(span:contains('Depósito'))",
		"div[class*='deposit' i]",
		"div[class*='deposito' i]",
		"div:contains('Depósito')"
	];

	let depositElement: HTMLElement | null = null;

	for (const selector of depositSelectors) {
		const element = document.querySelector(selector);
		if (element instanceof HTMLElement) {
			depositElement = element;
			break;
		}
	}

	if (depositElement) {
		depositElement.click();
		logger.info('Clicked deposit div');
	} else {
		logger.error('Deposit div not found');
	}
};
