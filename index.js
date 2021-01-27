function updateTime() {
	
	var time = new Date();
	var timeText = time.getHours() + " : " + time.getMinutes() + " : " + time.getSeconds() ;
	var clock = document.getElementById("clock");
	clock.innerText = timeText;
	
}

