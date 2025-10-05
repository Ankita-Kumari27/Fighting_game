
/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

/* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp" 
*/

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = (city) => {
  //HINT: Use template literals to create a url with input and an API key
const url = `https://weather-api138.p.rapidapi.com/weather?city_name=${city}`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '34b013a268msh5a12df2cef77e8fp1e933ajsn3ff7ee387a82',
		'x-rapidapi-host': 'weather-api138.p.rapidapi.com'
	}
};
async function fetchadata (){
try {
	const response = await fetch(url, options);
	const result = await response.json();
	return result
	console.log(result);
	
} catch (error) {
	console.error(error);
}
}
return fetchadata()
}

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
const searchCity = async () => {
  const city = document.getElementById('city-input').value;
  const data = await getWeatherData(city)
  showWeatherData(data)
}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
const showWeatherData = (weatherData) => {
	console.log(weatherData)
  const weatherType = weatherData.weather[0].main;
  updateBackground(weatherType)
 document.getElementById('city-name').innerText = weatherData.name
document.getElementById('weather-type').innerText = weatherData.weather[0].main
 document.getElementById('temp').innerText = (weatherData.main.temp -273).toFixed(1)
 const iconCode = weatherData.weather[0].icon;
const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
 document.getElementById('weather-icon').src = iconUrl;
document.getElementById('weather-icon').alt = weatherData.weather[0].description;
 document.getElementById('min-temp').innerText = (weatherData.main.temp_min - 273 ).toFixed(1)
 document.getElementById('max-temp').innerText = (weatherData.main.temp_max - 273 ).toFixed(1)
}


function updateBackground(weatherType) {
  const body = document.body;
  const overlay = document.getElementById('weather-overlay');
  overlay.innerHTML = ''; // Clear previous overlays

  switch (weatherType.toLowerCase()) {
    case 'clear':
      body.style.background = 'linear-gradient(to right, #fceabb, #f8b500)';
      break;
    case 'clouds':
      body.style.background = 'linear-gradient(to right, #d7d2cc, #304352)';
      break;
    case 'rain':
      body.style.background = 'linear-gradient(to right, #4e54c8, #8f94fb)';
      createRaindrops();
      break;
    case 'snow':
      body.style.background = 'linear-gradient(to right, #e6dada, #274046)';
      createSnowflakes();
      break;
    default:
      body.style.background = 'linear-gradient(135deg, #74ebd5, #9face6)';
  }
}


function createSnowflakes() {
  const overlay = document.getElementById('weather-overlay');
  for (let i = 0; i < 50; i++) {
    const flake = document.createElement('div');
    flake.className = 'snowflake';
    flake.style.left = `${Math.random() * 100}vw`;
    flake.style.animationDuration = `${5 + Math.random() * 5}s`;
    overlay.appendChild(flake);
  }
}

function createRaindrops() {
  const overlay = document.getElementById('weather-overlay');
  for (let i = 0; i < 60; i++) {
    const drop = document.createElement('div');
    drop.className = 'raindrop';
    drop.style.left = `${Math.random() * 100}vw`;
    drop.style.animationDuration = `${1 + Math.random()}s`;
    overlay.appendChild(drop);
  }
}
