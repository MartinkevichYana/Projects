var inp=document.getElementById('inp');

inp.addEventListener("keypress", function(e) {

	if((e.keyCode == 64) || ((e.keyCode > 45) && (e.keyCode < 47)) || ((e.keyCode > 47) && (e.keyCode < 58)) || ((e.keyCode > 96) && (e.keyCode < 123)) || ((e.keyCode > 64) && (e.keyCode < 91)))
	{}
	else
	{
		e.preventDefault();
	}
 })