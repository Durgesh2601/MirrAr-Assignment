import {
  Card,
  Col,
  Divider,
  Image,
  Row,
  Space,
  Switch,
  Typography,
} from "antd";
import {
  getFormattedTemperature,
  getIconUrl,
  getWindDirection,
} from "../../utils/helpers";

const { Title, Text } = Typography;

const WeatherCard = ({
  weatherData = {},
  isCelsius,
  setIsCelsius,
  forecastData = {},
  setForecastData,
}) => {
  const { weather = [], main = {}, wind = {} } = weatherData || {};
  const showData =
    Object.keys(weatherData)?.length > 0 ||
    Object.keys(forecastData)?.length > 0;

  const handleScaleChange = (value) => {
    setIsCelsius(value);
  };

  const weatherDetails = [
    {
      id: 1,
      label: "Current Temperature",
      value: getFormattedTemperature(weatherData?.main?.temp, isCelsius),
    },
    {
      id: 2,
      label: "Min. Temperature",
      value: getFormattedTemperature(weatherData?.main?.temp_min, isCelsius),
    },
    {
      id: 3,
      label: "Max. Temperature",
      value: getFormattedTemperature(weatherData?.main?.temp_max, isCelsius),
    },
    {
      id: 4,
      label: "Description",
      value: weatherData?.weather?.[0]?.description,
    },
    {
      id: 5,
      label: "Wind Direction",
      value: getWindDirection(weatherData?.wind?.deg),
    },
    { id: 6, label: "Wind Speed", value: weatherData?.wind?.speed },
    { id: 7, label: "Humidity", value: weatherData?.main?.humidity },
  ];

  const renderForecast = () => {
    if (!forecastData) return null;

    const forecastEntries = forecastData?.list;

    return forecastEntries.map((entry) => {
      const {
        dt,
        weather = [],
        main: { temp },
      } = entry;
      const timestamp = dt * 1000; // Convert to milliseconds
      const date = new Date(timestamp);
      const formattedDate = date.toLocaleDateString();
      const formattedTime = date.toLocaleTimeString();
      const averageTemp = getFormattedTemperature(temp, isCelsius);
      const description = weather[0]?.description;
      const weatherIconUrl = getIconUrl(weather[0]?.icon);

      return (
        <Row key={dt} align="middle">
          <Col span={10}>
            <Text>
              {formattedDate} ( {formattedTime} )
            </Text>
          </Col>
          <Col span={4}>
            <Text>{averageTemp}</Text>
          </Col>
          <Col span={6}>
            <Text>{description}</Text>
          </Col>
          <Col span={4}>
            <Image src={weatherIconUrl} alt="Weather-Icon" preview={false} />
          </Col>
        </Row>
      );
    });
  };

  return (
    showData && (
      <>
        <Row align="end" className="switch-row">
          <Col>
            <Switch onChange={handleScaleChange} checked={isCelsius} />
            <Text>
              Change Temperature Scale ({isCelsius ? " °C " : " °F "})
            </Text>
          </Col>
        </Row>
        <Row className="weather-card-row" justify="center">
          <Col span={6}>
            <Card className="weather-card">
              <Row align="middle" justify="center">
                <Col span={8}>
                  <Title level={3}>{weatherData?.name}</Title>
                </Col>
                <Col>
                  <Image
                    preview={false}
                    src={getIconUrl(weather?.[0]?.icon)}
                    alt="icon"
                    height={70}
                  />
                </Col>
              </Row>
              <Divider style={{ color: "white" }} />
              {weatherDetails.map(({ id, label, value }) => (
                <Row key={id}>
                  <Text strong>
                    {label} : {value}
                  </Text>
                </Row>
              ))}
            </Card>
          </Col>
          <Col>
            <Card className="weather-card">
              <Row align="middle" justify="center">
                <Col>
                  <Title level={5}>5-Day Forecast in {weatherData?.name}</Title>
                </Col>
              </Row>
              <Divider />
              <Space direction="vertical" className="forecast-row">
                {renderForecast()}
              </Space>
            </Card>
          </Col>
        </Row>
      </>
    )
  );
};

export default WeatherCard;
