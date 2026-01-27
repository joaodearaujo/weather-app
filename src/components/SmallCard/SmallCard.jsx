import './SmallCard.css'
import TitleIcon from '../TitleIcon/TitleIcon';

const SmallCard = ({ label, value, img }) => {
    return(
        <div className="small-card-container">
            <TitleIcon img={img}></TitleIcon>
            <div className='small-card__side-text-container'>
                <p className='small-card__label'>{label}</p>
                <p className='small-card__value'>{value}</p>
            </div>
        </div>
    )
}

export default SmallCard;