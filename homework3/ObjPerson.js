var arname=[];
var arcity=[];
var arage=[];
var arr=[];
var N=prompt("Enter the N: ");
var M=prompt("Enter the M: ");

for(var i=0;i<N;i++)
{
	arname[i]=prompt("Enter the name: ");
	arage[i]=Math.round(Math.random()*(100-10)+10);
}

for(var i=0;i<M;i++)
{
	arcity[i]=prompt("Enter the city: ");
}

if(N>M)
{
	for(var i=M;i<N;i++) {
		arcity[i]=arcity[0];
	}
}

for(var i=0;i<N;i++)
{
	arr[i]={
	name: arname[i],
	age: arage[i],
	city: arcity[i],
    say: function() {
		alert(this.name+" "+this.city+" "+this.age);
	}
};
}

function Compare(a, b) {
  return a.age>b.age ? -1:1;
}

arr.sort(Compare);

for(var i=0;i<N;i++)
{
	arr[i].say();
}