var d = document.getElementById("d");
var c=1;
var col = ["#DC143C", "#008080", "#FF69B4", "#00FFFF", "#0000CD", "#008080"];
var xhr = new XMLHttpRequest();
xhr.open("GET", "j.json", true);

xhr.onload = function() {
	console.log(this.responseText);
	var data = JSON.parse(this.responseText);
	for(var i=0;;i++)
	{
		if(d.clientHeight < window.innerHeight+100)
		{
			var p = document.createElement('p');
			d.appendChild(p);
			p.innerHTML += c+". "+data[i%data.length].name + "   "+data[i%data.length].price + "   "+data[i%data.length].country;
			c++;
	   	}
	    else
	   	 	break;
	}
	var inH = window.innerHeight;
	window.addEventListener("scroll", function() {

		if(d.getBoundingClientRect().bottom < inH)
		{
			for(var i=0;i<6;i++)
		    {
				var h3 = document.createElement('h3');
				d.appendChild(h3);
				h3.innerHTML += c+". " + data[i%data.length].name + "   " +data[i%data.length].price + "   "+data[i%data.length].country;
				c++;
				h3.style.color = String(col[i]);
			}
		}
	});
}

xhr.send(null);
