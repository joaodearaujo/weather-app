import './StandardButton.css'

const StandardButton = ({buttonName, style}) => {
    return  <button className='standard-button'  style={style}>{buttonName}</button>
}

export default StandardButton;