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


/*ctx.fillStyle = "rgba(200, 0, 0, 0.5)";
ctx.fillRect(20,20,220,220);
ctx.fillStyle = "rgba(0,200,0,0.5)";
ctx.fillRect(120, 120, 200, 200);
ctx.clearRect(150, 150, 40, 40);*/

/*ctx.beginPath();
ctx.arc(100,100,50,0*Math.PI,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(100,100,3,0*Math.PI,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(100,50);
ctx.lineTo(100, 60);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(50,100);
ctx.lineTo(60, 100);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(150,100);
ctx.lineTo(140, 100);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(100,150);
ctx.lineTo(100, 140);
ctx.stroke();

ctx.font="12px Tahoma";
ctx.textAlign = "center";
ctx.strokeText("12",100, 70);
ctx.translate(100,100);
ctx.rotate(Math.PI/2);
ctx.strokeText("3",3, -30);
ctx.rotate(Math.PI/2);
ctx.strokeText("6.",0, -30);
ctx.rotate(Math.PI/2);
ctx.strokeText("9.", 0, -30);*/
//ctx.strokeText("9",65, 105);
//ctx.strokeText("6",100, 140);
