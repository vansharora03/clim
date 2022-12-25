import {fetchWeatherData} from "./getClimate";

const cityName = document.querySelector('.cityName');
const temp = document.querySelector('.temp');
const feelsLike = document.querySelector('.feelsLike');
const searchCity = document.querySelector('.searchCity');
const searchBtn = document.querySelector('.searchBtn');
const weather = document.querySelector('.weather');


const displayWeatherData = async function (city) {
    const fetchedData = await fetchWeatherData(city);
    cityName.textContent = fetchedData.name;
    temp.textContent = fetchedData.main.temp + " F";
    feelsLike.textContent = "Feels like: " + fetchedData.main.feels_like + " F";
    weather.textContent = fetchedData.weather[0].main;
    console.log(fetchedData);
}

displayWeatherData('Augusta');

searchBtn.addEventListener('click', async () => {
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
