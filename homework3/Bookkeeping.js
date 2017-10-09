var buk={
	worker: [
	{
		name: "Anna",
		age: 23,
		dept: "a",
		sal: 2000,
		stand: 2,
		say: function() {
			console.log(this.name+" "+this.age+" "+this.dept+" "+this.sal+" "+this.stand);
		}
	}, 
	{
		name: "Boris",
		age: 25,
		dept: "a",
		sal: 1000,
		stand: 5,
		say: function() {
			console.log(this.name+" "+this.age+" "+this.dept+" "+this.sal+" "+this.stand);
		}
	},
	{
		name: "Vlad",
		age: 25,
		dept: "c",
		sal: 3000,
		stand: 10,
		say: function() {
			console.log(this.name+" "+this.age+" "+this.dept+" "+this.sal+" "+this.stand);
		}
	}
	]
};

var len=buk.worker.length;

// a)

buk.Add=function(elem) {
	if(typeof(elem)=="string")
	{
		for(var i=0;i<len;i++)
		{
			if(buk.worker[i].name == elem)
				buk.worker.splice(i,1);
		}
	}
	if (typeof(elem)=="object")
	{
		buk.worker[len]=elem;
	}
};
//var a={name: "Alex"};
//buk.Add(a);

// b)

buk.SalarySort=function() {
	buk.worker.sort(function(a,b) {
		return a.sal > b.sal ? 1:-1;
	});
}

buk.SalarySort();

for(var i=0;i<len;i++)
{
	buk.worker[i].say();
}

buk.SalarySum=function() {

		var sum=buk.worker.reduce(function(prev, curr) {
			return prev+curr.sal;
		},0);
		return sum;
	
}

alert(buk.SalarySum());

// c)

buk.SalaryMaxMin=function() {
	var arr=[];
	buk.worker.forEach(function(elem) {
		arr.push(elem.sal);
	});
	var max = Math.max.apply(null, arr);
	var min = Math.min.apply(null, arr);
	var k=arr.indexOf(max);
	var s=arr.indexOf(min);
	console.log("Worker with max salary: ");
	buk.worker[k].say();
	console.log("Worker with min salary: ");
	buk.worker[s].say();
	var average=buk.SalarySum()/len;
	console.log("The average salary is: "+average);
}

buk.SalaryMaxMin();

// d)

buk.Depart=function() {
	var dep=[];
	var sal=[];
	var a1=[], a2=[], a3=[];
	buk.worker.forEach(function(elem) {
		sal.push(elem.sal);
	});
	buk.worker.forEach(function(elem) {
		dep.push(elem.dept);
	});
	alert(dep);
	var sum1=0;
	var sum2=0;
	var sum3=0;
	for(var i=0;i<len;i++)
	{
		if((dep[0]==dep[i])&&(i!=0))
		{
			a1.push(sal[i]);
		}
		if((dep[1]==dep[i])&&(i!=1))
		{
			a2.push(sal[i]);
		}
		if((dep[2]==dep[i])&&(i!=2))
		{
			a3.push(sal[i]);
		}
	}
	for(var i=0;i<a1.length;i++)
	{
		sum1+=a1[i];
		alert("Sum of department "+dep[0]+" is "+sum1);
	}
	for(var i=0;i<a2.length;i++)
	{
		sum2+=a2[i];
		alert("Sum of department "+dep[1]+" is "+sum2);
	}
	for(var i=0;i<a3.length;i++)
	{
		sum3+=a3[i];
		alert("Sum of department "+dep[2]+" is "+sum3);
	}
	var c=0;
	if(a1.length!=0)
		c++;
	if(a2.length!=0)
		c++;
	if(a3.length!=0)
		c++;
	var sum=(sum1+sum2+sum3)/c;
	alert("Average salary is: "+sum);
	alert("The number of workers is: "+c);


}

buk.Depart(); 
