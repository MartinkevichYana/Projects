var ar=['a','b','c','d','e','f'];
var names=['Ann','Vlad','Vova','Ivan','Natasha', 'Lena'];
var city=['Minsk','Brest', 'Grodno','Mogilev','Borisov','Kobrin'];
var n=[3,6,1,4,8,6];
var price=500;
var i=0;
var h=130;

var elem = document.body;

var id=setTimeout(function time() {
	
	var div = document.createElement('div');
    div.id = ar[i];
    div.innerHTML = names[i]+' from the city of '+city[i]+' bought '+n[i]+' goods worth a total of '+n[i]*price;
    elem.appendChild(div);
    var w=document.getElementById(ar[i]);
	w.style.bottom= h*i + 'px';
	id = setTimeout(time, 3000);
	i++;
	if((h*i)>600)
	{
		var k=document.getElementById(ar[i-6]);
		elem.removeChild(k);
		i=0;

	}
}, 3000);
