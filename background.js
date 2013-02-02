
chrome.browserAction.onClicked.addListener (
function (tab) {
	var neweditor = chrome.extension.getURL('editorPage.html');
	chrome.tabs.create({'url': neweditor});
});



// load user mainkey content (has documentkey list and its decscription)
// ctrl-o, ctrl-O, on select as key to load document content
// ctrl-s, ctrl-S, on select as key for save document content

// chained message fetch: first save => ...

// get file first line as key

// when open new window, query mainkey for all file key
// and then select file key for content.