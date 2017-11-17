var d=document.getElementById("d");

var settings = {
	"#link1": { path: "1.html",
	handle: function() {
		var li = document.getElementById("01");
	    var ul = document.getElementById('menu1');
		li.addEventListener("click", function(e) {
			ul.classList.toggle("open");
		});
	} },
	"#link2" : { path: "2.html",
	handle: function() {
		var inp = document.getElementsByClassName('inp');
		var but = document.getElementById('b');
		but.addEventListener("click", function() {
			var sum = Number(inp[0].value)+Number(inp[1].value);
			inp[2].value=sum;
		});
	} },
	"#link3" : "3.html",
	"#link4" : "4.html",
	"#link5" : "5.html"
}
var f = function(text) {
	d.innerHTML = text;
	if((location.hash == "#link1") || (location.hash == "#link2"))
		{
			settings[location.hash].handle();
		}
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