var House={};
var flat=[];
var peop=["A","B","C","D","E","F","G","H","Z"];

for(var k=0;k<peop.length;)
{
	for(var i=0;i<3;i++)
	{
		flat[i]={};
		flat[i].square=Math.round(Math.random()*(100-40)+40);
		flat[i].floor=i;
		flat[i].people=[];
		for(var j=0;j<3;j++)
		{
			flat[i].people[j]={};
			flat[i].people[j].name=peop[k];
			k++;
			flat[i].people[j].age=Math.round(Math.random()*(100-10)+10);
			flat[i].people[j].psay=function()
			{
				alert(i+")flat. Name: "+this.name+" Age: "+this.age);
			}
		}
		flat[i].say=function() {
			alert(this.square+" "+this.floor);
		}

	}
}

House.Flat=flat;
for(var i=0;i<3;i++)
{
	for(var j=0;j<3;j++)
	{
		House.Flat[i].people[j].psay();
	}
}
// a)

House.Add=function(elem) {
	if(typeof(elem)=="string")
	{
		for(var i=0;i<House.Flat.length;i++)
		{
			for(var j=0;j<House.Flat[i].people.length;j++)
			{
				if(House.Flat[i].people[j].name == elem)
					House.Flat[i].people.splice(j,1);
				else 
					alert("In this house no such man");
			}
		}
	}
	if (typeof(elem)=="object")
	{
		var k=elem.floor;
		if((k<3) && (k>=0))
			House.Flat[k].people[3]=elem;
		else
			alert("No such flat");
		
	}
};

var obj = {};
obj.floor=2;
//House.Add(obj);
//alert(House.Flat[2].people[3].name);
// b)

House.Clean=function(n) {
	House.Flat[n].people.splice(0,House.Flat[n].people.length);
}
//House.Clean(2);
//alert(House.Flat[2].people[2].name);
// c)

House.Bills=function(sum) {
	var shouse=0;
	var arr=[], arr1=[], arr2=[], arr3=[];
	var a1=0, a2=0, a3=0;
	for(var i=0;i<House.Flat.length;i++)
		{
			shouse+=House.Flat[i].square;
		}
		// i)
	for(var i=0;i<House.Flat.length;i++)
	{
		arr[i]=Math.round((sum*House.Flat[i].square)/shouse);
	}
	//ii)
	House.Flat[0].people.forEach(function(elem) {
		if(elem.age>18)
		{
			a1++;
		}
	});
	House.Flat[1].people.forEach(function(elem) {
		if(elem.age>18)
		{
			a2++;
		}
	});
	House.Flat[2].people.forEach(function(elem) {
		if(elem.age>18)
		{
			a3++;
		}
	});
	if(a1!=0) arr1.push(a1);
	if(a2!=0) arr1.push(a2);
	if(a3!=0) arr1.push(a3);
	alert(arr1);
}

House.Bills(6000);