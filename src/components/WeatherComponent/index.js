import { useState } from "react";
import WeatherCard from "./WeatherCard";
import WeatherInput from "./WeatherInput";
import "./index.css";

const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState({});
  const [forecastData, setForecastData] = useState({});
  const [isCelsius, setIsCelsius] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <WeatherInput
        {...{ setWeatherData, setForecastData, isLoading, setIsLoading }}
      />
      <WeatherCard
        {...{
          weatherData,
          isCelsius,
          setIsCelsius,
          forecastData,
          isLoading,
        }}
      />
    </>
  );
};

export default WeatherComponent;
