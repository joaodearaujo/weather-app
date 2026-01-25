import Background from './components/Background/Background';
import Screen from './components/Screen/Screen';
import TodayWeather from './components/TodayWeather/TodayWeather';
import DaysSelection from './components/DaysSelection/DaysSelection';
import WeatherInfo from './components/WeatherInfo/WeatherInfo';
import HourlyForecast from './components/HourlyForecast/HourlyForecast';
import ChanceOfRain from './components/RainChance/RainChance';
import SunRiseSet from './components/SunCycle/SunCycle';
import Search from './components/Search/Search';
import {useState, useEffect} from 'react';
import { fetchCompleteWeather } from './services/api';

import './App.css'

function App() {

  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState(null);

  const handleSearch = async () => {
    if (!city || city.trim() === "") return;
    const data = await fetchCompleteWeather(city);
    if (data) setWeatherData(data);
  };

  useEffect(() => {
    const loadInitialWeather = async () => {
      const data = await fetchCompleteWeather("Tokyo");
      setWeatherData(data);
      setLoading(false);  
    };

    loadInitialWeather();
  }, []);

  if (loading) return <h1 className="loading-message">Loading...</h1>

  console.log("Dados Completos da API:", weatherData);

  return (
      <Background>
        <Screen>
          <Search 
            city={weatherData.timezone} 
            handleSearch={handleSearch}
            setCity={setCity}>
          </Search>
          
          <TodayWeather 
            data={weatherData.current}
            city={weatherData.timezone}>
          </TodayWeather>
          

          <DaysSelection></DaysSelection>
          <WeatherInfo data={weatherData.current}></WeatherInfo>
          <HourlyForecast data={weatherData.hourly}></HourlyForecast>
          <ChanceOfRain data={weatherData.hourly}></ChanceOfRain>
          <SunRiseSet data={weatherData.current}></SunRiseSet>
        </Screen>
      </Background>
  )
}

export default App
