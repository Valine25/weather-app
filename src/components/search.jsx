import { useEffect, useState } from "react";
import WeatherInfo from "./weatherInfo";
import styles from "./search.module.css";
const URL = "https://api.openweathermap.org/data/2.5/weather";
const api_key = "your_api_key_here";

export default function Search() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  
  async function fetchWeather() {
    
    setLoading(true);
    setError("");
    try {
      const result = await fetch(`${URL}?q=${city}&appid=${api_key}`);
      const data = await result.json();
      if (data.cod !== 200) throw new Error(data.message);
      setWeather(data);
      // console.log(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.container}>
      <input className={styles.input}
        onChange={(e) => setCity(e.target.value)}
        type="text"
        placeholder="Enter the city name"
        value={city}
      ></input>
      <button className={styles.button} onClick={fetchWeather}>Enter</button>
       <WeatherInfo weather={weather} loading={loading} error={error} />
    </div>
  );
}


