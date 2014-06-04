



var badUrlFind=false;
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
 checkUrl(tabId, changeInfo, tab);
});

chrome.tabs.onSelectionChanged.addListener(function(tabId, changeInfo, tab) {
 checkUrl(tabId, changeInfo, tab);
});


function checkUrl(tabId, changeInfo, tab){
 chrome.tabs.getSelected(null, function(tab) {
//console.log(tab.url);
  //localStorage.url=tab.url;
  
  /*badUrlFind=(checkMalwareList(window.location.host));

  if(badUrlFind){
    chrome.browserAction.setIcon({path:"icon3.png"});
  }else{
    chrome.browserAction.setIcon({path:"icon.png"});
  }*/
});
}