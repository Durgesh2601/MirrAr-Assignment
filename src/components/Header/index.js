import { Row, Typography } from "antd";

const { Title, Text } = Typography;

const Header = () => {
  return (
    <>
      <Row align="center" className="header">
        <Title level={2}>WeatherScope</Title>
      </Row>
      <Row align="center">
        <Text>Whispering Tomorrow's Weather Today</Text>
      </Row>
    </>
  );
};

export default Header;
