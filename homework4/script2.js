var r=/[\+]?375[-| ]?[(]?(25|29|33|44)[)]?[-| ]?[1-9]\d{2}[-| ]?\d{2}[-| ]?\d{2}/;
var number=prompt("Enter the phone number: ");
if(r.test(number))
{
	console.log("It is a phone number");
}
else
{
	console.log("It is not a phone number");
}