var wind=document.getElementsByTagName('div')[0];
var block=document.getElementsByTagName('div')[1];
var yBlock=block.getBoundingClientRect().top;
var border=1000;
var yWind=wind.getBoundingClientRect().height - border;

window.addEventListener("scroll", function(e) {

 	if(window.pageYOffset < yBlock)
 	{
 		block.classList.remove('active');
 	}
 	if (window.pageYOffset > yBlock) 
 	{
        block.classList.add('active');
    }
    if (window.pageYOffset > yWind) 
 	{
        block.classList.remove('active');
    }
 })