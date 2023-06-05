const weatherWidget = document.querySelector('.weather-widget__container');
const weatherWidgetCloseBtn = document.querySelector('.weather-widget__close-btn');
const city = document.getElementById('city');
const day = document.getElementById('day');
const date = document.getElementById('date');
const time = document.getElementById('time');
const weatherStatus = document.getElementById('weather-status');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.getElementById('temperature');
const windSpeed = document.querySelector('.windspeed');
const humidity = document.querySelector('.humidity');
const pressure = document.querySelector('.pressure');
const sunriseTime = document.querySelector('.sunrise-time');
const sunsetTime = document.querySelector('.sunset-time');

const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const currentDay = new Date();

document.querySelector('.weather-widget__btn').addEventListener('click', () => {
  weatherWidget.style.visibility = "visible";
  document.querySelector('.weather-widget__btn').style.visibility = "hidden";
  getWeather();
});

document.querySelector('.weather-widget__close-btn').addEventListener('click', () => {
  weatherWidget.style.visibility = "hidden";
  document.querySelector('.weather-widget__btn').style.visibility = "visible";
  getWeather();
});


let inCelsiusTrue = true;
let inFahrenheitTrue;
const inCelsius = document.getElementById('celsius');
const inFahrenheit = document.getElementById('fahrenheit');
inCelsius.addEventListener('click', () => {
  chooseUnitsOfMeasurement("metric"); 
  document.getElementById('celsius').innerText= `\u00B0C`;
  document.getElementById('fahrenheit').innerText = `\u00B0F`;
  inCelsiusTrue = true;
  inFahrenheitTrue = false;
});
inFahrenheit.addEventListener('click', () => {
  chooseUnitsOfMeasurement("imperial");
  document.getElementById('celsius').innerText = `\u00B0F`;
  document.getElementById('fahrenheit').innerText = `\u00B0C`;
  inFahrenheitTrue = true;
  inCelsiusTrue = false;
});

const urlOpenWeatherAPI = 'https://api.openweathermap.org/data/2.5/weather?';
const params = {
  "lat": "49.839684",
  "lon": "24.029716",
  "units": "metric",
  "appid": "9d0512353050482b90e0a55cabda84aa"
}
const query = Object.keys(params)
  .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(params[key]))
  .join('&');

const urlAPI = urlOpenWeatherAPI + query;


async function chooseUnitsOfMeasurement(value) {
  const params = {
    "lat": "49.839684",
    "lon": "24.029716",
    "units": value,
    "appid": "9d0512353050482b90e0a55cabda84aa"
  }
  const query = Object.keys(params)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(params[key]))
    .join('&');
  const response = await fetch((urlOpenWeatherAPI + query), { method: "GET" });
  weather = await response.json();
  getWeather();
}


let weather;

async function getWeather() {
  if (!weather) {
    const response = await fetch(urlAPI, { method: "GET" });
    weather = await response.json();
  }
  city.innerText = `Weather in  ${weather.name}`;
  day.innerText = `${weekDay[currentDay.getDay()]}, ${currentDay.getDate()}`;
  date.innerText = monthNames[currentDay.getMonth()];
  updateClock();
  weatherStatus.innerText = `${weather.name} / ${weather.weather[0].description}`;
  weatherIcon.src = `image/weather-widget-openweather-icon/${weather.weather[0].icon}.png`;
  temperature.innerText = Math.round(weather.main.temp);
  if (inCelsiusTrue) {
    windSpeed.innerText = `${weather.wind.speed} m/s`;
  } 
   else {
    windSpeed.innerText = `${weather.wind.speed} m/h`;
  }
  humidity.innerText = `${weather.main.humidity} %`;
  pressure.innerText = `${weather.main.pressure} hPa`;
  sunriseTime.innerText = `${new Date(weather.sys.sunrise * 1000).getHours()} : ${new Date(weather.sys.sunrise * 1000).getMinutes()}`;
  sunsetTime.innerText = `${new Date(weather.sys.sunset * 1000).getHours()} : ${new Date(weather.sys.sunset * 1000).getMinutes()}`;
}

function updateClock() {
  time.innerText = new Date().toLocaleTimeString('uk');
}

setInterval(updateClock, 1000);