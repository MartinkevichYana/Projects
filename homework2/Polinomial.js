var arr=prompt("Enter the coefficients and x of the end though a commas: ");
arr=arr.split(",");

var pol=0;

alert(arr);

function Polinom(arr) {

	var x=arr.pop();

	for(var i=0;i<arr.length;i++) 
	{
		pol+=arr[i]*Math.pow(x,i);
	}
	
	return pol;
}

alert("The value of the polynomial is: "+Polinom(arr));