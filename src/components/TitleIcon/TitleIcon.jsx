import './TitleIcon.css'

const TittleIcon = ({img}) => {
    return (
            
        <div className="title-icon-container">
            <div className="title-icon__background">
                <img className='title-icon__icon' src={`/src/assets/images/${img}.png`} alt="title Icon" />
            </div>
        </div>
    )
}

export default TittleIcon;