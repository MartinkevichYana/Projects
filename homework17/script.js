var can = document.getElementById("c");
var ctx = can.getContext("2d");
var x = 0;
var y = 0;
var a = 0;
var b = 0;
can.addEventListener("mousedown", function(e){
	x = e.clientX;
	y = e.clientY;
	can.addEventListener("mousemove", func)
})
can.addEventListener("mouseup", function(e) {
	can.removeEventListener("mousemove", func)
})
function func(e){
	ctx.beginPath();
	a = x;
	b = y;
    ctx.moveTo(a,b);
	ctx.lineTo(e.clientX,e.clientY);
	ctx.stroke();
	x = e.clientX;
	y = e.clientY;
}
window.onunload = function() {
	data = ctx.getImageData(0,0, 1000, 500).data;
 	localStorage.img = data;
}

if(localStorage.img)
{
	var x = new Uint8ClampedArray(2000000);
	var data = localStorage.img.split(',');
	for(var i=0; i< data.length; i++)
	{
		x[i] = data[i];
	}
	var b = new ImageData(x, 1000, 500);
	ctx.putImageData(b, 0, 0);
	console.log(b);
}