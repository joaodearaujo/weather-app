import './TodayWeather.css'

const TodayWeather = ({data, city, setCity, handleSearch}) => {

    return (
        <div className="tw-container">
            <div className="tw-container__header">
                <h2 className="tw-container__city">{city}</h2>
                
                <div className='tw-container__search'>
                    <input 
                    className="tw-container__input"
                    type="text" 
                    placeholder="Enter City Name" 
                    onChange={(e) => setCity(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}/>

                    <button className='tw-container__button'><img className='tw-container__search-icon' src="/src/assets/images/search.png" alt="" onClick={handleSearch}/></button>
                </div>
            </div>
            
            <div className="tw-container__main">
                <div className="tw-container__temp-container">
                    <h1 className="tw-container__temp">{Math.round(data.temp)}°C</h1>
                    <p className="tw-container__temp-description">Feels like {Math.round(data.feels_like)}°C</p>
                </div>
                <div className="tw-container__weather">
                <img className="tw-container__weather-icon" src={`/src/assets/images/clouds.png`} alt="Weather Icon" />
                    <p className="tw-container__weather-description">{data.weather[0].description}</p>
                </div>
            </div>
        
            {/* <div className="tw-container__footer"> 
                <p className="tw-container__date">January 18, 16:14</p> 
                <p className="tw-container__temp-variation">Day 3°<br />Night -1°</p> 
             </div>  */}
        </div>
    )
}

export default TodayWeather;