import './RainChance.css'

const ChangeOfRainPercent = ({ pop }) => {
    const percentage = Math.round(pop * 100);

    return (
        <div className="crp-container">
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
    return (
        <div className="cr-container">
            <h1 className="cr-container-tiitle">Chance Of Rain</h1>
            <ChangeOfRainPercent pop={data[0].pop} />
        </div>
    );
};

export default ChanceOfRain;