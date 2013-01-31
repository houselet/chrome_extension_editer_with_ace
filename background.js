
chrome.browserAction.onClicked.addListener (
function (tab) {
	var neweditor = chrome.extension.getURL('editorPage.html');
	chrome.tabs.create({'url': neweditor});
});
