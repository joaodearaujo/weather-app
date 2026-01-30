import './Search.css';
import StandardButton from '../StandardButton/StandardButton';
import { SearchProps } from './Search.type';

const Search = ({handleSearch, setCity}: SearchProps) => {
    return (
        <div className="search-card">                
                <div className='search-card__container'>
                    <input 
                    className="search-card__input"
                    type="text" 
                    placeholder="Enter City Name" 
                    onChange={(e) => setCity(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}/>

                    <StandardButton 
                        buttonName={'Search'} 
                        style={{ width: 'auto'}}
                        onClick={handleSearch}></StandardButton>
                </div>
            </div>
    )
}

export default Search;