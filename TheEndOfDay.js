function MinutesToEndDay() {
	var day = new Date();
	var sum=day.getHours()*60+day.getMinutes();
	var ends=1440;
	var left=ends-sum;
	return left;
}


var endday=MinutesToEndDay();

alert("Until the end of the day left "+endday+" minutes");