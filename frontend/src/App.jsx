import { useState } from 'react'
import './App.css'
import { SearchComponent } from './components/Search/Search'
import { WeatherDisplay } from './components/WeatherDisplay/WeatherDisplay';
import { fetchForecast, fetchWeather } from './Services/Services';
import Background from './components/background';

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  // const [favorites, setFavorites] = useState([]);
  const [unit, setUnit] = useState('metric'); // Default to Celsius
  // const [lastSearchedCity, setLastSearchedCity] = useState('');

  //1 handleSearch search component
    const handleSearch = async (city) => {
    const weatherData = await fetchWeather(city, unit);
    const forecastData = await fetchForecast(city, unit);
    setWeather(weatherData);
    setForecast(forecastData);
    // setLastSearchedCity(city);
    localStorage.setItem('lastSearchedCity', city);
  };

  return (
    <>
   <div >
    <Background />
    <SearchComponent onSearch={handleSearch} />
    <WeatherDisplay weather={weather} forecast={forecast} unit={unit}/>
   </div>
    </>
  )
}

export default App

// src/App.js

// import React, { useState, useEffect } from 'react';
// import Search from './components/Search/Search';
// import WeatherDisplay from './components/WeatherDisplay/WeatherDisplay';
// import Favorite from './components/Favorite/Favorite';
// // import './assets/styles/App.css'; 
// import { fetchWeather, fetchForecast, fetchFavorites, addFavorite, removeFavorite } from './services/api';

// function App() {
//   const [weather, setWeather] = useState(null);
//   const [forecast, setForecast] = useState([]);
//   const [favorites, setFavorites] = useState([]);
//   const [unit, setUnit] = useState('metric'); // Default to Celsius
//   const [lastSearchedCity, setLastSearchedCity] = useState('');

//   useEffect(() => {
//     // Load favorites on mount
//     fetchFavorites().then(data => setFavorites(data));

//     // Load last searched city from local storage
//     const city = localStorage.getItem('lastSearchedCity');
//     if (city) {
//       handleSearch(city);
//     }
//   }, []);

//   const handleSearch = async (city) => {
//     const weatherData = await fetchWeather(city, unit);
//     const forecastData = await fetchForecast(city, unit);
//     setWeather(weatherData);
//     setForecast(forecastData);
//     setLastSearchedCity(city);
//     localStorage.setItem('lastSearchedCity', city);
//   };

//   const handleToggleUnit = () => {
//     const newUnit = unit === 'metric' ? 'imperial' : 'metric';
//     setUnit(newUnit);
//     if (lastSearchedCity) {
//       handleSearch(lastSearchedCity);
//     }
//   };

//   const handleAddFavorite = async (city) => {
//     await addFavorite(city);
//     const updatedFavorites = await fetchFavorites();
//     setFavorites(updatedFavorites);
//   };

//   const handleRemoveFavorite = async (city) => {
//     await removeFavorite(city);
//     const updatedFavorites = await fetchFavorites();
//     setFavorites(updatedFavorites);
//   };

//   return (
//     <div className="app-container">
//       <Search onSearch={handleSearch} />
//       <button onClick={handleToggleUnit}>
//         Toggle to {unit === 'metric' ? 'Fahrenheit' : 'Celsius'}
//       </button>
//       <WeatherDisplay weather={weather} forecast={forecast} unit={unit} />
//       <Favorite
//         favorites={favorites}
//         onRemoveFavorite={handleRemoveFavorite}
//         onSearch={handleSearch}
//         onAddFavorite={handleAddFavorite}
//       />
//     </div>
//   );
// }

// export default App;

