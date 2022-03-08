const apiKey = "60a440d89263b43b0c735288b5181bda";
var city = "Cleveland"
var state = "Oh"


var getLocation = function() {
    var response = fetch("https://api.openweathermap.org/data/2.5/weather?lang=en&units=imperial&q=" + city + "&state=" + state + "&appid=" + apiKey).then(function(response) {
    response.json().then(function(data) {
      console.log(data);
    });
  });
};

  getLocation();
