
	//document.getElementById("domainName").innerHTML=window.location.host;

chrome.browserAction.onClicked.addListener(function(){
	console.log("test");
	document.write("abbb");
	document.getElementById("domainName").html='ask';//window.location.host;
	var thisUrl=document.write(window.location.host);
	console.log('check:'+ checkMalwareList(thisUrl) );
	document.write(thisUrl);


	console.log(tab.url);
  localStorage.url=tab.url;
  localStorage.malwareList=stringify(malwaresRef);
  localStorage.setItem("lastname", "Smith");
});