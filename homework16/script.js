var pl = document.getElementsByTagName("button")[0];
var st = document.getElementsByTagName("button")[1];
var r1 = document.getElementsByTagName("button")[2];
var r2 = document.getElementsByTagName("button")[3];
var repl = document.getElementsByTagName("button")[4];
var inp = document.getElementsByTagName("input")[0];
var d1 = document.getElementsByTagName("div")[0];
var div = document.getElementsByTagName("div")[1];
var d = document.getElementsByTagName("div")[2];
var aud = document.getElementsByTagName("div")[3];
var ptag = document.getElementsByTagName("p")[0];
var sp1 = document.getElementsByTagName("span")[0];
var sp = document.getElementsByTagName("span")[1];
var sp2 = document.getElementsByTagName("span")[2];
var id = 0;
var count = 0;
var c = 0;
var k=10;
var t = 0;
var xhr = new XMLHttpRequest();
xhr.open("GET", "j.json", true);

xhr.onload = function() {
	console.log(this.responseText);
	var mus = JSON.parse(this.responseText);
	ptag.innerHTML = "<img src=" + mus[0].alb + " class='alb'><span id='sp'>" + mus[0].name + "</span>";
	d1.innerHTML = "<audio src=" + mus[0].adr + " id='song'></audio>";
	var s = document.getElementById('song');
	s.volume = 0;
	c=1;
	count=1;
	f(s);
	for(var i=0; i<mus.length; i++)
	{
		aud.innerHTML += "<p><audio src=" + mus[i].adr + "></audio><button class='play'><img src='pl.png'></button><span>" + mus[i].name + "</span></p>";
	}
	for(var i=0;i<mus.length;i++)
	{
		(function(x){

			var butpl = document.getElementsByClassName("play");
			butpl[i].addEventListener("click", function() {
				ptag.innerHTML = "<img src=" + mus[x].alb + " class='alb'><span id='sp'>" + mus[x].name + "</span>";
				d1.innerHTML = "<audio src=" + mus[x].adr + " id='song'></audio>";
				var s = document.getElementById('song');
				s.volume = 0;
				s.addEventListener("ended", function() {
					var event = new Event("click");
					butpl[(x+1)%3].dispatchEvent(event);
				})
				if(k!= x)
				{
					c=0;
					count=0;
					clearInterval(id);					
					s.volume = inp.value;
					if(t==1)
					{
						s.loop = true;
					}
					else
					{
						s.loop = false;
					}
				}
				k=x;
				s.addEventListener("loadedmetadata", function() {
					var s = document.getElementById('song');
					id = setInterval(function() {
					var sec = s.currentTime;
					var len = s.duration;
					inmin(sec, sp1);
					sp.innerHTML = "/";
					inmin(len, sp2);
					var b = Number(div.getBoundingClientRect().width);
					var a = (b*Number(sec))/Number(len);
					d.style.width = String(a)+"px";
					})
				}, 500);	
				if(c==0)
				{
					s.play();
					clearInterval(id);
					s.volume = inp.value;
					c++;
					count++;
					pl.innerHTML = "<img src='p.png'>";
				}
				else
				{
					s.pause();
					clearInterval(id);
					c--;
					count--;
					pl.innerHTML = "<img src='pl.png'>";
				}
			});

			pl.addEventListener("click", function() {
				var s = document.getElementById('song');
				if(count==0)
				{
					s.play();
					count++;
					c++;
					pl.innerHTML = "<img src='p.png'>";
				}
				else
				{
					s.pause();
					count--;
					c--;
					pl.innerHTML = "<img src='pl.png'>";
				}
			});

			div.addEventListener("click", function(e) {
				var s = document.getElementById('song');
				var a = e.offsetX;
				var len = s.duration;
				var b = Number(div.getBoundingClientRect().width);
				s.currentTime = (Number(len)*a)/b;
			});

			st.addEventListener("click", function() {
				var s = document.getElementById('song');
				s.pause();
				s.currentTime = 0;
				pl.innerHTML = "<img src='pl.png'>";
				count=0;
			});

			r1.addEventListener("click", function() {
				var s = document.getElementById('song');
				s.playbackRate *= 0.8;
			});

			r2.addEventListener("click", function() {
				var s = document.getElementById('song');
				s.playbackRate *= 1.25;
			});

			repl.addEventListener("click", function() {
				var s = document.getElementById('song');
				if(t==0)
				{
					s.loop = true;
					t++;
					repl.innerHTML = "<img src='r2.png'>";
				}
				else
				{
					s.loop = false;
					t--;
					repl.innerHTML = "<img src='r1.png'>";
				}
			});

			inp.addEventListener("input", function() {
				var s = document.getElementById('song');
				s.volume = inp.value;
			});
		})(i)
	}
	function f(s, x) {
				s.addEventListener("loadedmetadata", function() {
					var s = document.getElementById('song');
					id = setInterval(function() {
					var sec = s.currentTime;
					var len = s.duration;
					inmin(sec, sp1);
					sp.innerHTML = "/";
					inmin(len, sp2);
					var b = Number(div.getBoundingClientRect().width);
					var a = (b*Number(sec))/Number(len);
					d.style.width = String(a)+"px";
					})
				}, 500);	
				if(c==0)
				{
					s.play();
					clearInterval(id);
					s.volume = inp.value;
					c++;
					count++;
					pl.innerHTML = "<img src='p.png'>";
				}
				else
				{
					s.pause();
					clearInterval(id);
					c--;
					count--;
					pl.innerHTML = "<img src='pl.png'>";
				}
			}

			function inmin(sec, tag) {
				var m = Math.floor(sec/60);
				if(Math.floor(sec/60) < 10)
				{
					if(Math.ceil(sec - (60*m)) == 60)
					{ 
						min = "0"+Math.floor(sec/60 + 1);
					}
					else
					{
						min = "0"+Math.floor(sec/60);
					}
				}
				else
				{
					min = Math.floor(sec/60);
				}
				if(Math.ceil(sec - (60*m)) < 10)
				{ 
					second = "0"+Math.ceil(sec - (60*m));
				}
				else
				{
					if(Math.ceil(sec - (60*m)) == 60)
					{ 
						second = "00";
					}
					else
					{
						second = Math.ceil(sec - (60*m));
					}
				}
				
				
				tag.innerHTML = min + ":" + second;
			}
}
xhr.send(null);