import './DaysSelection.css'

const ButtonPeriod = ({period}) => {
    return  <button className='bp_button'>{period}</button>
}

const ButtonArea = () => {
    const periods = ["Today", "Tomorrow", "10 days"];

    return (
        <div className="button-area-container">
            {periods.map((item, index) => (
                <ButtonPeriod key={index} period={item}/>
            ))}
        </div>
    )
}

export default ButtonArea;