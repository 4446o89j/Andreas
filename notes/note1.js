function getParam(name){
    var results = new RegExp('[|?&]' + name + '=([^&#]*)').exec(window.location.href);
   	if(results){
      	return results[1];
    }else{
      	return undefined;
    }
}

//%# is a specific type of code for the url
//decodeURIcomponent is used to add spaces