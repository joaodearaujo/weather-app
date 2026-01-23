import Background from './components/background/Background';
import Screen from './components/screen/Screen';
import TodayWeather from './components/today-weather/TodayWeather';
import ButtonArea from './components/button-area/ButtonArea';
import WeatherInfo from './components/weatherInfo/WeatherInfo';
import HourlyForecast from './components/hourlyForecast/HourlyForecast';
import ChanceOfRain from './components/chanceOfRain/ChanceOfRain';
import SunRiseSet from './components/sunRiseSet/SunRiseSet';

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
      const data = await fetchCompleteWeather("Manaus");
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
          <TodayWeather 
            data={weatherData.current} 
            city={weatherData.timezone} 
            handleSearch={handleSearch}
            setCity={setCity}>
          </TodayWeather>

          <ButtonArea></ButtonArea>
          <WeatherInfo data={weatherData.current}></WeatherInfo>
          <HourlyForecast data={weatherData.hourly}></HourlyForecast>
          <ChanceOfRain data={weatherData.daily}></ChanceOfRain>
          <SunRiseSet data={weatherData.current}></SunRiseSet>
        </Screen>
      </Background>
  )
}

export default App
