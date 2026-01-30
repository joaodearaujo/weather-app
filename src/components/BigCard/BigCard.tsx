import './BigCard.css'
import TitleIcon from '../TitleIcon/TitleIcon';
import { BigCardProps } from './BigCard.type';

const BigCard = ({title, children, img, style}: BigCardProps) => {
    return (
        <div className="big-card-container" style={style}>  {/* Use React.CSSProperties props que são estilizações em CSS */}
            <div className="big-card-container__title">
                <TitleIcon img={`${img}`}></TitleIcon>
                <p className="big-card-container__text">{title}</p>
            </div>
                {children}
        </div>   
    )
}

export default BigCard;