import { ReactNode } from "react";

export interface AlertWeather {
    description: string;
    event: string;
    start: number;
}

export interface CurrentWeather {
    temp: number;
    feels_like: number;
    humidity: number;
    pressure: number;
    wind_speed: number;
    sunrise: number;
    sunset: number;
    uvi: number;
    weather: {
        main: string;
        description: string;
        icon: string;
    }[]; 
}
export interface HourlyWeather {
    feels_like: number;
    wind_speed: number;
    temp: number;
    humidity: number;
    pressure: number;
    sunrise: number;
    sunset: number;
    pop: number;
    uvi: number;
    weather: {main: string, 
              description: string
    }[];
}

export interface WeatherResponse {
    alerts: AlertWeather[];
    cityName: string;
    current: CurrentWeather;
    hourly: any[];
    timezone:  string;
}

export  interface GeoLocation {
    lat: number;
    lon: number;
    name: string;
}

