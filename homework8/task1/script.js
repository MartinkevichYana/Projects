var c=[
{
	tittle: "Hi",
	action: function() {
		alert("Hi!");
	}
},
{
	tittle: "How are you?",
	action: function() {
		alert("I am fine!");
	}
},
{
	tittle: "Bye",
	action: function() {
		alert("Bye!");
	}
}
];

var k=0;
var div=document.getElementsByTagName('div')[0];
var st=window.getComputedStyle(div);
var ul=document.createElement('ul');
div.appendChild(ul);

for(var i=0; i<c.length; i++)
{
	var li=document.createElement('li');
	li.innerHTML=c[i].tittle;
	var hr=document.createElement('hr');
	liListener(li, i);
	ul.appendChild(li);
	ul.insertBefore(hr, li.nextSibling);
}

function liListener(el, i) {
	el.addEventListener("click", function() {
		c[i].action();
	});
}

document.addEventListener("contextmenu", function(e) {
	while(k==0)
	{
		if(k==0)
		{
			div.classList.add("active");
			k=1;
		}
		else
			div.classList.remove("active");
	}
	
	var x=e.clientX;
	var y=e.clientY;

	var dWid = div.clientWidth + 10;
    var dHei = div.clientHeight + 10;

    var wWid = window.innerWidth;
    var wHei = window.innerHeight;

    if ( (wWid - x) < dWid ) 
      div.style.left = 10 + x - dWid + "px";
    else 
      div.style.left = x + "px";

    if ( (wHei - y) < dHei ) 
      div.style.top = 10 + y - dHei + "px";
    else 
      div.style.top = y + "px";
    e.preventDefault();
});

document.addEventListener("click", function(e) {
	div.classList.remove("active");
	k=0;
});
