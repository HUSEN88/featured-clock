var hours = 0;
var minutes = 0;
var seconds = 0;

var prezerohours = 0;
var prezerominutes = 0;
var prezeroseconds = 0;

 var interval = null;
 var status = 'stopped'
 
// for start and stop of stopwatch
function stopwatch(){

	seconds++

	if(seconds/60 === 1){
		seconds = 0;
		minutes++
		if(minutes/60 === 1){
			minutes = 0;
			hours++
		}
	}


	if(seconds < 10){
		prezeroseconds = '0' + seconds.toString() + 's';
	}else{
		prezeroseconds = seconds;
	}

	if(minutes < 10){
		prezerominutes = '0' + minutes.toString() + 'm';
	}else{
		prezerominutes = minutes;
	}

	if(hours < 10){
		prezerohours = '0' + hours.toString() + 'h';
	}else{
		prezerohours = hours;
	}

	document.getElementById('stopwatch').innerHTML = prezerohours + ':' + prezerominutes + ':' + prezeroseconds;

}

startsw = document.getElementById('startsw');
pausesw = document.getElementById('pausesw');
resetsw = document.getElementById('resetsw');


startsw.addEventListener('click',startstop);
pausesw.addEventListener('click',startstop);
resetsw.addEventListener('click',reset);

// start and stop with setInterval method
function startstop(){
	if (status == 'stopped'){
		interval = window.setInterval(stopwatch,1000);
		status = 'started';
		startsw.style.display = "none";
		pausesw.style.display = "inline-block";
	}else{
		window.clearInterval(interval);
		status = 'stopped';
		pausesw.style.display = "none";
		startsw.style.display = "inline-block";
	}
}

// resetting the stopwatch
function reset(){
	window.clearInterval(interval);
	seconds = 0;
	minutes= 0;
	hours = 0;
	document.getElementById('stopwatch').innerHTML = '00h:00m:00s';
	pausesw.style.display = "none";
	startsw.style.display = "inline-block";
}