import './MiniCards.css'
import TittleIcon from '../TittleIcon/TittleIcon';

const MiniCards = ({ label, value, img }) => {
    return(
        <div className="mini-card-container">
            <TittleIcon img={img}></TittleIcon>
            <div className='mini-card-container__side-text-container'>
                <p className='mini-card-container__label'>{label}</p>
                <p className='mini-card-container__value'>{value}</p>
            </div>
        </div>
    )
}

export default MiniCards;