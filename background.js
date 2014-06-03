//chrome.browserAction.setIcon({path:"icon.png"});
var badUrlFind=false;
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
 checkUrl(tabId, changeInfo, tab);
});

chrome.tabs.onSelectionChanged.addListener(function(tabId, changeInfo, tab) {
 checkUrl(tabId, changeInfo, tab);
});


function checkUrl(tabId, changeInfo, tab){
 chrome.tabs.getSelected(null, function(tab) {

  badUrlFind=(tab.url=="http://zhphoto.lovequota.com/view/120226080357616");

  if(badUrlFind){
    chrome.browserAction.setIcon({path:"icon3.png"});
  }else{
    chrome.browserAction.setIcon({path:"icon.png"});
  }
});
}
