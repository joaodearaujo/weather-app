import './Background.css';
import { BackgroundProps } from './Background.type';

const Background = ({children}: BackgroundProps) => {
    return <div className="background-main">{children}</div>
}

export default Background;
