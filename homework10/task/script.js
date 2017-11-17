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
		console.log((i+1)+". "+ashop[i].name);
	}
}

Market.prototype.Statistic = function(ashop) {   //making

	ashop.sort(compare);
	var str = ashop.join(" ");
	console.log("Statistic: " + str);
}

function compare(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}

var c=0;
var div = document.getElementsByTagName("div")[0];
var adb = document.createElement("button");
var adgoods = document.createElement("button");
var offgoods = document.createElement("button");
var sellgoods = document.createElement("button");
var result = document.createElement("button");
var divadd = document.createElement("div");
var divoff = document.createElement("div");
var divsell = document.createElement("div");
adgoods.innerHTML = "Add Goods";
offgoods.innerHTML = "WriteOff Goods";
sellgoods.innerHTML = "Sell Goods";
result.innerHTML = "RESULT";
document.body.insertBefore(result, div.nextChild);
var add = document.createElement("div");
adb.innerHTML = "Add Shop";
div.appendChild(adb);
div.insertBefore(add, adb.nextChild);
adb.addEventListener("click", function() {
	add.innerHTML +="<input placeholder='name' class='s'><input placeholder='adress' class='s'><input placeholder='markup' class='s'><input placeholder='number of same goods' class='s'><h4>Enter the information of same goods</h4>\
	<input placeholder='name' class='s'><input placeholder='type' class='s'><input placeholder='price' class='s'>\
	<button>Add Goods</button><button>WriteOff Goods</button><button>Sell Goods</button>";
	var adgoods = document.getElementsByTagName("button")[1+c];
	var offgoods = document.getElementsByTagName("button")[2+c];
	var sellgoods = document.getElementsByTagName("button")[3+c];
	adgoods.addEventListener("click", function() {
		add.insertBefore(divadd, adgoods.nextChild);
		divadd.innerHTML += "<input placeholder='add type' class='a'><input placeholder='add number' class='a'>";
	});
	offgoods.addEventListener("click", function() {
		add.insertBefore(divoff, offgoods.nextChild);
		divoff.innerHTML += "<input placeholder='write off type' class='b'><input placeholder='write off number' class='b'>";
	});
	sellgoods.addEventListener("click", function() {
		add.insertBefore(divsell, sellgoods.nextChild);
		divsell.innerHTML += "<input placeholder='sell type' class='c'><input placeholder='sell number' class='c'>";
	});
	c+=3;
});

result.addEventListener("click", function() {
	var market = new Market();
	var outshop = [];
	var statshop = [];
	var inp = document.getElementsByClassName("s");
	var a = document.getElementsByClassName("a");
	var b = document.getElementsByClassName("b");
	var c = document.getElementsByClassName("c");
	var q = Math.floor(inp.length/7);
	for(var i=0; i<q; i++)
	{
		var shop = new Shop(inp[0+7*i].value, inp[1+7*i].value, inp[2+7*i].value, inp[3+7*i].value, inp[4+7*i].value, inp[5+7*i].value, inp[6+7*i].value);
		if(a[0+7*i] != undefined)
		{
			shop.Add(a[0+7*i].value, Number(a[1+7*i].value));
		}
	    if(b[0+7*i] != undefined)
	    {
			shop.WriteOff(b[0+7*i].value, Number(b[1+7*i].value));
		}
		if(c[0+7*i] != undefined)
		{
			shop.Sell(c[0+7*i].value, Number(c[1+7*i].value));
		}
		outshop.push(shop);
		statshop.push(shop.income);
		shop.Display();
		}
		console.log("Name of shops: ");
		market.Output(outshop);
		market.Statistic(statshop);
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