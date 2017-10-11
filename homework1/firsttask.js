var expr=prompt("Enter the expression");
var len=expr.length, t=0;

for(var i=0;i<len;i++)
{
	if(t==-1)
		break;
	else if(expr[i]=="(")
		t=t+1;
	else if(expr[i]==")")
		t=t-1;
}

if(t==0)
{
	alert("Brackets are placed correctly");
}
else
{
    alert("Brackets are placed incorrectly");
}
