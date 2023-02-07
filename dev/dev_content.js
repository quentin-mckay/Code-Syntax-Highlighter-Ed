console.log("Content Script initialized.")


chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if (msg.text === 'highlight') {

        console.log("Message received!")


		let divs = document.querySelectorAll('.amber-pre')

		// console.log(divs)


		//  needed to be "of" instead of "in"
		// for (let div in divs) {
		// 	div.innerText = 'hello'
		// }

		// divs.forEach(div => {
		// 	div.innerText = 'hello'
		// })


		// Load the Highlight.js library
		const script = document.createElement('script');
		script.src = chrome.runtime.getURL('highlight.min.js');

		script.onload = function() {

			hljs.configure({
				ignoreUnescapedHTML: true
			});

			// console.log('inside onload')
			// console.log(hljs)

			// const style = document.createElement('style');
			// style.innerHTML = `
			// 	// .hljs {
			// 	// 	background: black;
			// 	// 	padding: 10px;
			// 	// 	border-radius: 5px;
			// 	// }
			// 	// pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}.hljs{background:#f3f3f3;color:#444}.hljs-comment{color:#697070}.hljs-punctuation,.hljs-tag{color:#444a}.hljs-tag .hljs-attr,.hljs-tag .hljs-name{color:#444}.hljs-attribute,.hljs-doctag,.hljs-keyword,.hljs-meta .hljs-keyword,.hljs-name,.hljs-selector-tag{font-weight:700}.hljs-deletion,.hljs-number,.hljs-quote,.hljs-selector-class,.hljs-selector-id,.hljs-string,.hljs-template-tag,.hljs-type{color:#800}.hljs-section,.hljs-title{color:#800;font-weight:700}.hljs-link,.hljs-operator,.hljs-regexp,.hljs-selector-attr,.hljs-selector-pseudo,.hljs-symbol,.hljs-template-variable,.hljs-variable{color:#ab5656}.hljs-literal{color:#695}.hljs-addition,.hljs-built_in,.hljs-bullet,.hljs-code{color:#397300}.hljs-meta{color:#1f7199}.hljs-meta .hljs-string{color:#38a}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}
			// 	pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}.hljs{color:#abb2bf;background:#282c34}.hljs-comment,.hljs-quote{color:#5c6370;font-style:italic}.hljs-doctag,.hljs-formula,.hljs-keyword{color:#c678dd}.hljs-deletion,.hljs-name,.hljs-section,.hljs-selector-tag,.hljs-subst{color:#e06c75}.hljs-literal{color:#56b6c2}.hljs-addition,.hljs-attribute,.hljs-meta .hljs-string,.hljs-regexp,.hljs-string{color:#98c379}.hljs-attr,.hljs-number,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-pseudo,.hljs-template-variable,.hljs-type,.hljs-variable{color:#d19a66}.hljs-bullet,.hljs-link,.hljs-meta,.hljs-selector-id,.hljs-symbol,.hljs-title{color:#61aeee}.hljs-built_in,.hljs-class .hljs-title,.hljs-title.class_{color:#e6c07b}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}.hljs-link{text-decoration:underline}
			// `;
			// document.head.appendChild(style);

			// Find all code elements and highlight them
			const codeElements = document.querySelectorAll('.amber-pre');
			for (const code of codeElements) {
				hljs.highlightElement(code);
			}
		}
		document.head.appendChild(script);


    }
});
