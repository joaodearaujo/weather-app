import './StandardButton.css'
import { StandardButtonProps } from './StandardButton.type'; 

const StandardButton = ({buttonName, style, onClick}: StandardButtonProps) => {
    return  <button className='standard-button'  style={style} onClick={onClick}>{buttonName}</button>
}

export default StandardButton;