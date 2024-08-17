export class AdBlockerPlugin {
	private enabled: boolean;
	private observer: MutationObserver | null;

	constructor() {
		this.enabled = false;
		this.observer = null;
		this.init();
	}

	private init(): void {
		const adBlockerEnabled = localStorage.getItem('adBlockerEnabled') === 'true';
		if (adBlockerEnabled) {
			this.enable();
		}
	}

	enable(): void {
		this.enabled = true;
		localStorage.setItem('adBlockerEnabled', 'true');
		this.applyBlockingRules();
		this.startObserver();
	}

	disable(): void {
		this.enabled = false;
		localStorage.setItem('adBlockerEnabled', 'false');
		this.removeBlockingRules();
		this.stopObserver();
	}

	isEnabled(): boolean {
		return this.enabled;
	}

	private applyBlockingRules(): void {
		const adSelectors = [
			'div[id^="ad-"]',
			'div[class^="ad-"]',
			'iframe[src*="advertisement"]',
			'div[role="document"] .ant-modal-content .ant-modal-body .hPZOlHm6KewFnQBA6C_0',
			'div[role="document"] .ant-modal-root',
			'div.ant-modal-root',
			'div.cms-mango-popup[data-type="NotiftPopup"]'
			// Add more ad selectors as needed
		];

		let style = document.getElementById('adBlockerStyle') as HTMLStyleElement;
		if (!style) {
			style = document.createElement('style');
			style.id = 'adBlockerStyle';
			document.head.appendChild(style);
		}
		style.textContent = adSelectors.map(selector => `${selector} { display: none !important; }`).join('\n');

		this.hideExistingAds(adSelectors);
	}

	private removeBlockingRules(): void {
		const style = document.getElementById('adBlockerStyle');
		if (style) {
			style.remove();
		}
	}

	private hideExistingAds(selectors: string[]): void {
		selectors.forEach(selector => {
			document.querySelectorAll(selector).forEach((el: Element) => {
				(el as HTMLElement).style.display = 'none';
			});
		});
	}

	private startObserver(): void {
		if (this.observer) return;

		this.observer = new MutationObserver(mutations => {
			if (this.enabled) {
				this.applyBlockingRules();
			}
		});

		this.observer.observe(document.body, {
			childList: true,
			subtree: true
		});
	}

	private stopObserver(): void {
		if (this.observer) {
			this.observer.disconnect();
			this.observer = null;
		}
	}
}
