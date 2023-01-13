let now = new Date();
let hour = now.getHours();
if (hour < 10) {
  hour = "0" + hour;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = "0" + minutes;
}
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  " Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let dayElement = document.querySelector("#date");
let timeElement = document.querySelector("#time");
dayElement.innerHTML = day;
timeElement.innerHTML = hour + ":" + minutes;

function displayTemp(response) {
  let currentTemp = document.querySelector("#current-temp");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#current-humidity");
  let windElement = document.querySelector("#wind-speed");
  let iconElement = document.querySelector("#current-icon");
  descriptionElement.innerHTML = response.data.condition.description;
  currentTemp.innerHTML = Math.round(response.data.temperature.current);
  humidityElement.innerHTML = response.data.temperature.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);

  iconElement.setAttribute("src", response.data.condition.icon_url);
}

let city = "Polokwane";
let apiKey = "b4b16ao0bed60a37cdt0a5dcdf865c3b";
let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(url).then(displayTemp);
