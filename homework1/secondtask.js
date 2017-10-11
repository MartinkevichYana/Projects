var n=prompt("Enter N");
n=Number(n);
var x=prompt("Enter x");
x=Number(x);
var eps=0.0000001
var s=1;
var arcs=x;

n=Number(n);
x=Number(x);

function fact(n) {
	if(n<0) {
		return 0;
	}
	else if(n==0) {
		return 1;
	}
	else {
		return n*fact(n-1);
	}

}

function arcsn() {
	while(s>eps)
	{
		s=(fact(2*n)/((Math.pow(4,n))*(Math.pow(fact(n),2))*(2*n+1)))*Math.pow(x,2*n+1);
		arcs=arcs+s;
		n++;
	}
	return arcs;
}

if(fact(n)){
	alert(arcsn());
}
else {
	alert("You have entered negative n!");
}