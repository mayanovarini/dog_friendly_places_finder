var weather;

var api = "http://api.openweathermap.org/data/2.5/weather?q=";
var apiKey = "&appid=b3554b3ceaa4a5a7d8af7e151bbec70c";
var input;


function getWeather() {
	var url = api + input.val() + apiKey;
	$.get(url, gotData);

}

function gotData(data) {
	weather = data;
	console.log(weather);
	$('#weather-display').text("the temp in " + input.val() + "is .... i dont know how to do thisssss");

}

$(document).ready(function() {
	input = $('#weather-input');

	$('#weather-button').click(function() {
		getWeather();
	});
});