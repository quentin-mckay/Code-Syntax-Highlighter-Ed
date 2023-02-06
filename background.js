// chrome.browserAction.onClicked.addListener(function (tab) {
//     chrome.tabs.executeScript({
//         code: 'document.body.style.backgroundColor = "red";',
//     });
// });

// chrome.action.onClicked.addListener(async (tab) => {
// 	await console.log('hello')	
// })

chrome.action.onClicked.addListener(function (tab) {
    chrome.tabs.sendMessage(
        tab.id,
        { text: 'highlight' }
    );
});