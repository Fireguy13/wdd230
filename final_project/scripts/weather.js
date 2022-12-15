// select HTML elements in the document
let t = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
let calcWind = document.querySelector('#windChill');
let description = document.querySelector('#current-description')
let humiditylbl = document.querySelector('#current_humidity')
let firstdaylbl = document.querySelector('#day1')
let twodaylbl = document.querySelector('#day2')
let threedaylbl = document.querySelector('#day3')
let fourdaylbl = document.querySelector('#day4')

// current-description


const link = "https://api.openweathermap.org/data/2.5/weather?q=carlsbad&appid=4bf5075ae53f5b3699bb864f44d98c0c&units=imperial"


const fourdaylink = "https://api.openweathermap.org/data/2.5/forecast?lat=33.1581&lon=117.3506&appid=4bf5075ae53f5b3699bb864f44d98c0c"

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

async function apiFetchfourday(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResultsfourday (data)
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}



function displayResultsfourday(weatherData){
    var test = weatherData;
    var firsttemp = 1.8 * (weatherData.list[4].main.temp - 273.15) + 32;
    var firstDate = new Date(weatherData.list[4].dt_txt).toDateString();
    firstdaylbl.innerHTML = `<h3>${firstDate}</h3> Temperature:${firsttemp.toFixed()}°F`
    
    var twotemp = 1.8 * (weatherData.list[12].main.temp - 273.15) + 32
    var twoDate = new Date(weatherData.list[12].dt_txt).toDateString();
    twodaylbl.innerHTML = `<h3>${twoDate}</h3> Temperature:${twotemp.toFixed()}°F`
    
    var threetemp = 1.8 * (weatherData.list[20].main.temp - 273.15) + 32
    var threeDate = new Date(weatherData.list[20].dt_txt).toDateString();
    threedaylbl.innerHTML = `<h3>${threeDate}</h3> Temperature:${threetemp.toFixed()}°F`
    
    var fourtemp = 1.8 * (weatherData.list[28].main.temp - 273.15) + 32
    var fourDate = new Date(weatherData.list[28].dt_txt).toDateString();
    fourdaylbl.innerHTML = `<h3>${fourDate}</h3> Temperature:${fourtemp.toFixed()}°F`

    
}


function displayResults(weatherData) {

    t.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`
    

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    //const speed = weatherData.wind.speed
    const humidity = weatherData.main.humidity
    
    description.innerHTML = `<b>${desc}</b>`
    humiditylbl.innerHTML = `<b>${humidity}</b>`


    // current_humidity
    // wStatus



    windSpeed.innerHTML = `<strong>${speed.toFixed(0)}</strong>`
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    wChill(weatherData);
}

//////////// WIND CHILL //////////////


// function wChill(windData) {
//             s = `${windData.wind.speed}`
//             t = `${windData.main.temp}`

//           if (t <= 50 && s > 3) {
//             let farenheit = 35.74 + 0.6215 * t - 35.75 *Math.pow(s, 0.16)  + 0.4275 * t * Math.pow(s, 0.16);
//             farenheit = farenheit.toFixed(2)
//             calcWind.innerHTML = farenheit

//             } else {
//               calcWind.innerHTML = "N/A";
//             }
// }
 apiFetch(link);
 apiFetchfourday(fourdaylink);

