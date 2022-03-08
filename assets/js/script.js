const apiKey = "60a440d89263b43b0c735288b5181bda";
var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#cityname");
var weatherContainerEl = document.querySelector("#weather-container");
var weatherSearchTerm = document.querySelector("#weather-search-term");

var formSubmitHandler = function(event) {
  event.preventDefault();
  var cityname = nameInputEl.value.trim();

if (cityname) {
  getLocation(cityname);
  weatherContainerEl.textContent = "";
  nameInputEl.value = "";
} else {
  alert("Please enter a City");
}
  console.log(cityname);
};

var getLocation = function(city) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?lang=en&units=imperial&q=" + city + "&appid=" + apiKey;
    fetch(apiUrl)
    .then(function(response) {
      if (response.ok) {
        console.log(response);
        response.json().then(function(data) {
          console.log(data);
          displayWeather(data, city);
        });
      } else {
        alert("Error: " + response.statusText);
      }
    })
    .catch(function(error) {
      alert("Unable to connect");
    });
};

var displayWeather = function(searchTerm) {
  console.log("chickaboom!")
};

userFormEl.addEventListener("submit", formSubmitHandler);
