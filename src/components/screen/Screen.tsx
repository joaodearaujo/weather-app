import './Screen.css';
import { ScreenProps } from './Screen.type';


const Screen = ({children}: ScreenProps) => { 

  return <div className="screen-container">{children}</div>;
};          

export default Screen;