var a=prompt("Enter the number");
var op=prompt("Enter the operation");
var b=prompt("Enter another number");
var res;

a=Number(a);
b=Number(b);



switch (op) {
	case "+":
	res=a+b;
	break;
	case "-":
	res=a-b;
	break;
    case "/":
    if(b)
    {
    	res=a/b;
    }
    else
    {
    	alert("You can not divide it by zero");
    }
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

if(res!=undefined)
{
	alert("Answer is " + res);
}