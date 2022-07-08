let weather = {
  APIkey: "73ac8ca3f91350ed1c2a4dd84bd82832",
  getWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.APIkey
    )
      .then((response) => response.json())
      .then((data) => this.showWeather(data));
  },
  showWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".desc").innerText = description;
    document.querySelector(".wind").innerText =
      " Wind speed: " + speed + " kmph";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".weather-icon").src =
      "https://openweathermap.org/img/wn/" + icon + "@2x.png";
  },
  search: function () {
    const cityName = document.getElementById("search-bar").value;
    this.getWeather(cityName);
  },
};
document.querySelector(".search-btn").addEventListener("click", function () {
  weather.search();
});
document
  .getElementById("search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });
