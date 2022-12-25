import {fetchForecastData, fetchWeatherData} from "./getClimate";
import {requestGiffer} from "./getGif";

const cityName = document.querySelector('.cityName');
const temp = document.querySelector('.temp');
const feelsLike = document.querySelector('.feelsLike');
const searchCity = document.querySelector('.searchCity');
const searchBtn = document.querySelector('.searchBtn');
const weather = document.querySelector('.weather');
const weatherIcon = document.querySelector('.weatherIcon');
const forecast = document.querySelector('.forecast');


/**
 * Choose appropriate icon for current weather
 * @param weatherType
 */
const chooseIcon = function(weatherType) {
    switch(weatherType.toLowerCase()) {
        case "clouds": {
            weatherIcon.src = "icons/cloud.svg";
            break;
        }
        case "clear": {
            weatherIcon.src = "icons/sunnyclear.svg";
            break;
        }
    }
}

/**
 * Color temp font based on temp
 * @param temp
 */
const tempColorify = function(temp, tempType) {
    if(temp >= 90) {
        tempType.style.color = "var(--superhot)";
    }
    else if(temp > 80) {
        tempType.style.color = "var(--prettyhot)";
    }
    else if(temp > 70) {
        tempType.style.color = "var(--warm)";
    }
    else if(temp > 50) {
        tempType.style.color = "var(--temperate)";
    }
    else if(temp > 30) {
        tempType.style.color = "var(--cool)";
    }
    else if(temp > 20) {
        tempType.style.color = "var(--prettycold)";
    }
    else if (temp <= 20) {
        tempType.style.color = "var(--supercold)";
    }
}

const displayWeatherData = async function (city) {
    const fetchedData = await fetchWeatherData(city);
    cityName.textContent = fetchedData.name;
    temp.textContent = fetchedData.main.temp + " °F,";
    feelsLike.textContent = "feels like " + fetchedData.main.feels_like + " °F";
    weather.textContent = fetchedData.weather[0].main;
    chooseIcon(weather.textContent);
    tempColorify(parseInt(fetchedData.main.temp), temp);
    tempColorify(parseInt(fetchedData.main.feels_like), feelsLike);
}

const displayForecastData = async function(city) {
    const fetchedData = await fetchForecastData(city);
    console.log(fetchedData);
    fetchedData.list.forEach(forecastData => {
        const date = document.createElement('div');
        date.textContent = forecastData.dt_txt;
        forecast.appendChild(date);
    })
}

displayWeatherData('Augusta, US');
//displayForecastData('Augusta, US')

searchBtn.addEventListener('click', async () => {
    if(!searchCity.value) {return}
    try {
        await displayWeatherData(searchCity.value ? searchCity.value : 'Augusta, US')
            .catch(e => {
                cityName.textContent = "City does not exist!"
                temp.textContent = "";
                feelsLike.textContent = "";
                weather.textContent = "";
            })
    } catch (e) {
        console.log(e);
    }
    searchCity.value = "";
})
