var hor=document.getElementById("hours");
var min=document.getElementById("minutes");
var sec=document.getElementById("seconds");

var id=setInterval(function() {

	var d=new Date();
	var hours=23-d.getHours();
	var minutes=59-d.getMinutes();
	var seconds=59-d.getSeconds();

	if(hours<10)
		hours="0"+hours;
	if(minutes<10) 
		minutes="0"+minutes;
	if(seconds<10)
		seconds="0"+seconds;
	hor.innerHTML=hours;
	min.innerHTML=minutes;
	sec.innerHTML=seconds;

},500);

setInterval(function() {

    document.getElementById("dot1").style.color = "dimgray";
    document.getElementById("dot2").style.color = "dimgray";

}, 500);
setInterval(function() {

    document.getElementById("dot1").style.color = "silver";
    document.getElementById("dot2").style.color = "silver";

}, 1000);