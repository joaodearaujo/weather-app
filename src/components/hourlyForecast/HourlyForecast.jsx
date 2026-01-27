import './HourlyForecast.css'
import BigCard from '../BigCard/BigCard'

const HourlyForecastCard = ({hour, temp, img}) => {
    
    return (
        <div className="hf-card-container">
            <p className="hf-card-container__hour">{hour}</p>
            <img src={`/src/assets/images/${img}.png`} alt="" className="hf-card-container__icon" />
            <p className="hf-card-container__temp">{temp}</p>
        </div>
        )
}

const HourlyForecast = ({data}) => {


    const infoTempHour = data.slice(0, 13).map((item, index) => ({
    hour: index === 0 ? 'Now' : `${index}h`, 
    temp: `${Math.round(item.temp ?? 0)}°C`,
    img: 'clouds',
  }));

    return (
      <BigCard title={'Hours Forecast (12h)'} img={'clock'}>
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