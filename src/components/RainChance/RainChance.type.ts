import { HourlyWeather, WeatherResponse } from "../../Types/Weather"

export interface ChangeOfRainPercentProps {
    pop: string;
    hour: string;
}

export interface ChanceOfRainProps {
    data: HourlyWeather[];
}