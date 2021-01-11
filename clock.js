var interval;


interval = setInterval(clock,1000);

function clock(){
	var date = new Date();
	$("#time").html(date.toLocaleTimeString('en-IN'));
	$("#date").html(date.toLocaleDateString('en-IN'));

}

