import "./WeatherDisplay.css";

export const WeatherDisplay = ({ weather, forecast, unit }) => {
  if (!weather)
    return (
      <div className="container" >
      <div className="weather-container">
          Search for a city to see the weather. 
      </div>
      </div>
    );

  const temperatureUnit = unit === "metric" ? "°C" : "°F";

  return (
    <div className="container" >
      <div className="weather-container">
        <h2 className="city-name">{weather.name}</h2>
        <div className="current-weather">
          <p className="temperature">
           {Math.round(weather.main.temp)} {temperatureUnit}
          </p>
          <p className="condition">
            {weather.weather[0].description === "overcast clouds"
              ? "Clouds"
              : weather.weather[0].description}
            {weather.weather[0].main === "Clouds" && (
              <i className="fas fa-cloud" />
            )}
            {weather.weather[0].main === "Rain" && (
              <i className="fas fa-umbrella" />
            )}
            {(weather.weather[0].main === "Sun" || weather.weather[0].main === "Mist" ) && <i className="fas fa-sun" />}
          </p>
        </div>
      </div>


      {/*  5 item day temp wheather */}

      {/* <div className="forecast-container-1">
        {forecast.slice(0, 5).map((day, index) => (
          <div key={index} className="forecast-day-1">
            <p className="date">
              {new Date(day.dt_txt).toLocaleString("en-US", {
                weekday: "long",
              })}
            </p>

            <p className="temperature">
              {" "}
              {Math.round(day.main.temp_min)} <span></span> {Math.round(day.main.temp_max)}{temperatureUnit}
            </p>

            <p className="condition">
              {day.weather[0].description}
              {day.weather[0].main === "Clouds" && (
                <i className="fas fa-cloud" />
              )}
              {day.weather[0].main === "Rain" && (
                <i className="fas fa-umbrella" />
              )}
              {day.weather[0].main === "Sun" && <i className="fas fa-sun" />}
            </p>
          </div>
        ))}
      </div> */}

      {/*  5 item day temp wheather   */}

      <div className="forecast-container-spacing">
        <h3 className="forecast-title">5-Day Forecast:</h3>
        <div className="forecast-container">
          {forecast.slice(0, 5).map((day, index) => (
            <div key={index} className="forecast-day">
              <div>
              <p className="weekday">
                {new Date(day.dt_txt).toLocaleString("en-US", {
                  weekday: "long",
                })}
              </p>
              <p className="date">{day.dt_txt.split(" ")[0]}</p>
              </div>

            <div>
              <p className="temperature">
                Temp: {Math.round(weather.main.temp)} {temperatureUnit}
              </p>
              <p className="condition">
                {day.weather[0].description}
                {day.weather[0].main === "Clouds" && (
                  <i className="fas fa-cloud" />
                )}
                {day.weather[0].main === "Rain" && (
                  <i className="fas fa-umbrella" />
                )}
                {day.weather[0].main === "Sun" && <i className="fas fa-sun" />}
              </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
