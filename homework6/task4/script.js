var res=0;
var mplus=0;
var min=0;
var reg=/([0-9]\d*)(.)([0-9]\d*)/;
var eqb=document.getElementById('eq');
var clrb=document.getElementById('clr');
var plb=document.getElementById('plusM');
var minb=document.getElementById('minM');
var mrb=document.getElementById('mr');
var mcb=document.getElementById('mc');

function add(a) {
	document.getElementById('inp').value+=a;
}

plb.addEventListener("click", function() {
	if(mplus!=0)
	{
		mplus+=Number(document.getElementById('inp').value);
		document.getElementById('inp').value=mplus;
	}
	else
		mplus=Number(document.getElementById('inp').value);
});

minb.addEventListener("click", function() {
	if(mplus==0)
	{
		document.getElementById('inp').value="You don't click M+";
	}
	else
	{
		min=mplus-Number(document.getElementById('inp').value);
		document.getElementById('inp').value=min;
	}
});
mrb.addEventListener("click", function() {
	if(min!=0)
		document.getElementById('inp').value=min;
	else
	{
		if(mplus!=0)
			document.getElementById('inp').value=mplus;
		else
			document.getElementById('inp').value="The memory is empty";
	}
});
mcb.addEventListener("click", function() {
	mplus=0;
	min=0;
});

clrb.addEventListener("click", function() {
	document.getElementById('inp').value='';
});

eqb.addEventListener("click", function() {
	var inp=document.getElementById('inp').value;
	var arnum=inp.match(reg);
	var a=Number(arnum[1]);
	var b=Number(arnum[3]);
	var op=arnum[2];

    switch (op) {
    	case "^":
    	res=Math.pow(a,b);
    	break;
    	case "+":
    	res=a+b;
	    break;
		case "-":
		res=a-b;
		break;
    	case "/":
    	if(b)
    		res=a/b;
    	else
    		alert("You can not divide it by zero");
    	break;
    	case "*":
    	res=a*b;
    	break;
    	case "%":
    	res=a%b;
    	break;
    	default:
		alert("You have not entered the operation");
	}
	document.getElementById('inp').value=res;
});