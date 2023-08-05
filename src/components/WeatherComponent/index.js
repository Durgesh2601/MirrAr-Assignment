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
      <WeatherInput
        {...{ weatherData, setWeatherData, forecastData, setForecastData }}
      />
      <WeatherCard
        {...{
          weatherData,
          setWeatherData,
          isCelsius,
          setIsCelsius,
          forecastData,
          setForecastData,
        }}
      />
    </>
  );
};

export default WeatherComponent;
