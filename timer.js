
var start = document.getElementById('start');
var reset = document.getElementById('reset');
start.addEventListener('click',startTimer);
reset.addEventListener('click',resetCountDown);

var timeLeft = 0;
    var begin;

function startTimer()  {

//check for null input hours, minutes, seconds
   if(document.getElementById("hours").value == ""){
      document.getElementById("hours").value = "00";
   }

   if(document.getElementById("minutes").value == ""){
      document.getElementById("minutes").value = "00";
   }

   if(document.getElementById("seconds").value == ""){
      document.getElementById("seconds").value = "00";
   }

   //geting input hours, minutes, seconds
   var hours   = parseInt(document.getElementById("hours").value);
   var minutes = parseInt(document.getElementById("minutes").value);
   var seconds = parseInt(document.getElementById("seconds").value);



   //calculate time left in seconds
   timeLeft = (hours * 3600) + (minutes * 60) + seconds;

  //start count down timer
  begin = setInterval("countDown()",1000);
}

function countDown()  {
	var hoursLeft   = 0;
   	var minutesLeft = 0;
   	var secondsLeft = 0;
   	var remainder   = 0;

 timeLeft = timeLeft-1;

    if(timeLeft >= 0){
   //break down time left into hours, minutes, seconds
  hoursLeft = Math.floor(timeLeft/3600);
  remainder = timeLeft%3600;

  minutesLeft = Math.floor(remainder/60);
  remainder   = remainder%60;

  secondsLeft = remainder;
             document.getElementById('timer').innerHTML = `${hoursLeft}h: ${minutesLeft}m: ${secondsLeft}s`
    } else {
     clearInterval(begin);
     document.getElementById('timer').innerHTML = 'Time is up! click on reset to start new CountDown!'
    }       
}

function resetCountDown(){
	clearInterval(begin);
	document.getElementById('timer').innerHTML = '<input type="number"  id="hours" />h:<input type="number"  id="minutes" />m:<input type="number"  id="seconds" />s';

}
	

	

