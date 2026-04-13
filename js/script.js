
/* Welcome Message */

function showMessage() {

document.getElementById("welcomeMessage")
.innerHTML =
"Welcome to Centenary University Campus Life!";

}


/* Weather API */

async function getWeather() {

let url =
"https://api.open-meteo.com/v1/forecast?latitude=40.8584&longitude=-74.8250&current_weather=true";

let response =
await fetch(url);

let data =
await response.json();

let temp =
data.current_weather.temperature;

document.getElementById("weatherResult")
.innerHTML =
"Current Temperature: "
+ temp +
"°C";

}


/* Event Registration */

function registerEvent(eventName) {

document.getElementById("eventMessage")
.innerHTML =
"You registered for " +
eventName;

}


/* Toggle Dining */

function toggleDining() {

let list =
document.getElementById("diningList");

if (list.style.display === "none") {

list.style.display = "block";

}

else {

list.style.display = "none";

}

}