var weather;

var api = "http://api.openweathermap.org/data/2.5/weather?q=";
var apiKey = "&appid=b3554b3ceaa4a5a7d8af7e151bbec70c";
var unit = "&units=metric"
var input;
var illustrations = {
						"broken clouds" : "https://s26.postimg.org/431i2how9/cloudy.png",
						"scattered clouds" : "https://s26.postimg.org/5eig2fz9l/clouds_1.png",
						"few clouds" : "https://s26.postimg.org/mgba4je4p/cloudy_2.png",
						"light rain" : "https://s26.postimg.org/uhux8p7ih/rain.png",
						"moderate rain" : "https://s26.postimg.org/50cip3ps9/storm.png",
						"heavy intensity rain" : "https://s26.postimg.org/qba2td7wp/umbrellas.png",
						"very heavy rain" : "https://s26.postimg.org/o7znlp83t/umbrella.png",
						"overcast clouds" : "https://s26.postimg.org/431i2how9/cloudy.png",
						"sky is clear" : "https://s26.postimg.org/5kmye1tmx/sun.png",
						"snow" : "https://s26.postimg.org/p562ukjm1/snow_1.png",
						"light snow" : "https://s26.postimg.org/zdyk0e7nt/snow.png",
						"mist" : "https://s26.postimg.org/6w3we0409/fog.png",
						"haze" : "https://s26.postimg.org/6w3we0409/fog.png"

					};
var celc = {"celc" : "https://s26.postimg.org/btm2cuvd5/temperature.png"};

function getWeather() {
	var url = api + input.val() + unit + apiKey;
	$.get(url, gotData);

}

function gotData(data) {
	weather = data;

	$('#weather-image').attr("src", illustrations[weather.weather[0].description]);
	$('#temp-image').attr("src", celc);

	$('#weather-display').text("It is now " + weather.main.temp + "&#8451; in " + input.val());

}

$(document).ready(function() {
	input = $('#place-input');

	$('#add-location-sidebar').click(function() {
		getWeather();
	});
});