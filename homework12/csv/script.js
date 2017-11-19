var d=document.getElementById("d");
var p=document.getElementsByTagName("p")[0];
var ul=document.getElementsByTagName("ul")[0];
var k=0;
var num=0;
var pr=0;
var xhr = new XMLHttpRequest();
xhr.open("GET", "c.csv", true);

xhr.onload = function() {
	console.log(this.responseText);
	var n = this.responseText.split('\r\n');	
	var key = n[0].split(', ');
	var data=[];
	for(var i=0; i<n.length-1;i++)
	{
		var o={};
		for(var j=0; j<key.length;j++)
		{
			Object.defineProperty(o, key[j],{
				value:n[i+1].split(', ')[j]
			});
		}
		data.push(o);
	}
	//console.log(data);
	
	
	ul.innerHTML = "";
	data.forEach(function(item) {
			ul.innerHTML += "<li><h3>" + item.name + "</h3><p>" + item.price+"</p><p>"+item.country+"</p><button class='pl'>+</button><span class='s'>1</span>\
			<button class='min'>-</button><button class='cart'>in cart</button></li>"; 
	});
	for(var i=0;i<data.length;i++)
	{

		(function(x){
			var butp = document.getElementsByClassName("pl")[i];
			var butm = document.getElementsByClassName("min")[i];
			var cart = document.getElementsByClassName("cart")[i];
			var span = document.getElementsByClassName("s")[i];
			k++;
			butp.addEventListener("click", function() {
				
				var item = Number(span.innerHTML);
				span.innerHTML = item+1;
			});
			butm.addEventListener("click", function() {
				var item = Number(span.innerHTML);
				span.innerHTML = item-1;
			});
			cart.addEventListener("click", function() {
				var item = Number(span.innerHTML);
				num += item;
				pr += item*Number(data[x].price);
				p.innerHTML = "Number: "+num + "Price: " + pr;
			});
		})(i)
			
	}
	console.log(data);
}

xhr.send(null);
