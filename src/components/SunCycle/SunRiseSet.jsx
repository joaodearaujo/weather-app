import './SunRiseSet.css';

const SunRiseSetCard = ({hour}) => {
    return (
        <div className="rssd-container">
                <div className='rssd-container__text-container'>
                <p className='rssd-container__label'>Sunrise</p>
                <p className='rssd-container__value'>{hour} AM</p>
            </div>
        </div>
    )
}

const SunRiseSet = ({data}) => {
    return (
        <div className="rss-container">
    <SunRiseSetCard hour={new Date(data.sunrise * 1000).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })} />
    <SunRiseSetCard hour={new Date(data.sunset * 1000).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })} /> 
        </div>
    )
}

export default SunRiseSet;