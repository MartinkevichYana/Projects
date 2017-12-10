var f = document.getElementById("f");
f.onload = function(){
	player.playVideo();
	document.addEventListener('visibilitychange', function(e) {
		if(document.hidden == true)
		{
			player.pauseVideo();
		}
		else
		{
			player.playVideo();
		}
	}, false);
}
function onYouTubeIframeAPIReady(){
	window.player = new YT.Player("f");
}