import './TodayWeather.css'
import BigCard from '../BigCard/BigCard'

const TodayWeather = ({data, city}) => {

    const img = data.weather[0].main;

    return (        
            <div className="tw-container">
                <h1 className='tw-container__city'>{city}</h1>
                <div className="tw-container__main">
                    <div className="tw-container__temp-container">
                        <h1 className="tw-container__temp">{Math.round(data.temp)}°C</h1>
                        <p className="tw-container__temp-description">Feels like {Math.round(data.feels_like)}°C</p>
                    </div>
                    <div className="tw-container__weather">
                    <img className="tw-container__weather-icon" src={`./public/images/${img}.png`} alt="Weather Icon" />
                        <p className="tw-container__weather-description">{data.weather[0].description}</p>
                    </div>
                </div>
            </div>
    )
}

export default TodayWeather;