import './DaysSelection.css'
import StandardButton from '../StandardButton/StandardButton';

const DaysSelection = () => {
    const periods: string[] = ["Today", "Next Seven Days"];

    return (
        <div className="days-selection-container">
            {periods.map((item, index) => (
                <StandardButton key={index} buttonName={item}/>
            ))}
        </div>
    )
};

export default DaysSelection;