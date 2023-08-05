import { useState } from "react";
import { Button, Col, Input, Row, Typography, notification } from "antd";
import { getWeatherData, getForecastData } from "../../api/weatherApi";

const { Text } = Typography;

const WeatherInput = ({
  setWeatherData,
  setForecastData,
  isLoading,
  setIsLoading,
}) => {
  const [city, setCity] = useState("");

  const handleOnChange = (e) => {
    const value = e?.target?.value;
    setCity(value);
  };

  const openNotification = (msg = "") => {
    notification.open({
      message: <Text>{msg}</Text>,
    });
  };

  const handleGetWeatherData = async () => {
    setForecastData({});
    setWeatherData({});
    if (!city) return openNotification("Please enter a city name");
    setIsLoading(true);
    try {
      const response = await getWeatherData(city);
      if (response?.status !== 200)
        return alert("Failed to fetch weather data");
      const data = response?.data;
      setWeatherData(data);
      fetchForecastData(city);
    } catch (error) {
      setIsLoading(false);
      const {
        response: {
          data: { message = "" },
        },
      } = error;
      openNotification(message);
      setCity("");
      console.error(error);
    }
  };

  const fetchForecastData = async (city) => {
    try {
      const response = await getForecastData(city);
      if (response?.status !== 200)
        return alert("Failed to fetch forecast data");
      const data = response?.data;
      setForecastData(data);
    } catch (error) {
      console.error("Error fetching forecast data:", error);
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  return (
    <Row align="center" className="weather-input">
      <Col xs={20} md={8}>
        <Input
          size="large"
          placeholder="Enter a city name"
          value={city}
          onChange={handleOnChange}
          onPressEnter={handleGetWeatherData}
        />
      </Col>
      <Col xs={20} md={4}>
        <Button
          size="large"
          onClick={handleGetWeatherData}
          loading={isLoading}
          style={{ width: "100%" }}
        >
          <Text>Get Weather Info</Text>
        </Button>
      </Col>
    </Row>
  );
};

export default WeatherInput;
