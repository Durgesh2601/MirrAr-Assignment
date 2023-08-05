import { useState } from "react";
import { Button, Col, Input, Row, Typography } from "antd";
import { getWeatherData, getForecastData } from "../../api/weatherApi";
import { forecastMockData, weatherMockData } from "../../utils/helpers";

const { Text } = Typography;

const WeatherInput = ({ setWeatherData, setForecastData }) => {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);

  const handleOnChange = (e) => {
    const value = e?.target?.value;
    setCity(value);
  };

  const handleGetWeatherData = async () => {
    if (!city) return alert("Please enter a city name");
    setLoading(true);
    try {
      //   const response = await getWeatherData(city);
      //   if (response?.status !== 200)
      //     return alert("Failed to fetch weather data");
      //   const data = response?.data;
      const data = weatherMockData;
      setWeatherData(data);
      fetchForecastData(city);
    } catch (error) {
      setLoading(false);
      const {
        response: {
          data: { message = "" },
        },
      } = error;
      alert(message);
      setCity("");
      console.error(error);
    }
  };

  const fetchForecastData = async (city) => {
    try {
      // const response = await getForecastData(city);
      // if (response?.status !== 200)
      //   return alert("Failed to fetch forecast data");
      // const data = response?.data;
      const data = forecastMockData;
      setForecastData(data);
    } catch (error) {
      console.error("Error fetching forecast data:", error);
      setLoading(false);
    }
    setLoading(false);
  };

  return (
    <Row align="center" className="weather-input">
      <Col xs={20} md={8}>
        <Input
          size="large"
          placeholder="Enter a city name"
          value={city}
          onChange={handleOnChange}
        />
      </Col>
      <Col xs={20} md={4}>
        <Button
          size="large"
          onClick={handleGetWeatherData}
          loading={loading}
          style={{ width: "100%" }}
        >
          <Text>Get Weather Info</Text>
        </Button>
      </Col>
    </Row>
  );
};

export default WeatherInput;
