var t=0;
var tx=0;
var com=0;

function teg(child) {
	if(child.hasChildNodes())
	{
		for (i = 0; i < child.childNodes.length; i++)
		{

			if (child.childNodes[i].nodeType == 1 )
            {
            	if (child.childNodes[i].hasChildNodes())
            	{
            		t++;
            		teg(child.childNodes[i]);
            	}
            }
		}
	}
	return t;
}

function text(child) {
	if(child.hasChildNodes())
	{
		for (i = 0; i < child.childNodes.length; i++)
		{

			if (child.childNodes[i].nodeType == 3 )
            {
            	if (child.childNodes[i].hasChildNodes())
            	{
            		tx++;
            		text(child.childNodes[i]);
            	}
            }
		}
	}
	return tx;
}

function comment(child) {
	if(child.hasChildNodes())
	{
		for (i = 0; i < child.childNodes.length; i++)
		{

			if (child.childNodes[i].nodeType == 8 )
            {
            	if (child.childNodes[i].hasChildNodes())
            	{
            		com++;
            		comment(child.childNodes[i]);
            	}
            }
		}
	}
	 return com;
}

var child=document.getElementsByTagName('html')[0];
alert("teg "+teg(child));
alert("text "+text(child));
alert("comment"+comment(child));
function comment(child) {
	if(child.hasChildNodes())
	{
		for (i = 0; i < child.childNodes.length; i++)
		{

			if (child.childNodes[i].nodeType == 8 )
            {
            	com+=child.childNodes.length;
            	if (child.childNodes[i].hasChildNodes())
            	{
            		comment(child.childNodes[i]);
            	}
            }
		}
	}
	 alert("comment " + com);
}

var child=document.getElementsByTagName('html')[0];
teg(child);
text(child);
comment(child);