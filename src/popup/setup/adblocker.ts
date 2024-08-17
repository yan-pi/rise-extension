export function toggleAdBlocker(enable: boolean) {
	chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
		const tabId = tabs[0]?.id;
		if (tabId !== undefined) {
			chrome.tabs.sendMessage(tabId, {
				action: 'toggleAdBlocker',
				enable: enable
			});
		}
	});
}
