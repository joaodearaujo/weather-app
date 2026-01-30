import Background from './components/Background/Background';
import Screen from './components/Screen/Screen';
import TodayWeather from './components/TodayWeather/TodayWeather';
import DaysSelection from './components/DaysSelection/DaysSelection';
import WeatherInfo from './components/WeatherInfo/WeatherInfo';
import HourlyForecast from './components/HourlyForecast/HourlyForecast';
import ChanceOfRain from './components/RainChance/RainChance';
import SunRiseSet from './components/SunCycle/SunCycle';
import Search from './components/Search/Search';
import { useState, useEffect } from 'react';
import { getCompleteWeather } from './services/api';
import { WeatherResponse } from './Types/Weather';

import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState<WeatherResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState("");

  const handleSearch = async () => {
    if (!city || city.trim() === "") return;

    const data = await getCompleteWeather(city);

    if (data) {
      setWeatherData(data);
    }
    setCity("");
  };

  useEffect(() => { 
    const loadInitialWeather = async () => {
      const data = await getCompleteWeather("Tokyo");
      setWeatherData(data);
      setLoading(false);  
    };

    loadInitialWeather();
  }, []);

  console.log("Dados Completos da API:", weatherData);
  

  if (loading || !weatherData) {
    return <h1 className="loading-message">Loading...</h1>;
  }
  
  return (
    <Background>
        <Screen>
          <Search 
            handleSearch={handleSearch}
            setCity={setCity} 
          />
          
          <TodayWeather 
            data={weatherData.current}
            city={weatherData.cityName || "Unknown City"} 
          />

          <DaysSelection />

          <WeatherInfo data={weatherData.current} />

          <HourlyForecast data={weatherData.hourly} />
          
          <ChanceOfRain data={weatherData.hourly} />

          <SunRiseSet data={weatherData.current} />
        </Screen>
      </Background>
  );
}

export default App;