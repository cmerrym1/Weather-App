const apiKey = "60a440d89263b43b0c735288b5181bda"
var lat = "40.9009"
var lon = "80.8568"

var getWeather = function() {
    fetch("https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={apiKey}");
  };
  
  getWeather();
