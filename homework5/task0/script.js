var t=0;
var tx=0;
var com=0;

function func(el) {
	if(el.nodeType==1)
	{
		t++;
	}
	if(el.nodeType==3)
	{
		tx++;
	}
	if(el.nodeType==8)
	{
		com++;
	}
	if(el.hasChildNodes())
	{
		for (var i = 0; i < el.childNodes.length; i++)
		{
			func(el.childNodes[i]);
		}
	}
}

var el=document.getElementsByTagName('html')[0];
func(el);

alert("teg "+t);
alert("text "+tx);
alert("comment "+com);