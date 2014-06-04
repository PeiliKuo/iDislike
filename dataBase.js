var malwaresRef= new Firebase("https://iDislike.firebaseio.com/malwares");

function malware(url,sourceUrl){
	this.url=url;
	this.sourceUrl=sourceUrl;
	this.times=0;
}

var fakeUrlObj=new malware('https://www.youtube.com/videos?feature=hp','');
malwaresRef.push(fakeUrlObj);
console.log('push')
function addMalware(mal){
	malwaresRef.push(mal);

}

function checkMalwareList(url){
	malwaresRef.forEach(function(childSnapshot){
		var thisUrl=childSnapshot.url;
		if(url==thisUrl){
			return true;
		}else{
			return false;
		}
	});
}


