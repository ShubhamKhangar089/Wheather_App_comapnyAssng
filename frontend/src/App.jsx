import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react'
import './App.css'
import { SearchComponent } from './components/Search/Search'
import { WeatherDisplay } from './components/WeatherDisplay/WeatherDisplay';
import { fetchFavorites, fetchForecast, fetchWeather, removeFavorite } from './Services/Services';
import Background from './components/background';
import { Favorite } from './components/Favorite/Favorite';

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [unit, setUnit] = useState('metric'); // Default to Celsius

  const handleSearch = async (city) => {
    const weatherData = await fetchWeather(city, unit);
    const forecastData = await fetchForecast(city, unit);
    setWeather(weatherData);
    setForecast(forecastData);
    localStorage.setItem('lastSearchedCity', city);
  };

  const handleRemoveFavorite = async (city) => {
    await removeFavorite(city);
    const updatedFavorites = await fetchFavorites();
    setFavorites(updatedFavorites);
  };

  return (
    <Router>
      <div className='app-container'>
        <Background />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchComponent onSearch={handleSearch} />
                <WeatherDisplay weather={weather} forecast={forecast} unit={unit} />
              </>
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorite
                favorites={favorites}
                onRemoveFavorite={handleRemoveFavorite}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App;