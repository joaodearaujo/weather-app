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

    const infoTempHour = [
        {hour:'Now', temp:`${Math.round(data[0].temp) ?? 0}°C`, img:'clouds'},
        {hour:'10 AM', temp:`${Math.round(data[10].temp) ?? 0}°C`, img:'clouds'},
        {hour:'11 AM', temp:`${Math.round(data[11].temp) ?? 0}°C`, img:'clouds'},
        {hour:'12 PM', temp:`${Math.round(data[12].temp) ?? 0}°C`, img:'clouds'},
        {hour:'1 PM', temp:`${Math.round(data[13].temp) ?? 0}°C`, img:'clouds'},
        {hour:'2 PM', temp:`${Math.round(data[14].temp) ?? 0}°C`, img:'clouds'},
        {hour:'3 PM', temp:`${Math.round(data[15].temp) ?? 0}°C`, img:'clouds'},
        {hour:'3 PM', temp:`${Math.round(data[15].temp) ?? 0}°C`, img:'clouds'},
        {hour:'3 PM', temp:`${Math.round(data[15].temp) ?? 0}°C`, img:'clouds'},
        {hour:'3 PM', temp:`${Math.round(data[15].temp) ?? 0}°C`, img:'clouds'},
        {hour:'3 PM', temp:`${Math.round(data[15].temp) ?? 0}°C`, img:'clouds'},
    ];

    return (
      <BigCard tittle={'Hourly Forecast'} img={'clock'}>
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