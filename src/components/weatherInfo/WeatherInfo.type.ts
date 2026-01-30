import { CurrentWeather } from "../../Types/Weather";

export interface WeatherInfoProps {
    data: CurrentWeather;
}

export interface InfoItem {
    label: string;
    value: string;
    img: string;
}