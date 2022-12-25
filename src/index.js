const weatherfreeAPIKey = '1a5f3107d13abfe8627ec82ab2bad374';


/**
 * Asynchronous function that returns the weather data as json
 * @param city
 * @returns {Promise<void>}
 */
const fetchWeatherData = async function (city) {
    const fetchedData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${weatherfreeAPIKey}&units=imperial`, {mode: 'cors'});
    return await fetchedData.json()
}

const displayWeatherData = async function(city) {

}