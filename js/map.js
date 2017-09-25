function initMap() {

	$('#animated-text').hide();

	var sf = {lat: 37.759621, lng: -122.4290925};
	var map = new google.maps.Map(document.getElementById('map'), {
		center: sf,
		zoom: 13
	});

	var request = {
		location: sf,
		radius: '10000',
		query: 'dog-friendly',
		type: 'cafe'
	};

	getWeather("San Francisco, CA");

	var service = new google.maps.places.PlacesService(map);
	service.textSearch(request, callback);

	// autocomplete search function
	var place;

	var autocomplete = new google.maps.places.Autocomplete(document.getElementById('city-input'));

	autocomplete.bindTo('bounds', map);
	autocomplete.addListener('place_changed', function() {
		place = autocomplete.getPlace();
		getWeather(place.name);
	});

	var autocompleteSidebar = new google.maps.places.Autocomplete(document.getElementById('place-input'));

	autocompleteSidebar.bindTo('bounds', map);
	autocompleteSidebar.addListener('place_changed', function() {
		place = autocompleteSidebar.getPlace();
		getWeather(place.name);
	});

	$(document).on("submit",'#main-form', mapSearch);
	$(document).on("keyup",'#city-input', mapSearch);
	$(document).on("submit",'#sidebar-form', mapSearch);

	function mapSearch(e) {
		service.textSearch({
			location: place.geometry.location,
			radius: '10000',
			query: 'dog-friendly',
			type: 'cafe'
		}, callback);

		setMapGeometry(e);
	}

	function setMapGeometry(e) {
		e.preventDefault();

		// if place has no geometry, it is not what we expected (or need)
		// so we break out with a return statement
		if (! place.geometry) {
			return;
		}

		// if place has a viewport property within gometry property
		// we use that to set our map view
		else if (place.geometry.viewport) {
			map.fitBounds(place.geometry.viewport);
		}

		// if no viewort property, we use location to set our map view
		// and specify a zoom of 17
		else {
			map.setCenter(place.geometry.location);
			map.setZoom(17);
		}
	}

	function callback(results, status) {
		$('#places-result').html('');
		if (status === google.maps.places.PlacesServiceStatus.OK) {
			for (var i = 0; i < results.length; i++) {
				createMarker(results[i]);
				$('#places-result').append($('<li>').text(results[i].name))
			}
		}
	}

	var infowindow = new google.maps.InfoWindow;

	function createMarker(place) {
		var infowindowContent = document.getElementById('infowindow-content');
		infowindow.setContent(infowindowContent);

		var placeLoc = place.geometry.location;
		var marker = new google.maps.Marker({
			animation:google.maps.Animation.BOUNCE,
			icon: "https://s26.postimg.org/6zqv8ms95/Webp.net-resizeimage_1.png",
			map: map,
			position: place.geometry.location
		});

		google.maps.event.addListener(marker, 'click', function() {
			infowindowContent.children['place-name'].textContent = place.name;
			infowindow.open(map, this);
		});
	}

} // map init close tag


