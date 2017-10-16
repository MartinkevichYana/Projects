var cn=['Австрия', 'Беларусь', 'Россия', 'Украина', 'Польша', 'Латвия', 'Пакистан', 'Китай', 'Франция', 'Италия', 'Ирак', 'Мальта'];
var kol=["Страна", "Картинка", "Код", "Население(млн)"];
var img =["<img src='image/1.gif'>","<img src='image/2.gif'>","<img src='image/3.png'>","<img src='image/4.gif'>","<img src='image/5.jpg'>","<img src='image/6.gif'>","<img src='image/7.png'>","<img src='image/7.jpg'>","<img src='image/8.png'>","<img src='image/9.gif'>","<img src='image/10.png'>","<img src='image/11.jpg'>"];
var phone=[43, 375, 7, 380, 48, 371, 92, 86, 33, 39, 964, 356];
var pop=['8,747', '9,507', '144,3', '45', '37,95', '1,96', '193,2', '1379', '66,9', '60,6', '37,2', '0,437'];

var table="<table ><tr>";
for(var i=0;i<4;i++)
{
	table+="<td id=a>"+kol[i]+"</td>";
}

for (var i = 0; i < 12; i++) {
	table+="</tr><tr>";
	for(var j=0;j<4;j++)
	{
        table += '<td></td>';
	}
 }
table+="</tr></table>";

document.write(table);

var len=document.getElementsByTagName('td').length;

//страны
for (var i = 4; i < len;  ) 
{
	for(var j=0;j<cn.length;j++)
	{
		document.getElementsByTagName('td')[i].innerHTML = cn[j];
		i+=4
	}
}

//картинки
for (var i = 5; i < len;  ) 
{
	for(var j=0;j<cn.length;j++)
	{
		document.getElementsByTagName('td')[i].innerHTML = img[j];
		i+=4
	}
}

//код
for (var i = 6; i < len;  ) 
{
	for(var j=0;j<cn.length;j++)
	{
		document.getElementsByTagName('td')[i].innerHTML = phone[j];
		i+=4
	}
}

//население
for (var i = 7; i < len;  ) 
{
	for(var j=0;j<cn.length;j++)
	{
		document.getElementsByTagName('td')[i].innerHTML = pop[j];
		i+=4
	}
}