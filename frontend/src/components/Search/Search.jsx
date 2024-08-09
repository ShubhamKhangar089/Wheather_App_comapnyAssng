import {useState } from 'react';
import './Search.css'

export const SearchComponent = ({onSearch})=>{
   const [city ,setCity] = useState('');
   console.log("city", city);
    const handleSearch=()=>{
          onSearch(city);
          setCity(' ');
    }

    return(
        <div className='search-container'>
        <input type='text' 
               placeholder='Enter City Name'
               value={city}
               onChange={(e)=> setCity(e.target.value)}
         />
        
         <button onClick={handleSearch}>Search</button>
        </div>
    )
}

