var $test = $('#time');

second($test);

function second(s) {
	var time = new Date();
	var seconds = time.getSeconds();
	var minutes = time.getMinutes();
	var hours = time.getHours();
	window.setTimeout("second($test)", 1000);
	s.text(hours + ":" + minutes +  ":" +  seconds);


}