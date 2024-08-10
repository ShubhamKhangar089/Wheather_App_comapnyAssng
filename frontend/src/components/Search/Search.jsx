import {useState } from 'react';
import './Search.css'
import { Favorite } from '../Favorite/Favorite';
import { useNavigate } from 'react-router-dom';

export const SearchComponent = ({onSearch})=>{
   const [city ,setCity] = useState('');
   const navigate = useNavigate();
   console.log("city", city);
    const handleSearch=()=>{
          onSearch(city);
          setCity(' ');
    }

    const handleClickFav=()=>{
        navigate('/favorites')
    }
    return(
        <div className='search-container'>
        <input type='text' 
               placeholder='Enter City Name'
               value={city}
               onChange={(e)=> setCity(e.target.value)}
         />
        
         <button onClick={handleSearch}>Search</button>

         <button type='link' onClick={handleClickFav}>Favorites</button>
        </div>
    )
}

