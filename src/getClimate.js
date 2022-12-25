const weatherfreeAPIKey = '20f7632ffc2c022654e4093c6947b4f4';

/**
 * Asynchronous function that returns the weather data as an object
 * @param city
 * @returns {Promise<void>}
 */
const fetchWeatherData = async function (city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${weatherfreeAPIKey}&units=imperial`, {mode: 'cors'});
        return await response.json();
    } catch(e) {
        console.error;
    }
}


/**
 * Asynchronous function that returns forecast data as an object
 * @param city
 * @returns {Promise<void>}
 */
const fetchForecastData = async function (city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${weatherfreeAPIKey}&units=imperial`, {mode: 'cors'});
        return await response.json();
    } catch(e){}
    console.error;
}

export {fetchWeatherData, fetchForecastData};


