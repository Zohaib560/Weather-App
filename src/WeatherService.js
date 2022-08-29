//const API_KEY = "cf80b1fa43443289a1b21327c2c30711";
const API_KEY = process.env.REACT_APP_API_KEY;

const createIconURL = (iconID) => {
    return `https://openweathermap.org/img/wn/${iconID}@2x.png`
}

const getWeatherData = async (city, unitsMetric = true) => {
    const units = unitsMetric ? "metric" : "imperial";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

    const data = await fetch(URL)
        .then((res) => res.json())
        .then((data) => data);
    
    const {weather, 
        main: { temp, feels_like, temp_min, temp_max, pressure, humidity }, 
        wind: { speed }, 
        sys: { country }, 
        name } = data;
    
    const { description, icon } = weather[0];

    return {
        description, 
        iconURL: createIconURL(icon), 
        temp, 
        feels_like, 
        temp_min, 
        temp_max, 
        pressure, 
        humidity, 
        speed, 
        country, 
        name
    };
}

export { getWeatherData };