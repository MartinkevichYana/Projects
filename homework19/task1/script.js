var div = document.getElementsByTagName("div")[0];
var xhr = new XMLHttpRequest();
xhr.open("GET", "jmap.json", true);
var k=0;

xhr.onload = function() {
	var data = JSON.parse(this.responseText);
	var tit = [];
	var coords = [];
	var cont = [];
	for(var i=0; i<data.length; i++)
	{
		var o = {
			lat: Number(data[i].lat),
			lng: Number(data[i].lng)
		};
		coords.push(o);
		tit.push(data[i].tittle);
		cont.push(data[i].content);
	}
	var settings = {
		zoom: 4,
		center: coords[1],
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	var map = new google.maps.Map(div, settings);
	for(var i=0; i<data.length; i++)
	{
		var marker = new google.maps.Marker({
			position: coords[i], 
			map: map,
			title: tit[i]
		});
		var infw = new google.maps.InfoWindow({
          	content: cont[i]
        });
        list(marker, infw);
	}
	var polyline = new google.maps.Polyline({
        path: coords,
        strokeColor: "red",
        strokeOpacity: 20,
        strokeWeight: 4             
    });
    function list(marker, wind) {
    	marker.addListener('click', function() {
    		wind.open(map, marker);
        });
    }
	polyline.setMap(map);
}

xhr.send(null);
