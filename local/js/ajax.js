// ajax var
var ajax;

// ajax code
const UNINITIALIZED = 0;
const LOADING = 1;
const LOADED = 2;
const INTERACTIVE = 3;
const SUCCESS = 4;
const HTTP_OK = 200;

// instance of ajax
if (window.XMLHttpRequest) { // Mozilla, Safari, ...
    ajax = new XMLHttpRequest();
} else if (window.ActiveXObject) { // IE
    ajax = new ActiveXObject("Microsoft.XMLHTTP");
}

//
ajax.onreadystatechange = () => {
	if (ajax.readyState == SUCCESS) { 
	    if (ajax.status == HTTP_OK) { 
	    	var container = document.getElementById("container");
	    	container.innerHTML = ajax.responseText;
		}
	}
    
}

function get(url) { // IE
    ajax.open('GET', url, true);
	ajax.send(null);
}
