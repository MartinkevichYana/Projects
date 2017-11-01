var ul1=document.getElementsByTagName('ul')[0];
var li1=document.getElementsByTagName('li')[0];
var li2=document.getElementsByTagName('li')[1];
var li3=document.getElementsByTagName('li')[2];

for(var i=1;i<10;i++)
{
	var li = document.getElementById(String(i));
	var ul = document.getElementById('m'+String(i));
	liListener(li, ul);
}

for(var i=1;i<4;i++)
{
	var li = document.getElementById('0'+String(i));
	var ul = document.getElementById('menu'+String(i));
	liListener(li, ul);
}

function liListener(el1, el2) {
	el1.addEventListener("click", function(e) {
		el2.classList.toggle("open");
	})
}