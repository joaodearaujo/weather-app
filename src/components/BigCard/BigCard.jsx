import './BigCard.css'
import TittleIcon from '../TittleIcon/TittleIcon';

const BigCard = ({tittle, children, img, style}) => {
    return (
        <div className="big-card-container" style={style}>
            <div className="big-card-container__tittle">
                <TittleIcon img={`${img}`}></TittleIcon>
                <p className="big-card-container__text">{tittle}</p>
            </div>
                {children}
        </div>   
    )
}

export default BigCard;