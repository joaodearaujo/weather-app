import './SunCycle.css';
import SmallCard from '../SmallCard/SmallCard';
import { SunCycleProps } from './SunCycle.type';

const SunRiseSet = ({data}: SunCycleProps) => {
    return (
        <div className="rss-container">
            <SmallCard label="Sunrise" img={'sunrise'} value={new Date(data.sunrise * 1000).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })} />
            <SmallCard label="Sunset" img={'sunset'} value={new Date(data.sunset * 1000).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })} /> 
        </div>
    )
}

export default SunRiseSet;