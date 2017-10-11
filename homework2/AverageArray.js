var N=prompt("Enter the N>0: ");
var s1=prompt("Enter the s: ");
var p=prompt("Enter the p in %: ");

var arr = new Array(N);
var s2=(p*s1+s1*100)/100;

var average=0;

function ConsistArray(arr) {
	var sum=0;
	for(var i = 0; i < N-1; i++)
	{
		arr[i]=Math.floor(Math.random()*s1);
	}

	for(var i = 0; i < N-1; i++)
	{
		sum+=arr[i];
	}
	arr[N-1]=Math.floor(s2*N-sum);
	return arr;
}

function Simile(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}

if(N>0 && (p>0 && p<101))
{
	var array=ConsistArray(arr);
	alert("Source Array: "+array);

	array=array.sort(Simile);
	alert("Sort Array: "+array);

	for(var i=0;i<N;i++)
	{
		average+=array[i];
	}

	average=(average/N).toFixed(3);

	alert("Average of sort Array: "+average);
}
else {
	alert("You have entered wrong number!");
}