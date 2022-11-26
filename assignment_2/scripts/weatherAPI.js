
// Weather Forecast
const weatherIcon = document.createElement("img");

var weatherData = document.querySelector(".weather_data");

//Function for fetching weather data
function fetchWeatherData() {
  var cityName = document.getElementById("cityName").value;
  var url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityName +
    "&appid=1b81668fc60a1d1905a3e5a311d45414";
  if (cityName == "") {
    alert("Enter a city name");
  } else {
    fetch(url)
      .then(function (response) {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(Error);
        }
      })
      .then(function (data) {
        console.log(data);
        const { name } = data;
        const { temp } = data.main;
        const { temp_max } = data.main;
        const { temp_min } = data.main;
        const { feels_like } = data.main;
        const { id, main } = data.weather[0];

        //Display information to HTML
        const displayName = document.querySelector("#display_name");
        const displayFeels = document.querySelector("#display_feels_like");
        const displayMain = document.querySelector("#display_main");
        const displayTemp = document.querySelector("#display_temp");
        const displayTempMaxMin = document.querySelector("#display_maxmin");

        const displayIcon = document.querySelector("#display_icon");

        displayName.textContent = name;
        displayTemp.textContent =
          "Current Temperature: " + Math.round(temp - 273) + "°C";
        displayTempMaxMin.textContent =
          Math.round(temp_max - 273) +
          "°C" +
          "/" +
          Math.round(temp_min - 273) +
          "°C";

        displayFeels.textContent =
          "Feels Like: " + Math.round(feels_like - 273) + "°C";

        displayMain.textContent = main;
        displayIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

//display the result when you press the enter key
document.querySelector("#cityName").addEventListener("keypress", function(event) {
    if (event.key == "Enter") {
      fetchWeatherData();
    }
  });

//display the result when you press the thermometer next to the search box
weatherData.addEventListener("click", function (e) {
  e.preventDefault();
  fetchWeatherData();
});
