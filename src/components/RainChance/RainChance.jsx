import './RainChance.css'
import BigCard from '../BigCard/BigCard'


const ChangeOfRainPercent = ({pop, hour}) => {
    const percentage = Math.round(pop);

    return (
        <div className="crp-container">
            <h1 className="crp-container__hour">{hour}</h1>
            <div className="crp-container__percentage-bar">
                <div 
                    className="crp-container__percentage-bar-fill" 
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
            <p className="crp-container__percentage-value">{percentage}%</p>
        </div>
    );
};

const ChanceOfRain = ({ data }) => {
    
   const infoRainChance = [
        {hour:'Now'},
        {hour:'Now'},
        {hour:'Now'},
        {hour:'Now'},
        {hour:'Now'},
        {hour:'Now'},
    ];

    const pop = data[0].humidity;

    return (
        <BigCard tittle={'Chance Of Rain'} img={'rain'}>
             <div className="cr-container">
                {infoRainChance.map((item, index) =>
                    <ChangeOfRainPercent 
                    key={index}
                    pop={pop}
                    hour={item.hour} />
                )}
            </div>
        </BigCard>   
        
    );
};

export default ChanceOfRain;