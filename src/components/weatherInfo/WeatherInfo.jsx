import './WeatherInfo.css'
import SmallCards from '../SmallCard/SmallCard';

const WeatherInfo = ({data}) => {

    if (!data) return null;

    const infoData = [
        { 
            label: 'Wind Speed', 
            value: `${data.wind_speed ?? 0} m/s`,
            img: 'wind info' 
        },
        { 
            label: 'Humidity', 
            value: `${data.humidity ?? 0}%`,
            img: 'humidity' 
        },
        { 
            label: 'Pressure', 
            value: `${data.pressure ?? 0} hPa`, 
            img: 'pressure' 
        },
        { 
            label: 'UV Index', 
            value: `${data.uvi ?? 0}`,
            img: 'uv' 
        }
    ];  

    return(
        <div className="weather-info-container">
            {infoData.map((info, index) =>
                <SmallCards 
                    key={index}
                    label={info.label}
                    value={info.value}
                    img={info.img}
                />
            )}
        </div>
    )
}

export default WeatherInfo;