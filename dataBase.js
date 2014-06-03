var malwaresRef= new Firebase("https://iDislike.firebaseio.com/malwares");

function malware(url,sourceUrl){
	this.url=url;
	this.sourceUrl=sourceUrl;
}

