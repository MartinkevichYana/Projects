var names=['Ann','Vlad','Vova','Ivan','Natasha', 'Lena'];
var city=['Minsk','Brest', 'Grodno','Mogilev','Borisov','Kobrin'];
var price=500;
var i=0;
var h=130;

var elem = document.body;

var id=setTimeout(function time() {
	
	var pers=names[Math.round(Math.random()*(names.length-1))];
	var cit=city[Math.round(Math.random()*(city.length-1))];
	var N=Math.round(Math.random()*50);
	var div = document.createElement('div');
    div.id = 'a';
    div.innerHTML = "<button id='but' type='button'>x</button>"+pers+' from the city of '+cit+' bought '+N+' goods worth a total of '+(N*price);
    elem.appendChild(div);
    var w=document.getElementById('a');
	w.style.bottom= h*i + 'px';
	div.removeAttribute('id');
	id = setTimeout(time, 3000);
	i++;
	var but=div.children[0];
	but.addEventListener("click", function() {
		this.parentNode.remove();
	});
	if(h*i>600)
		i=0;

}, 3000);