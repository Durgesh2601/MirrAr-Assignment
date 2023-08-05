import { useState } from "react";
import WeatherCard from "./WeatherCard";
import WeatherInput from "./WeatherInput";
import "./index.css";

const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState({});
  const [forecastData, setForecastData] = useState({});
  const [isCelsius, setIsCelsius] = useState(true);

  return (
    <>
      <WeatherInput {...{ setWeatherData, setForecastData }} />
      <WeatherCard
        {...{
          weatherData,
          isCelsius,
          setIsCelsius,
          forecastData,
        }}
      />
    </>
  );
};

export default WeatherComponent;
