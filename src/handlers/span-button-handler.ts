import { createLogger } from '../utils/logger';

const logger = createLogger();

export const handleButtonWithSpan = (spanText: string): void => {
	const spans = document.querySelectorAll('button span');
	let buttonClicked = false;

	spans.forEach(span => {
		if (span.textContent && span.textContent.includes(spanText)) {
			const button = span.closest('button');
			if (button) {
				button.click();
				buttonClicked = true;
				logger.info(`Clicked button with span: ${spanText}`);
			}
		}
	});

	if (!buttonClicked) {
		logger.error(`Button with span text "${spanText}" not found`);
	}
};
