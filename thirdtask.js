var a=prompt("Enter the number");
var op=prompt("Enter the operation");
var b=prompt("Enter another number");
var res;

a=Number(a);
b=Number(b);

if(a && b) {

	switch (op) {
	case "+":
	res=a+b;
	break;
	case "-":
	res=a-b;
	break;
	case "/":
	res=a/b;
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

	if(res!=undefined){
		alert("Answer is " + res);
	}
}

else 
{
	alert("You have not entered the number");
}