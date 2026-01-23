import './HourlyForecast.css'

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

    const InfoForecast = [
        {hour:'now', temp:`${Math.round(data[0  ].temp) ?? 0}°C`, img:'clouds'},
        {hour:'10 AM', temp:`${Math.round(data[10].temp) ?? 0}°C`, img:'clouds'},
        {hour:'11 AM', temp:`${Math.round(data[11].temp) ?? 0}°C`, img:'clouds'},
        {hour:'12 PM', temp:`${Math.round(data[12].temp) ?? 0}°C`, img:'clouds'},
        {hour:'1 PM', temp:`${Math.round(data[13].temp) ?? 0}°C`, img:'clouds'},
        {hour:'2 PM', temp:`${Math.round(data[14].temp) ?? 0}°C`, img:'clouds'},
    ];

    return (
        <div className="hf-container">
            <div className="hf-container__tittle">
                <div className="wi-card__icon-background">
                <img className='wi-card__icon' src={`/src/assets/images/clock.png`} alt="" />
            </div>
                <p className="hf-container__text">Hourly Forecast</p>
            </div>
            <div className="hf-container__cards">
                    {InfoForecast.map((data, index) =>
                        <HourlyForecastCard
                            key={index}
                            hour={data.hour}
                            temp={data.temp}
                            img={data.img}
                        />
                    )}
            </div>
        </div>

        
    )
}

export default HourlyForecast;