var inp=document.getElementsByTagName("input");
var d=document.getElementsByTagName("div");
var lab=document.getElementsByTagName("label");
var xhr = new XMLHttpRequest();
xhr.open("GET", "j.json", true);

xhr.onload = function() {

	var data = JSON.parse(this.responseText);
	lab[0].innerHTML = data[0].tittle;
	var xhr1 = new XMLHttpRequest();
	xhr1.onreadystatechange = function() {
       	if (this.readyState == 4 && this.status == 200) 
       	{
       		good = JSON.parse(xhr1.responseText);
       		console.log(good);
       		inpListener(0, good);
       	}
    };
    xhr1.open("GET", data[0].adr, true);
	xhr1.send();

	lab[1].innerHTML = data[1].tittle;
	var xhr2 = new XMLHttpRequest();
	xhr2.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) 
        {
        	good = JSON.parse(xhr2.responseText);
        	console.log(good);
        	inpListener(1, good);
        }
    };
    xhr2.open("GET", data[1].adr, true);
	xhr2.send();

	lab[2].innerHTML = data[2].tittle;
	var xhr3 = new XMLHttpRequest();
	xhr3.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) 
        {
        	good = JSON.parse(xhr3.responseText);
        	console.log(good);
        	inpListener(2, good);
        }
    };
    xhr3.open("GET", data[2].adr, true);
	xhr3.send();
	
	function inpListener(i, good) {
		inp[i].addEventListener("click", function() {
			lab[i%3].style.borderBottom = "2px solid #F5F5DC";
			lab[(i+1)%3].style.borderBottom = "";
			lab[(i+2)%3].style.borderBottom = "";
			lab[i%3].style.background = "#F5F5DC";
			lab[(i+1)%3].style.background = "";
			lab[(i+2)%3].style.background = "";
			lab[i%3].style.color = "black";
			lab[(i+1)%3].style.color = "";
			lab[(i+2)%3].style.color = "";
			lab[i%3].style.textShadow = "4px 4px 0 rgba(0,0,0,.1)";
			lab[(i+1)%3].style.textShadow = "";
			lab[(i+2)%3].style.textShadow = "";
	    	d[1].innerHTML = "<h3>"+good[0].tittle+"</h3><h5>"+good[0].size+"</h5><h3>"+good[1].tittle+"</h3><h5>\
	        "+good[1].size+"</h5><h3>"+good[2].tittle+"</h3><h5>"+good[2].size+"</h5>";
		});
	}
}

xhr.send(null);
