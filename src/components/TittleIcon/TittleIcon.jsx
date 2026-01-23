import './TittleIcon.css'

const TittleIcon = ({img}) => {
    return (
            
        <div className="tittle-icon-container">
            <div className="tittle-icon__background">
                <img className='tittle-icon__icon' src={`/src/assets/images/${img}.png`} alt="Tittle Icon" />
            </div>
        </div>
    )
}

export default TittleIcon;