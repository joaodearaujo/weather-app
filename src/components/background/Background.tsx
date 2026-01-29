import './Background.css';
import { BackgroundProps } from '../../Types/Weather';

const Background = ({children}: BackgroundProps) => {
    return <div className="background-main">{children}</div>
}

export default Background;
