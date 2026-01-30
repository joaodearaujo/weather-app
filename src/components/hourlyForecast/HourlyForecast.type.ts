import { HourlyWeather } from "../../Types/Weather";

export interface HourlyForecastCardProps {
    hour: string;
    temp: string;
    img: string;
}

export interface HourlyForecastProps {
    data: HourlyWeather[];
}