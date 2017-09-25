var illustrations = {
						"broken clouds" : "https://s26.postimg.org/7xmim3eix/cloudy_4.png",
						"scattered clouds" : "https://s26.postimg.org/o9wkbtsuh/clouds_2.png",
						"few clouds" : "https://s26.postimg.org/6xw7qdzd5/cloudy_5.png",
						"light rain" : "https://s26.postimg.org/xk8ofd3k9/rain_1.png",
						"moderate rain" : "https://s26.postimg.org/70g3d830p/storm_1.png",
						"heavy intensity rain" : "https://s26.postimg.org/mafykeyix/umbrellas_1.png",
						"very heavy rain" : "https://s26.postimg.org/5nyebc5l5/umbrella_1.png",
						"overcast clouds" : "https://s26.postimg.org/jj1a7jpe1/clouds_3.png",
						"clear sky" : "https://s26.postimg.org/655pf9qvd/parachute.png",
						"snow" : "https://s26.postimg.org/cv4oky5vt/snow_2.png",
						"light snow" : "https://s26.postimg.org/xtauj15qh/snow_3.png",
						"mist" : "https://s26.postimg.org/ulpnrpavd/mist_1.png",
						"haze" : "https://s26.postimg.org/nfa0pskzt/fog_1.png",
						"fog" : "https://s26.postimg.org/amhbc4k09/cloudy_3.png",
					};



function getWeather() {
	var api = "http://api.openweathermap.org/data/2.5/weather?q=";
	var apiKey = "&appid=b3554b3ceaa4a5a7d8af7e151bbec70c";
	var unit = "&units=metric"
	var input = $('#place-input');
	var url = api + input.val() + unit + apiKey;
	$.get(url, gotData);
}

function gotData(weather) {
	var status = weather.weather[0].description;
	var pic = illustrations[status];
	var input = $('#place-input');


	$('#weather-image').attr("src", pic);

	$('#weather-display').html("It is now " + weather.main.temp + "&#8451; with " + status + " in " + input.val());

}

$(document).ready(function() {
	$('#add-location-sidebar').click(function() {
		getWeather();
	});

	$('#add-location').click(function() {
		if ( $('#city-input').val().length > 0) {
			getWeather();
		}
	});
});