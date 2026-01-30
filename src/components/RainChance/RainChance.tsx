import './RainChance.css'
import BigCard from '../BigCard/BigCard'
import { ChangeOfRainPercentProps } from './RainChance.type';
import { ChanceOfRainProps } from './RainChance.type';
const ChangeOfRainPercent = ({pop, hour} : ChangeOfRainPercentProps) => {
    const percentage = pop;

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

const ChanceOfRain = ({data}: ChanceOfRainProps) => {
    
   const infoRainChance = data.slice(0, 13).map((item, index) => ({
        hour: index === 0 ? 'Now' : `${index}h`,
        pop: `${Math.round((item.pop * 100 ))}`
   }));

    return (
        <BigCard title={'Chance Of Rain (12h)'} img={'rain chance'}>
             <div className="cr-container">
                {infoRainChance.map((data, index) =>
                    <ChangeOfRainPercent 
                    key={index}
                    pop={data.pop}
                    hour={data.hour} />
                )}
            </div>
        </BigCard>   
        
    );
};

export default ChanceOfRain;