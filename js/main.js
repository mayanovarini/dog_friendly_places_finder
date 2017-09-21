function initMap() {

  $('#animated-text').hide();
  var sf = {lat: 37.759621, lng: -122.4290925};
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat:37.776259, lng:-122.432758},
    zoom: 14
  });

  var request = {
    location: sf,
    radius: '10000',
    query: 'dog'
  };

  var service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);

  // autocomplete search function
  var place;

  var autocomplete = new google.maps.places.Autocomplete(document.getElementById('city-input'));

  autocomplete.bindTo('bounds', map);
  autocomplete.addListener('place_changed', function() {
    place = autocomplete.getPlace();
  });

  var autocompleteSidebar = new google.maps.places.Autocomplete(document.getElementById('place-input'));

  autocompleteSidebar.bindTo('bounds', map);
  autocompleteSidebar.addListener('place_changed', function() {
    place = autocompleteSidebar.getPlace();
  });

  $(document).on("click",'#add-location', function(e){
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
  });



   $(document).on("click",'#add-location-sidebar', function(e){
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
    });

  // geolocate users and attach user-icons
  var image_user = "https://s26.postimg.org/jipu86irt/girl.png";
  var infowindow_user = new google.maps.InfoWindow;

  //  HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infowindow_user.setPosition(pos);
      infowindow_user.setContent("maya is here");

      infowindow_user.open(map);
      map.setCenter(pos);
        }, function() {
          handleLocationError(true, infowindow_user, map.getCenter());
        });
      } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infowindow_user, map.getCenter());
      }

  function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }
    }
  }

  function createMarker(place) {
    var infowindow = new google.maps.InfoWindow;

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

  function handleLocationError(browserHasGeolocation, InfoWindow_user, pos) {
    infowindow_user.setPosition(pos);
    infowindow_user.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
    infowindow_user.open(map);
  }


} // map init close tag


