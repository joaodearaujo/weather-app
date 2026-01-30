import './TitleIcon.css';
import { TitleIconProps } from './TitleIcon.type';

const TitleIcon = ({ title, img }: TitleIconProps) => {
    return (
        <div className="title-icon-container">
                <div className="title-icon__background ">
                    <img 
                    src={`./public/images/${img}.png`} 
                    alt={title} 
                    className="title-icon__image" 
                />
                <h2 className="title-icon__text">{title}</h2>
            </div>
        </div>
            
    );
};

export default TitleIcon;