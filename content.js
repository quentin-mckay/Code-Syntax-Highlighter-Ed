chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if (msg.text === 'highlight') {

		// Get rid of warning
		hljs.configure({
			ignoreUnescapedHTML: true
		});

		// Find all code elements and highlight them
		const codeElements = document.querySelectorAll('.amber-pre');
		for (const code of codeElements) {
			hljs.highlightElement(code);
		}
		
    }
});
