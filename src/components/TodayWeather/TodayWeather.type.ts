import { CurrentWeather } from "../../Types/Weather";

export interface TodayWeatherProps {
    data: CurrentWeather;
    city: string;
}