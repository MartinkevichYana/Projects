var dtext = document.getElementById('d');
var dbut = document.getElementById('but');
var dcol = document.getElementsByClassName('color')[0];
var dback = document.getElementsByClassName('back')[0];
var bold = document.getElementsByTagName("button")[0];
var it = document.getElementsByTagName("button")[1];
var und = document.getElementsByTagName("button")[2];
var line = document.getElementsByTagName("button")[3];
var color = document.getElementsByTagName("button")[4];
var back = document.getElementsByTagName("button")[5];
var link = document.getElementsByTagName("button")[6];
var clear = document.getElementsByTagName("button")[7];
var sfont = document.getElementsByTagName("select")[0];
var ssize = document.getElementsByTagName("select")[1];
var list = document.getElementsByTagName("select")[2];
var inplink = document.getElementsByTagName("input")[0];
var img = document.getElementsByTagName("img");
dtext.contentEditable = true;
var text = dtext.innerHTML;
var str = "";
//сделать функцию для проверки если текст не выделен то сделать для всего текста
bold.addEventListener("click", function(e) {
	str = window.getSelection().toString();
	document.execCommand ('bold', false, null);
	bold.classList.toggle("sost");
});
it.addEventListener("click", function(e) {
	str = window.getSelection().toString();
	document.execCommand ('italic', false, null);
	it.classList.toggle("sost");
});
und.addEventListener("click", function(e) {
	str = window.getSelection().toString();
	document.execCommand ('underline', false, null);
	und.classList.toggle("sost");
});
sfont.addEventListener("change", function() {
	document.execCommand ('fontname', false, sfont.value);
	sfont.classList.add("sost");
});
ssize.addEventListener("change", function() {
	document.execCommand ('fontsize', false, ssize.value);
	ssize.classList.add("sost");
});
line.addEventListener("click", function() {
	document.execCommand ('inserthorizontalrule', false, null);
	line.classList.toggle("sost");
});
list.addEventListener("change", function() {
	document.execCommand (list.value, false, null);
	list.classList.add("sost");
});
color.addEventListener("click", function() {
	dcol.classList.toggle("color");
	color.classList.toggle("sost");
});
back.addEventListener("click", function() {
	dback.classList.toggle("back");
	back.classList.toggle("sost");
});

for(var i=0; i<dcol.children.length; i++)
{
	imgcol(i);
}
function imgcol(i) {
	img[i].addEventListener("click", function() {
		var col=img[i].getAttribute("class");
		document.execCommand ("forecolor", false, col);
	});
}

for(var i=img.length/2; i<img.length; i++)
{
	imgback(i);
}
function imgback(i) {
	img[i].addEventListener("click", function() {
		var col=img[i].getAttribute("class");
		document.execCommand ("backcolor", false, col);
	});
}
link.addEventListener("click", function() {
	document.execCommand ("createlink", false, inplink.value);
	link.classList.toggle("sost");
});
clear.addEventListener("click", function() {
	dtext.innerHTML = text;
	clear.classList.toggle("sost");
	var c = document.getElementsByClassName("sost");
	for(var i=0; i<c.length; i++)
	{
		c[i].classList.remove("sost");
	}
});