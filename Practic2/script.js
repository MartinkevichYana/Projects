var inp=document.getElementsByTagName("input");
var d=document.getElementsByTagName("div");
var lab=document.getElementsByTagName("label");
var ptag = document.getElementsByTagName("p")[0];
var k=0;
var num=0;
var pr=0;
var ccart = [];
var ind = [];

var xhr = new XMLHttpRequest();
xhr.open("GET", "j.json", true);

xhr.onload = function() {
	console.log(this.responseText);
	var data = JSON.parse(this.responseText);
	var a=document.createElement("a");
	a.setAttribute("href","#nikak");
	a.innerHTML = "Корзина";
	lab[3].appendChild(a);
	var sett={"#nikak":""};
	for(var j=0; j<data.length;j++)
	{
		Object.defineProperty(sett, data[j].hash,{
			value: data[j].adr
		});
	}
	console.log(sett);
	for(var i=0; i<data.length;i++)
	{
		var a=document.createElement("a");
		a.setAttribute("href", data[i].hash);
		a.innerHTML = data[i].tittle;
		lab[i].appendChild(a);
	}
	// HASH 
	var change = function() {

		var path = sett[location.hash];
	
		if(location.hash == "#nikak")
		{
			// Cart 
			for(var i=0; i<data.length; i++)
			{
				lab[i].children[0].style.borderBottom = "";
				lab[i].children[0].style.background = "";
				lab[i].children[0].style.color = "";
				lab[i].children[0].style.textShadow = "";
			}	
			d[1].innerHTML="";
			var p=document.createElement("p");
			p.style.fontSize = "18px";
			d[1].appendChild(p);
			var pt=document.createElement("p");
			pt.style.textAlign="right";
			pt.innerHTML = "Итого: <span id='i'>" + pr + " BYN</span>";
			p.innerHTML = "Содержимое вашей корзины: "+num+" товар(ов)";
			if(num != 0)
			{
				var tabl=document.createElement("table");
				tabl.setAttribute("cellspacing","1");
				d[1].appendChild(tabl);
				var tr = document.createElement("tr");
				tabl.appendChild(tr);
				var th1 = document.createElement("th");
				tr.appendChild(th1);
				th1.innerHTML = "Товар";
				var th6 = document.createElement("th");
				tr.appendChild(th6);
				th6.innerHTML = "Описание";
				var th2 = document.createElement("th");
				tr.appendChild(th2);
				th2.innerHTML = "Цвет";
				var th3 = document.createElement("th");
				tr.appendChild(th3);
				th3.innerHTML = "Кол-во";
				var th4 = document.createElement("th");
				tr.appendChild(th4);
				th4.innerHTML = "Цена";
				var th5 = document.createElement("th");
				tr.appendChild(th5);
				th5.innerHTML = "Сумма";
				for(var i=0; i < ccart.length; i++)
				{
					tabl.innerHTML += "<tr><td><img src="+ccart[i].i+"><p><b>"+ccart[i].n+"</b></p></td><td style='width: 90px'>"+ccart[i].des+"</td><td><img src="+ccart[i].color+" class='colors'></td><td>"+"<button class='pl'>+</button>\
					<span class='s'>"+ccart[i].item+"</span><button class='min'>-</button>"+"</td><td>"+ccart[i].p+"</td><td class='sum'>"+Number(ccart[i].item)*Number(ccart[i].p)+"</td></tr>";
				}

				for(var i=0; i < ccart.length; i++)
				{
					(function(x){
					var butp = document.getElementsByClassName("pl")[i];
					var butm = document.getElementsByClassName("min")[i];
					var span = document.getElementsByClassName("s")[i];
					var td = document.getElementsByClassName("sum")[i];
					var it = document.getElementById("i");
					butp.addEventListener("click", function() {				
						var item = Number(span.innerHTML);
						span.innerHTML = item+1;
						num += item;
						var s= Number(td.innerHTML);
						td.innerHTML = s+Number(ccart[x].p);
						pr += Number(ccart[x].p);
						pt.innerHTML = "Итого: <span id='i'>" + pr + " BYN</span>";
					});
					butm.addEventListener("click", function() {
						var s= Number(td.innerHTML);
						if(s > 0)
						{
							var item = Number(span.innerHTML);
							span.innerHTML = item-1;
							td.innerHTML = s-Number(ccart[x].p);
							num -= item;
							pr -= Number(ccart[x].p);
							pt.innerHTML = "Итого: <span id='i'>" + pr + " BYN</span>";
						}
					});
				})(i)
				}
			}			
			d[1].appendChild(pt);
			return;
		}
		var p=0;
		var xhr = new XMLHttpRequest();
		xhr.open("GET", path, true);
		for(var i=0; i<data.length;i++)
		{
			if(data[i].adr == path)
			{
				p=i;
				break;
			}
		}
		var xhr = new XMLHttpRequest();
		xhr.open("GET", data[p].adr, true);
		var gp = 0;
		xhr.onload = function() {
			style(p);
			var good = JSON.parse(this.responseText);
			var span = document.createElement("span");
			d[1].innerHTML="";
			var tabl=document.createElement("table");
			tabl.setAttribute('id','tab');
			d[1].appendChild(tabl);

			for(var i=0; i<good.length; i++)
			{
				good[i].image = good[i].colim[0];
				good[i].price = good[i].colp[0];
				span.innerHTML = "";
				for(var j=0; j<good[i].col.length; j++)
				{
					span.innerHTML += "<p><button class='b"+j+"'><img src="+good[i].col[j]+" class='colors'>"+good[i].coln[j]+"</button></p>";
				}
				tabl.innerHTML += "<tr><td class='td'><img src="+good[i].image+" class='im'></td><td>"+good[i].descr+span.innerHTML+"</td><td><button class='pl'>+</button><span class='s'>1</span>\
			    <button class='min'>-</button><button class='cart'>В <img src='c2.png' class='car'></button></td></tr>\
				<tr><td><h3>"+good[i].name+"</h3><h4 class='price'>"+good[i].price+" BYN</h4></td></tr>";
			}
			for(var i=0; i<good.length; i++){
				(function(x){
					var onebut = document.getElementsByClassName("b0")[i];
					var twobut = document.getElementsByClassName("b1")[i];
					var thbut = document.getElementsByClassName("b2")[i];
					var butp = document.getElementsByClassName("pl")[i];
					var butm = document.getElementsByClassName("min")[i];
					var cart = document.getElementsByClassName("cart")[i];
					var span = document.getElementsByClassName("s")[i];
					var td = document.getElementsByClassName("td")[i];
					var ph = document.getElementsByClassName("price")[i];
					
					onebut.addEventListener("click", function(){
						td.innerHTML = "<img src="+good[x].colim[0]+" class='im'>";
						good[x].image = good[x].colim[0];
						ph.innerHTML = "<h4 class='price'>"+good[x].colp[0]+" BYN</h4>";
						good[x].price = good[x].colp[0];
					});
					twobut.addEventListener("click", function(){
						td.innerHTML = "<img src="+good[x].colim[1]+" class='im'>";
						good[x].image = good[x].colim[1];
						ph.innerHTML = "<h4 class='price'>"+good[x].colp[1]+" BYN</h4>";
						good[x].price = good[x].colp[1];
					});
					thbut.addEventListener("click", function(){
						td.innerHTML = "<img src="+good[x].colim[2]+" class='im'>";
						good[x].image = good[x].colim[2];
						ph.innerHTML = "<h4 class='price'>"+good[x].colp[2]+" BYN</h4>";
						good[x].price = good[x].colp[2];
					});
					butp.addEventListener("click", function() {
						var item = Number(span.innerHTML);
						span.innerHTML = item+1;
					});
					butm.addEventListener("click", function() {
						var item = Number(span.innerHTML);
						span.innerHTML = item-1;
					});
					cart.addEventListener("click", function() {
						var g = {};
						var item = Number(span.innerHTML);
						g.item = item;
						num += item;
						pr += item*Number(good[x].price);
						ptag.innerHTML = "Number: "+num + "  Price: " + pr;
						Object.defineProperty(g, "n",{
							value: good[x].name
						});
						Object.defineProperty(g, "p",{
							value: good[x].price
						});
						Object.defineProperty(g, "des",{
							value: good[x].descr
						});
						Object.defineProperty(g, "i",{
							value: good[x].image
						});
						function color() {
							for(var i=0; i<good[x].colim.length; i++)
							{
								if(good[x].image == good[x].colim[i])
								{
									return good[x].col[i];
								}
							}
						}
						Object.defineProperty(g, "color",{
							value: color()
						});
						var cimg = [];
						for(var j=0; j<ccart.length; j++)
						{
							cimg.push(ccart[j].i);
						}
						cimg.push(good[x].image);
						var k=cimg.length;
						function unique(arr) {
  							var obj = {};
  							for (var i = 0; i < arr.length; i++) {
    							var str = arr[i];
    							obj[str] = true;
  							}
 							return Object.keys(obj);
						}
						cimg = unique(cimg);
						if(k == cimg.length)
						{
							ccart.push(g);
						}
						if(ccart.length == 0)
						{
							ccart.push(g);
						}
						ind.push(x);
						var q = -1;
						for(var i=0; i<ind.length-1; i++)
						{
							if(ind[i]==x)								
								q=i;
						}
						if(q != (-1))
						{
							var r = ind[q];
							ccart[r].item = Number(ccart[r].item)+1;
						}
					});
				})(i)
			}
		}

		xhr.send(null);
	}

	window.onhashchange = function() {
		change();
	}
	if(location.hash in sett) {
		change();
	}
	function style(p) {
		lab[p%3].children[0].style.borderBottom = "2px solid #F5F5DC";
		lab[(p+1)%3].children[0].style.borderBottom = "";
		lab[(p+2)%3].children[0].style.borderBottom = "";
		lab[p%3].children[0].style.background = "#F5F5DC";
		lab[(p+1)%3].children[0].style.background = "";
		lab[(p+2)%3].children[0].style.background = "";
		lab[p%3].children[0].style.color = "black";
		lab[(p+1)%3].children[0].style.color = "";
		lab[(p+2)%3].children[0].style.color = "";
		lab[p%3].children[0].style.textShadow = "4px 4px 0 rgba(0,0,0,.1)";
		lab[(p+1)%3].children[0].style.textShadow = "";
		lab[(p+2)%3].children[0].style.textShadow = "";
	}
}

xhr.send(null);
