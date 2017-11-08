var g=0;

function Goods(n, t, pr, d) {
	this.id=g;
	g++;
	this.name=n;
	this.type=t;
	this.price=pr;
	this.date=d;
}

function FoodPr(n, t, pr, d) {
	this.id=g;
	g++;
	this.name=n;
	this.type=t;
	this.price=pr;
	this.date=d;
}
FoodPr.prototype = new Goods();

FoodPr.prototype.exp = 0;

Object.defineProperty(FoodPr, "shelf", {
	value: 35,
	writable: false
});

function Shop(n, ad, mar, ngood, nam, t, pr) {

	this.name=n;
	this.adress=ad;
	this.markup=mar;
	this.income=0;
	this.goods= [];
	for(var i=0; i<ngood; i++)
	{
		this.goods[i]= new Goods(nam, t, pr, new Date());
	}
}

Shop.prototype.Sum = function() {

	var s=0;
	for(var i=0; i < this.goods.length; i++)
	{
		s += this.goods[i].price;
	}
	return s;
}

Shop.prototype.Add = function(t, n) {
	var len = this.goods.length;
	for(var i=len; i < (n+len); i++)
	{
		this.goods[i]= new Goods(1, t, i, new Date());
	}
}

Shop.prototype.WriteOff = function(t, n) {

	var c=0;
	var len = this.goods.length;
	for(var i=0; i < len; i++)
	{
		if(c != n)
		{
			if(this.goods[i].type == t)
			{
				this.goods.splice(i,1);
				c++;
				i--;
			}
		}
	}
}

Shop.prototype.Sell = function(t, n) {
	var c=0;
	var len = this.goods.length;
	for(var i=0; i < len; i++)
	{
		if(c != n)
		{
			if(this.goods[i].type == t)
			{
				this.income += this.goods[i].price + Math.round((this.markup*this.goods[i].price)/100);
				this.goods.splice(i,1);
				c++;
				i--;
			}
		}
	}
}

Shop.prototype.Display = function() {
	console.log("Name: " + this.name + ";  Adress: " + this.adress + ";  Markup: " + this.markup + ";  Income: " + this.income + ";  Goods: ");
	for(var i=0; i < this.goods.length; i++)
	{
		console.log((i+1)+") Id: "+this.goods[i].id +"; Name: "+ this.goods[i].name +"; Type: "+ this.goods[i].type +"; Price: "+ this.goods[i].price +"; Date: "+ this.goods[i].date.getDate() +"." + (this.goods[i].date.getMonth()+1) +"." + this.goods[i].date.getFullYear());
	}
}

function Market() {};
Market.prototype.Output = function(ashop) {
	for(var i=0; i<ashop.length; i++)
	{
		console.log((i+1)+") "+ashop[i].name);
	}
}

Market.prototype.Statistic = function(ashop) {

	ashop.sort(compare);
	var str = ashop.join(" ");
	console.log(str);
}

function compare(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}

var butAS = document.getElementsByTagName("button")[0];
var butCS = document.getElementsByTagName("button")[4];
var addb = document.getElementsByTagName("button")[1];
var writeOff = document.getElementsByTagName("button")[2];
var sell = document.getElementsByTagName("button")[3];
var inp = document.getElementsByTagName("input");
var divG = document.getElementById("goods");
var div = document.getElementsByTagName("div")[0];
var clS = document.getElementsByClassName("s");
var clG = document.getElementsByClassName("g");
var clGa = document.getElementsByClassName("ga");
var res = document.getElementById("res");
var cS=0;
var cG = 0;
var shop;
var good=0;
var arrShop=[];
butAS.addEventListener("click", function() {
	if( cS==0)
	{
		for(var i=0; i<clS.length; i++)
		{
			clS[i].style.display = "block";
		}
	}
	cS++;
	addb.addEventListener("click", function() {
	for(var i=0; i<clGa.length; i++)
	{
		clGa[i].style.display = "block";
	}
});
});

butCS.addEventListener("click", function() {

	shop = new Shop(inp[0].value, inp[1].value, inp[2].value, inp[3].value, inp[4].value, inp[5].value, inp[6].value);
	shop.Add(inp[7].value, inp[8].value);
	arrShop.push(shop.name);
	for(var i=0; i<clS.length; i++)
	{
		clS[i].style.display = "";
	}
	for(var i=0; i<clG.length; i++)
	{
		clG[i].style.display = "block";
	}
	cS--;
	cG++;
    shop.Display();
});



res.addEventListener("click", function() {
	alert(arrShop);
});



/*var shop = new Shop("A","Minsk",33, 4);
var shop1 = new Shop("B","Mogilev",25, 7);
var shop2 = new Shop("C","Brest",10, 5);
//alert(shop.income);
shop.Add("fruits", 4);
//alert(shop.income);
shop.Sell("fruits", 2);
//alert(shop.income);
shop.Display();
var arrShop = [];
var arrShopInc = [];
arrShop.push(shop);
arrShop.push(shop1);
arrShop.push(shop2);
arrShopInc.push(shop.income);
arrShopInc.push(shop1.income);
arrShopInc.push(shop2.income);
var market = new Market();
market.Output(arrShop);
market.Statistic(arrShopInc);*/