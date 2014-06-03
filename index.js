	console.log("function");
	//document.getElementById("domainName").innerHTML=window.location.host;
console.log(window.location.host);

chrome.browserAction.getPopup(function(){
	document.getElementById("domainName").html=window.location.host;//window.location.host;
	document.write(window.location.host);
});