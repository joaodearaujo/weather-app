import './BigCard.css'
import TitleIcon from '../TitleIcon/TitleIcon';

const BigCard = ({title, children, img, style}) => {
    return (
        <div className="big-card-container" style={style}>
            <div className="big-card-container__title">
                <TitleIcon img={`${img}`}></TitleIcon>
                <p className="big-card-container__text">{title}</p>
            </div>
                {children}
        </div>   
    )
}

export default BigCard;