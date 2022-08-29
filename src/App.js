import hotBg from './assets/hot.jpg';
import coldBg from './assets/cold.jpg';
import Descriptions from './components/Descriptions';
import Weather from './components/Weather';
import Search from './components/Search';
import { getWeatherData } from './WeatherService';
import { useEffect, useState } from 'react';

function App() {

  const [weather, setWeather] = useState(null);
  const [unitsMetric, setUnitsMetric] = useState(true);
  const [citySearch, setCitySearch] = useState("toronto");
  const [background, setBackground] = useState(hotBg);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try{
        const data = await getWeatherData(citySearch, unitsMetric);
        setWeather(data);

        const coldThreshold = unitsMetric ? 12 : 54;
        if (data.temp <= coldThreshold){
          setBackground(coldBg);
        }
        else{
          setBackground(hotBg);
        }
      }
      catch (error){
        alert("Please enter a valid city!");
      }
    }

    fetchWeatherData();
  }, [unitsMetric, citySearch]);

  const handleUnitsClick = (e) => {
    const button = e.currentTarget;
    if (unitsMetric) {
      button.innerText = "°C";
      setUnitsMetric(false);
    }
    else{
      button.innerText = "°F";
      setUnitsMetric(true);
    }
  };

  const handleSearchCity = (e) => {
    if (e.key === "Enter"){
      setCitySearch(e.currentTarget.value);
      e.currentTarget.value = "";
      e.currentTarget.blur();
    }
  };

  return (
    <div className="App" style={{backgroundImage: `url(${background})`}}>
      <div className="overlay">
        {weather && (
          <div className="container">
            <Search handleSearchCity={handleSearchCity} handleUnitsClick={handleUnitsClick} />
            <Weather weather={weather} unitsMetric={unitsMetric} />
            <Descriptions weather={weather} unitsMetric={unitsMetric} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
