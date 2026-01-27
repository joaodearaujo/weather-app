import './StandardButton.css'

const StandardButton = ({buttonName, style, onClick}) => {
    return  <button className='standard-button'  style={style} onClick={onClick}>{buttonName}</button>
}

export default StandardButton;