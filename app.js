function weather() {

  var location = document.getElementById('location');
  var apiKey = '87f6b0b8419ac5d915cf57b1f4235684';
  var url = 'https://api.forecast.io/forecast/';

  navigator.geolocation.getCurrentPosition(success, error);

  function success(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    var GEOCODING = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + position.coords.latitude + '%2C' + position.coords.longitude + '&language=en';

    $.getJSON(GEOCODING).done(function(location) {
       $('#state').html(location.results[0].address_components[4].long_name);
     })

    // location.innerHTML = 'Latitude: ' + latitude + '°' + '<br>' + 'Longitude:  ' + longitude + '°';

    $.getJSON(url + apiKey + "/" + latitude + "," + longitude + "?callback=?", function(data) {
      $('#temp').html(Math.floor(data.currently.temperature) + '°F');
      $('#feelslike').html('Feels like: ' + Math.floor(data.currently.apparentTemperature) + '°F');
      $('#humidity').html('Humidity: ' + data.currently.humidity * 100 + '%');
      $('#precip').html('Precipitation: ' + data.currently.precipProbability * 100 + '%');
      $('#dewpoint').html('Dew Point: ' + Math.floor(data.currently.dewPoint) + '°F');
      $('#windspeed').html('Wind Speed: ' + Math.floor(data.currently.windSpeed) + ' mph');
      $('#minutely').html(data.minutely.summary);
      $('#message').html("");
      if(data.currently.icon == 'clear-night') {
        $("#icon").html('<i class="fa fa-moon-o" aria-hidden="true"></i>');
      }
      if(data.currently.icon == 'clear-day') {
        $("#icon").html('<i class="fa fa-sun-o" aria-hidden="true"></i>');
      }
      if(data.currently.icon == 'partly-cloudy-night') {
        $("#icon").html('<i class="fa fa-moon-o" aria-hidden="true"></i>');
      }
      if(data.currently.icon == 'partly-cloudy-day') {
        $("#icon").html('<i class="fa fa-sun-o" aria-hidden="true"></i>');
      }
      if(data.currently.icon == 'cloudy') {
        $("#icon").html('<i class="fa fa-cloud" aria-hidden="true"></i>');
      }
      if(data.currently.icon == 'rain') {
        $("#icon").html('<i class="fa fa-bolt" aria-hidden="true"></i>');
      }
      if(data.currently.icon == 'sleet') {
        $("#icon").html('<i class="fa fa-snowflake-o" aria-hidden="true"></i>');
      }
      if(data.currently.icon == 'snow') {
        $("#icon").html('<i class="fa fa-snowflake-o" aria-hidden="true"></i>');
      }
      if(data.currently.icon == 'wind') {
        $("#icon").html('<i class="fa fa-cloud" aria-hidden="true"></i>');
      }
      if(data.currently.icon == 'fog') {
        $("#icon").html('<i class="fa fa-cloud" aria-hidden="true"></i>');
      }

    });
  }

  function error() {
    message.innerHTML = "Unable to retrieve your location";
  }

}

weather();
