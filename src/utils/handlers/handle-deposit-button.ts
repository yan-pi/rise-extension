import { createLogger } from '../logger';
import { handleButtonWithSpan } from './handle-span-button';

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

		setTimeout(() => {
			const randomValue = (Math.random() * 10 + 10).toFixed(2);
			const inputElement = document.querySelector("input[placeholder='Mínimo 10,00, Máximo 50000,00']");

			if (inputElement instanceof HTMLInputElement) {
				inputElement.value = randomValue;

				const inputEvent = new Event('input', { bubbles: true });
				const changeEvent = new Event('change', { bubbles: true });
				inputElement.dispatchEvent(inputEvent);
				inputElement.dispatchEvent(changeEvent);

				logger.info(`Inserted value ${randomValue} into the input field`);

				handleButtonWithSpan('Recarregue Agora');
			} else {
				logger.error('Input field not found');
			}
		}, 500);
	} else {
		logger.error('Deposit div not found');
	}
};
