import { Row, Typography } from "antd";

const { Title, Text } = Typography;

const Header = () => {
  return (
    <>
      <Row align="center" className="header text-row">
        <Title level={2}>WeatherScope</Title>
      </Row>
      <Row className="text-row" justify="center">
        <Text>Whispering Tomorrow's Weather Today</Text>
      </Row>
    </>
  );
};

export default Header;
