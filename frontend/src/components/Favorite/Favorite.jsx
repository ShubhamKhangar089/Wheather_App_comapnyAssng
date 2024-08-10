import { useNavigate } from 'react-router-dom';
import './Favorite.css';

export const Favorite=({ favorites, onRemoveFavorite })=> {
 const Navigate = useNavigate()
    const handleGOBack=()=>{
        Navigate('/');
    }
  return (
    <div className="favorite-container">
        <div className='fav-nav'>
        <h3>Favorite Cities</h3>
        <p id="Goback"onClick={handleGOBack}><b>Home</b></p>
        </div>
   
      <ul>
        {favorites.map((city, index) => (
          <li key={index}>
            <span onClick={() => onSearch(city)}>{city}</span>
            <button onClick={() => onRemoveFavorite(city)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}