var chb = document.getElementsByTagName("button")[0];
var neg = document.getElementsByTagName("button")[1];
var cr = document.getElementsByTagName("button")[2];
var d = document.getElementsByTagName("div")[0];
var can = document.getElementById('c');
var ctx = can.getContext('2d');
var img = new Image();
var img1 = new Image();
img.src = "im.jpg";
var k = 0;

can.addEventListener("dragenter", function(e) {
	this.innerText = "";
})
can.addEventListener("dragleave", function(e) {
	this.innerText = "";
})
can.addEventListener("dragover", function(e) {
	e.preventDefault();
})
can.addEventListener("drop", function(e) {
	e.preventDefault();
	var dT = e.dataTransfer;
	var fileReader = new FileReader();
	fileReader.onload = function() {
		ctx.clearRect(0, 0, 1500, 500);
		img.src = this.result;
		img1.src = this.result;	
	}
	fileReader.readAsDataURL(dT.files[0]);
})

img.onload = function() {
	ctx.drawImage(img, 0, 0);
		if(k == 1)
		{
			ctx.drawImage(img1, 0, 0);
			var idata = ctx.getImageData(0, 0, 1000, 500);
			var idataf = blwh(idata);
			ctx.putImageData(idataf, 0, 0);
		}
		if(k == 2)
		{
			ctx.drawImage(img1, 0, 0);
			var idata = ctx.getImageData(0, 0, 1000, 500);
			var idataf = negativ(idata);
			ctx.putImageData(idataf, 0, 0);
		}
		if(k == 3)
		{
			ctx.drawImage(img1, 0, 0);
			var idata = ctx.getImageData(0, 0, 1000, 500);
			var idataf = coar(idata);
			ctx.putImageData(idataf, 0, 0);
		}
}

chb.addEventListener("click", function() {
	ctx.drawImage(img, 0, 0);
	var idata = ctx.getImageData(0, 0, 1000, 500);
	var idataf = blwh(idata);
	ctx.putImageData(idataf, 0, 0);
	k=1;
});

neg.addEventListener("click", function() {
	ctx.drawImage(img, 0, 0);
	var idata = ctx.getImageData(0, 0, 1000, 500);
	var idataf = negativ(idata);
	ctx.putImageData(idataf, 0, 0);
	k=2;
});

cr.addEventListener("click", function() {
	ctx.drawImage(img, 0, 0);
	var idata = ctx.getImageData(0, 0, 1000, 500);
	var idataf = coar(idata);
	ctx.putImageData(idataf, 0, 0);
	k=3;
});

function blwh(data) {
	var px = data.data;
	for (var i=0; i < px.length; i+=4) 
	{
		var r = px[i];
		var g = px[i+1];
		var b = px[i+2];
		px[i] = (r+g+b)/3;
		px[i+1] = (r+g+b)/3; 
		px[i+2] = (r+g+b)/3;
	}
	return data;
}

function coar(data) {
	var px = data.data;
	var v = 30;
	for(var i=0; i < px.length; i+=4) 
	{
		var r = px[i];
		var g = px[i+1];
		var b = px[i+2];
		px[i] = r%v;
		px[i+1] = g%v;
		px[i+2] = b%v; 
	}
	return data;
}

function negativ(data) {
	var px = data.data;
	for (var i=0; i < px.length; i+=4) 
	{
		var r = px[i];
		var g = px[i+1];
		var b = px[i+2];
		px[i] = 255-(r+g+b);
		px[i+1] = 255-(r+g+b);
		px[i+2] = 255-(r+g+b);
	}
	return data;
}
