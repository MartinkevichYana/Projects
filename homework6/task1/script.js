var but1=document.getElementById('but1');
var but2=document.getElementById('but2');

var alf=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','?',',','_','-','!'];
var alen=alf.length;
var key=7;
var k=alen-key;

but1.addEventListener("click", function() {

	var inp=document.getElementById('inp1').value;
	var str=[];
	for(var i=0;i<inp.length;i++)
	{
		if(typeof(Number(inp[i]))=='number')
			str.push(inp[i]);
		for(var j=0;j<alen;j++)
		{
			if(inp[i]==alf[j])
			{
				if(j>=k)
					str[i]=alf[j-k];
				else
					str[i]=alf[j+key];
			}
		}
	}
	str=str.join('');
	document.getElementById('inp2').value=str;
	document.getElementById('inp1').value=null;
});


but2.addEventListener("click", function() {

	var inp=document.getElementById('inp2').value;
	var str=[];
	for(var i=0;i<inp.length;i++)
	{
		if(typeof(Number(inp[i]))=='number')
		{
			str.push(inp[i]);
		}
		for(var j=0;j<alen;j++)
		{
			if(inp[i]==alf[j])
			{
				if(j<key)
					str[i]=alf[alen+j-key];
				else
					str[i]=alf[j-key];
			}
		}
	}
	str=str.join('');
	document.getElementById('inp1').value=str;
	document.getElementById('inp2').value=null;
});