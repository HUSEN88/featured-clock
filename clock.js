var clock = setInterval(clockFunction,1000);
var clock = setInterval(dayMonth,1000);


function clockFunction(){
	var d = new Date();
	var t = d.toLocaleTimeString('en-US', { hour: 'numeric',minute:'numeric',second:'numeric', hour12: true });
	document.getElementById('clock').innerHTML = t;
}

function dayMonth(){
	var d = new Date();
	var dayofweek = ['Sun','Mon','Tue','Wed','Thur','Fri','Sat'];
	var day = dayofweek[d.getDay()];
	var date = d.toLocaleDateString();
	document.getElementById('dayMonth').innerHTML = `${day}, ${date}`;
}

