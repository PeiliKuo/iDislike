chrome.tabs.getSelected(null, function(tab) {
    document.getElementById('currentLink').innerHTML = tab.url;
  console.log("getUrls");
  alert("!!");
});

function a(){console.log("getUrls:pop11");}
console.log("getUrls:pop");
setInterval(a, 3000);
