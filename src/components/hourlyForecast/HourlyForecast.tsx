import './HourlyForecast.css'
import BigCard from '../BigCard/BigCard'
import { HourlyForecastCardProps } from './HourlyForecast.type'
import { HourlyForecastProps } from './HourlyForecast.type'
import { HourlyWeather } from '../../Types/Weather'

const HourlyForecastCard = ({hour, temp, img}: HourlyForecastCardProps) => {
    
    return (
        <div className="hf-card-container">
            <p className="hf-card-container__hour">{hour}</p>
            <img src={`./public/images/${img}.png`} alt="Weather Icon" className="hf-card-container__icon" />
            <p className="hf-card-container__temp">{temp}</p>
        </div>
        )
}

const HourlyForecast = ({data}:HourlyForecastProps) => {

    const infoTempHour = data.slice(0, 13).map((item, index) => ({
    hour: index === 0 ? 'Now' : `${index}h`, 
    temp: `${Math.round(item.temp ?? 0)}°C`,
    img: item.weather[0].main,
  }));

    return (
      <BigCard title={'Hours Forecast (12h)'} img={'hourly forecast'}>
        <div className="hf-container__cards ">
            {infoTempHour.map((data, index) =>

                            <HourlyForecastCard
                                key={index}
                                hour={data.hour}
                                temp={data.temp}
                                img={data.img}
                            />
                        )}
        </div>
      </BigCard>
    )
}

export default HourlyForecast;