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
var rig = document.getElementsByTagName("button")[7];
var cent = document.getElementsByTagName("button")[8];
var left = document.getElementsByTagName("button")[9];
var clear = document.getElementsByTagName("button")[10];
var sfont = document.getElementsByTagName("select")[0];
var ssize = document.getElementsByTagName("select")[1];
var list = document.getElementsByTagName("select")[2];
var inplink = document.getElementsByTagName("input")[0];
var img = document.getElementsByTagName("img");
dtext.contentEditable = true;
var text = dtext.innerHTML;
var str = "";

bold.addEventListener("click", function(e) {
	str = window.getSelection().toString();
	document.execCommand ('bold', false, null);
});
it.addEventListener("click", function(e) {
	str = window.getSelection().toString();
	document.execCommand ('italic', false, null);
});
und.addEventListener("click", function(e) {
	str = window.getSelection().toString();
	document.execCommand ('underline', false, null);
});
sfont.addEventListener("change", function() {
	document.execCommand ('fontname', false, sfont.value);
});
ssize.addEventListener("change", function() {
	document.execCommand ('fontsize', false, ssize.value);
});
line.addEventListener("click", function() {
	document.execCommand ('inserthorizontalrule', false, null);
});
list.addEventListener("change", function() {
	document.execCommand (list.value, false, null);
});
color.addEventListener("click", function() {
	dcol.classList.toggle("color");
});
back.addEventListener("click", function() {
	dback.classList.toggle("back");
});
rig.addEventListener("click", function(e) {
	document.execCommand ('justifyright', false, null);
});
cent.addEventListener("click", function(e) {
	document.execCommand ('justifycenter', false, null);
});
left.addEventListener("click", function(e) {
	document.execCommand ('justifyleft', false, null);
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
});
clear.addEventListener("click", function() {
	dtext.innerHTML = text;
});
dtext.addEventListener("mouseup", function() {
	if(document.queryCommandState("bold")==true)
	{
		bold.classList.add("sost");
	}
	if(document.queryCommandState("italic")==true)
	{
		it.classList.add("sost");
	}
	if(document.queryCommandState("underline")==true)
	{
		und.classList.add("sost");
	}
	if(document.queryCommandState("fontname")==true)
	{
		sfont.classList.add("sost");
	}
	if(document.queryCommandState("inserthorizontalrule")==true)
	{
		line.classList.add("sost");
	}
	if(document.queryCommandState("forecolor")==true)
	{
		color.classList.add("sost");
	}
	if(document.queryCommandState("backcolor")==true)
	{
		back.classList.add("sost");
	}
	if(document.queryCommandState("justifyright")==true)
	{
		rig.classList.add("sost");
	}
	if(document.queryCommandState("justifycenter")==true)
	{
		cent.classList.add("sost");
	}
	if(document.queryCommandState("justifyleft")==true)
	{
		left.classList.add("sost");
	}
	if(document.queryCommandState("bold")==false)
	{
		bold.classList.remove("sost");
	}
	if(document.queryCommandState("italic")==false)
	{
		it.classList.remove("sost");
	}
	if(document.queryCommandState("underline")==false)
	{
		und.classList.remove("sost");
	}
	if(document.queryCommandState("fontname")==false)
	{
		sfont.classList.remove("sost");
	}
	if(document.queryCommandState("fontsize")==false)
	{
		ssize.classList.remove("sost");
	}
	if(document.queryCommandState("inserthorizontalrule")==false)
	{
		line.classList.remove("sost");
	}
	if(document.queryCommandState("forecolor")==false)
	{
		color.classList.remove("sost");
	}
	if(document.queryCommandState("backcolor")==false)
	{
		back.classList.remove("sost");
	}
	if(document.queryCommandState("justifyright")==false)
	{
		rig.classList.remove("sost");
	}
	if(document.queryCommandState("justifycenter")==false)
	{
		cent.classList.remove("sost");
	}
	if(document.queryCommandState("justifyleft")==false)
	{
		left.classList.remove("sost");
	}
});