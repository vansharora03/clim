const weatherfreeAPIKey = '20f7632ffc2c022654e4093c6947b4f4';

/**
 * Asynchronous function that returns the weather data as json
 * @param city
 * @returns {Promise<void>}
 */
const fetchWeatherData = async function (city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},US&APPID=${weatherfreeAPIKey}&units=imperial`, {mode: 'cors'});
        return await response.json();
    } catch(e) {
        console.error;
    }
}

export {fetchWeatherData};


