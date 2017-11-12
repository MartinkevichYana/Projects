var d=document.getElementById("d");

var settings = {
	"#link1": { path: "1.html",
	handle: function() {
		alert("Hi");
	} },
	"#link2" : { path: "2.html",
	handle: function() {
		alert("Hello");
	} },
	"#link3" : "3.html",
	"#link4" : "4.html",
	"#link5" : "5.html"
}

var change = function() {

	var path = settings[location.hash].path || settings[location.hash];
	
	var xhr = new XMLHttpRequest();
	xhr.open("GET", path, true);
	xhr.onload = function() {
		d.innerHTML = this.responseText;
		if((location.hash == "#link1") || (location.hash == "#link2"))
		{
			settings[location.hash].handle();
		}
	}
	xhr.send(null);
}

window.onhashchange = function() {
	change();
}
if(location.hash in settings) {
	change();
}