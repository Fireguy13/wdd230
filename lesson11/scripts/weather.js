// select HTML elements in the document
let t = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
let calcWind = document.querySelector('#windChill');
let windSpeed = document.querySelector('#windSpeed')

const link = "https://api.openweathermap.org/data/2.5/weather?q=orem&appid=4bf5075ae53f5b3699bb864f44d98c0c&units=imperial"

console.log(link);

async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data)
            wChill(data)
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(weatherData) {

    t.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    const speed = weatherData.wind.speed

    windSpeed.innerHTML = `<strong>${speed.toFixed(0)}</strong>`
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    wChill(weatherData);
}

//////////// WIND CHILL //////////////


function wChill(windData) {
            s = `${windData.wind.speed}`
            t = `${windData.main.temp}`

          if (t <= 50 && s > 3) {
            let farenheit = 35.74 + 0.6215 * t - 35.75 *Math.pow(s, 0.16)  + 0.4275 * t * Math.pow(s, 0.16);
            farenheit = farenheit.toFixed(2)
            calcWind.innerHTML = farenheit

            } else {
              calcWind.innerHTML = "N/A";
            }
}

apiFetch(link);