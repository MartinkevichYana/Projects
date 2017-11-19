var inp=document.getElementsByTagName("input");
var d=document.getElementsByTagName("div");
var lab=document.getElementsByTagName("label");
var xhr = new XMLHttpRequest();
xhr.open("GET", "j.json", true);

xhr.onload = function() {
	console.log(this.responseText);
	var data = JSON.parse(this.responseText);
	for(var i=0; i<data.length;i++)
	{
			lab[i].innerHTML = data[i].tittle;
			inpListener(inp[i], i);

	}
	function inpListener(el, i) {
		el.addEventListener("click", function() {
			var j=0;
			lab[i%3].style.borderBottom = "2px solid #F5F5DC";
			lab[(i+1)%3].style.borderBottom = "";
			lab[(i+2)%3].style.borderBottom = "";
			lab[i%3].style.background = "#F5F5DC";
			lab[(i+1)%3].style.background = "";
			lab[(i+2)%3].style.background = "";
			lab[i%3].style.color = "black";
			lab[(i+1)%3].style.color = "";
			lab[(i+2)%3].style.color = "";
			lab[i%3].style.textShadow = "4px 4px 0 rgba(0,0,0,.1)";
			lab[(i+1)%3].style.textShadow = "";
			lab[(i+2)%3].style.textShadow = "";
	    	d[1].innerHTML = "<h3>"+data[i].item[0].tittle+"</h3><h5>"+data[i].item[0].size+"</h5><h3>"+data[i].item[1].tittle+"</h3><h5>\
	        "+data[i].item[1].size+"</h5><h3>"+data[i].item[2].tittle+"</h3><h5>"+data[i].item[2].size+"</h5>";
		});

	}
	console.log(data);
}

xhr.send(null);
