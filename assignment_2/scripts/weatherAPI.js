document.createElement("img");
const weatherIcon = {
  "01d": "fas fa-sun",
  "02": "fas fa-cloud-sun",
  "03": "fas fa-cloud",
  "04": "fas fa-could-mteatball",
  "09": "fas fa-could-sun-rain",
  "10d": "fas fa-could-showers-heavy",
  11: "fas fa-poo-storm",
  13: "far fa-snowflake",
  50: "fas fa-smog",
};

var weatherData = document.querySelector(".weather_data");
const iconSpace = document.querySelector("#exIcon");
const icon = document.createElement("i");

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
        //ICON 출력
        console.log(data.weather[0].description);
        //
        if (data.weather[0].description == "clear sky") {
          icon.setAttribute("class", "fa-solid fa-sun");

          // 요소 추가
          iconSpace.appendChild(icon);
          console.log("clear sky");
        } else if (data.weather[0].description == "few clouds") {
          icon.setAttribute("class", "fa-solid fa-cloud-sun");
          iconSpace.appendChild(icon);

          console.log("few clouds");
        } else if (data.weather[0].description.includes("cloud")) {
          icon.setAttribute("class", "fa-solid fa-cloud");
          iconSpace.appendChild(icon);

          console.log("scattered clouds");
        } else if (data.weather[0].description == "broken clouds") {
          icon.setAttribute("class", "fa-solid fa-cloud");
          iconSpace.appendChild(icon);
        } else if (data.weather[0].description.includes("shower")) {
          icon.setAttribute("class", "fa-solid fa-cloud-sun-rain");
          iconSpace.appendChild(icon);
        } else if (
          data.weather[0].description.includes("rain") ||
          data.weather[0].description.includes("drizzle")
          // data.weather[0].description == "moderate rain" ||
          // data.weather[0].description == "heavy intensity rain" ||
          // data.weather[0].description == "light rain"
        ) {
          icon.setAttribute("class", "fa-solid fa-cloud-rain");
          iconSpace.appendChild(icon);
        } else if (data.weather[0].description == "thunderstorm") {
          icon.setAttribute("class", "fa-solid fa-cloud-bolt");

          iconSpace.appendChild(icon);
        } else if (data.weather[0].description.includes("snow")) {
          icon.setAttribute("class", "fa-solid fa-snowflake");
          iconSpace.appendChild(icon);
        } else if (
          data.weather[0].description.includes("mist") ||
          data.weather[0].description.includes("haze")
        ) {
          icon.setAttribute("class", "fa-solid fa-smog");
          iconSpace.appendChild(icon);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

//display the result when you press the enter key
document
  .querySelector("#cityName")
  .addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
      console.log(iconSpace.childElementCount);
      fetchWeatherData();
      const checkNode = document.getElementsByTagName("i");
      const tagI = checkNode[0];
      tagI.parentNode.removeChild(tagI);
    }
  });

//display the result when you press the thermometer next to the search box
weatherData.addEventListener("click", function (e) {
  e.preventDefault();

  fetchWeatherData();
  const checkNode = document.getElementsByTagName("i");
  const tagI = checkNode[0];
  tagI.parentNode.removeChild(tagI);
});
