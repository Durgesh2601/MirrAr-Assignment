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
      value: getFormattedTemperature(main?.temp, isCelsius),
    },
    {
      id: 2,
      label: "Min. Temperature",
      value: getFormattedTemperature(main?.temp_min, isCelsius),
    },
    {
      id: 3,
      label: "Max. Temperature",
      value: getFormattedTemperature(main?.temp_max, isCelsius),
    },
    {
      id: 4,
      label: "Description",
      value: weatherData?.weather?.[0]?.description,
    },
    {
      id: 5,
      label: "Wind Direction",
      value: getWindDirection(wind?.deg),
    },
    { id: 6, label: "Wind Speed", value: wind?.speed },
    { id: 7, label: "Humidity", value: main?.humidity },
  ];

  const renderForecast = () => {
    if (!forecastData) return null;

    const forecastEntries = forecastData?.list;

    return forecastEntries?.map((entry) => {
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
        <Row justify="center" align="middle" className="switch-row">
          <Switch onChange={handleScaleChange} checked={isCelsius} />
          <Text>Change Temperature Scale ({isCelsius ? " °C " : " °F "})</Text>
        </Row>
        <Row className="weather-card-row" justify="center">
          <Col xs={20} sm={16} md={10}>
            <Card className="weather-card">
              <Row align="middle" justify="center">
                <Col xs={12} span={8}>
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
              <Divider />
              {weatherDetails.map(({ id, label, value }) => (
                <Row key={id} justify="center">
                  <Text strong>
                    {label} : {value}
                  </Text>
                </Row>
              ))}
            </Card>
          </Col>
          <Col xs={20} sm={16} md={9}>
            <Card className="weather-card">
              <Row align="middle" justify="center">
                <Col className="text-row">
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
