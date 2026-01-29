import axios from 'axios';

const api_Key = import.meta.env.VITE_WEATHER_API_KEY;
const baseURL_Location = "http://api.openweathermap.org/geo/1.0/direct";
const baseURL_Weather = "https://api.openweathermap.org/data/3.0/onecall";

// Definindo as interfaces

interface AlertWeather {
    description: string;
    event: string;
    start: number;
}

interface CurrentWeather {
    feels_like: number;
    wind_speed: number;
    humidity: number;
    pressure: number;
    sunrise: number;
    sunset: number;
    uvi: number;
    main: string;
    description: string;
}

interface HourlyWeather {
    feels_like: number;
    wind_speed: number;
    humidity: number;
    pressure: number;
    sunrise: number;
    sunset: number;
    pop: number;
    uvi: number;
    main: string;
    description: string;
}

interface WeatherResponse {
    alerts: AlertWeather[];
    cityName: string;
    current: CurrentWeather;
    hourly: HourlyWeather[];
}

interface GeoLocation {
    lat: number;
    lon: number;
    name: string;
}

export const getCompleteWeather = async (cityName: string) => {
    try {
        const geoResponse = await axios.get<GeoLocation[]>(`${baseURL_Location}?q=${cityName}&limit=1&appid=${api_Key}`)
        .then(res => res.data)

        if (!geoResponse) return null; 

        const [geoData] = geoResponse;  // Desestruturando o array geoResponse em geoResponse

        const weatherResponse = await axios.get<WeatherResponse>(`${baseURL_Weather}?lat=${geoData.lat}&lon=${geoData.lon}&units=metric&exclude=minutely&appid=${api_Key}`)
        .then(res => res.data);

        return {
            ...weatherResponse,
            cityName: geoData.name,
        }

    } catch (error) {
        console.error('Algo deu errado:', error)
    }



}