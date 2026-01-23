import './WeatherInfo.css'

const WeatherInfoCard = ({ label, value, img }) => {
    return(
        <div className="wi-card">
            <div className="wi-card__icon-background">
                <img className='wi-card__icon' src={`/src/assets/images/${img}.png`} alt="" />
            </div>
            <div className='wi-card__side-text-container'>
                <p className='wi-card__label'>{label}</p>
                <p className='wi-card__value'>{value}</p>
            </div>
        </div>
    )
}

const WeatherInfo = ({data}) => {

    if (!data) return null;

    const infoData = [
        { 
            label: 'Wind Speed', 
            // Agora acessamos direto do data, que já é o current
            value: `${data.wind_speed ?? 0} m/s`,
            img: 'wind' 
        },
        { 
            label: 'Rain Chance', 
            value: `${data.clouds ?? 0}%`,
            img: 'rain' 
        },
        { 
            label: 'Pressure', 
            value: `${data.pressure ?? 0} hPa`, // ?? serve para caso o valor da esquerda seja nulo ou indefinido, seja posto 0 no lugar desse valor
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
            {infoData.map((data, index) =>
                <WeatherInfoCard 
                    key={index}
                    label={data.label}
                    value={data.value}
                    img={data.img}
                />
            )}
        </div>
    )
}

export default WeatherInfo;