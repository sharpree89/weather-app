function weather() {

  var location = document.getElementById('location');
  var apiKey = '87f6b0b8419ac5d915cf57b1f4235684';
  var url = 'https://api.forecast.io/forecast/';

  navigator.geolocation.getCurrentPosition(success, error);

  function success(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    // current location request
    var GEOCODING = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + position.coords.latitude + '%2C' + position.coords.longitude + '&language=en';

    $.getJSON(GEOCODING).done(function(location) {
       $('#city').html(location.results[0].address_components[3].long_name);
     });

    // current weather request
    $.getJSON(url + apiKey + "/" + latitude + "," + longitude + "?callback=?", function(data) {
      $('#temp').html(Math.floor(data.currently.temperature) + '°F');
      $('#currently').html(data.currently.summary);
      $('#feelslike').html('Feels like ' + Math.floor(data.currently.apparentTemperature) + '°F');
      $('#humidity').html(data.currently.humidity * 100 + '%');
      $('#precip').html(data.currently.precipProbability * 100 + '%');
      $('#windspeed').html(Math.floor(data.currently.windSpeed) + ' mph');
      $('#message').html("");
      $('#daily').html(data.daily.summary);

      // mapping current weather condition to weather icon
      var weatherConditions = {

        "clear-night": "wi wi-night-clear",
        "clear-day": "wi wi-day-sunny",
        "partly-cloudy-night": "wi wi-night-alt-cloudy",
        "partly-cloudy-day": "wi wi-day-sunny-overcast",
        "cloudy": "wi wi-cloudy",
        "rain": "wi wi-rain",
        "sleet": "wi wi-sleet",
        "snow": "wi wi-snow",
        "wind": "wi wi-cloudy-gusts",
        "fog": "wi wi-fog",
        // the below conditions are just in case they are added in the future:
        "hail": "wi wi-hail",
        "thunderstorm": "wi wi-thunderstorm",
        "tornado": "wi wi-tornado",
        "hurricane": "wi wi-hurricane",
        "earthquake": "wi wi-earthquake",
        "flood": "wi wi-flood",
        "lightning": "wi wi-lightning"
      };

      var icon = data.currently.icon;
      $("#icon").html("<i class=" + "'" + weatherConditions[icon] + "'" + "></i>");

      // mapping current moon phase to moon icon
      var moonPhases = {};

    });
  }

  function error() {
    message.innerHTML = "Unable to retrieve your location";
  }

}

weather();
