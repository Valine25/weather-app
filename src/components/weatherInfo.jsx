import styles from "./weatherInfo.module.css";
export default function WeatherInfo({ weather, loading, error }) {
  return (
    <div>
      {loading && <p className={styles.Error}>Loading...</p>}
        {error && <p className={styles.Error}>{error}</p>}
      {weather.main && weather.weather && weather.wind && (
        <div className={styles.weatherCard}>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="weather icon"
          />
          <p>City: {weather.name}</p>
          <p>Temperature: {(weather.main.temp - 273.15).toFixed(2)} °C</p>
          <p>Condition: {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}
