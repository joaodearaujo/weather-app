import axios from 'axios';
import { GeoLocation } from '../Types/Weather';
import { WeatherResponse } from '../Types/Weather';

const api_Key = import.meta.env.VITE_WEATHER_API_KEY;
const baseURL_Location = "http://api.openweathermap.org/geo/1.0/direct";
const baseURL_Weather = "https://api.openweathermap.org/data/3.0/onecall";

export const getCompleteWeather = async (cityName: string) => {
    try {
        const geoResponse = await axios.get<GeoLocation[]>(`${baseURL_Location}?q=${cityName}&limit=1&appid=${api_Key}`)
        .then(res => res.data)

        if (!geoResponse) return null; 

        const [geoData] = geoResponse;  // Desestruturando o array 

        const weatherResponse = await axios.get<WeatherResponse>(`${baseURL_Weather}?lat=${geoData.lat}&lon=${geoData.lon}&units=metric&exclude=minutely&appid=${api_Key}`)
        .then(res => res.data);

        return {
            ...weatherResponse,
            cityName: geoData.name,
        }

    } catch (error) {
        console.error('Algo deu errado:', error)
        return null;
    }
}