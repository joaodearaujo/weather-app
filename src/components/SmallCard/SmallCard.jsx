import './SmallCard.css'
import TittleIcon from '../TittleIcon/TittleIcon';

const SmallCard = ({ label, value, img }) => {
    return(
        <div className="small-card-container">
            <TittleIcon img={img}></TittleIcon>
            <div className='small-card__side-text-container'>
                <p className='small-card__label'>{label}</p>
                <p className='small-card__value'>{value}</p>
            </div>
        </div>
    )
}

export default SmallCard;