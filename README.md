# WeatherScope App

Welcome to the WeatherScope App! This application allows you to fetch weather information for a city and view a 5-day forecast.

## Getting Started

### Prerequisites

- Node.js and npm (Node Package Manager) should be installed on your machine.

### Setup

1. Clone the repository:

   ```git clone https://github.com/Durgesh2601/WeatherScope.git```

2. Navigate to the project directory if not in.
   ```cd weather-app```

4. Create a ```.env``` file in the root directory of the project and add your API key for OpenWeatherMap (have given mine for example). Use the following format:

   ```
   REACT_APP_WEATHER_API_KEY=28a85fd0a02ec5ee6855575e3e35a023
   REACT_APP_WEATHER_API_URL=https://api.openweathermap.org/data/2.5/weather/
   REACT_APP_FORECAST_API_URL=https://api.openweathermap.org/data/2.5/forecast/
   REACT_APP_WEATHER_ICON_URL=http://openweathermap.org/img/wn/

5. Install project dependencies:

   ```npm install```

### Running the Application

1. Start the application:
   
   ```npm start```

2. Open your web browser and visit [http://localhost:3000](http://localhost:3000) to access the application.

### Using the Application

- Enter a city name in the input field.
- Press the "Enter" key or click the "Get Weather Info" button to fetch weather data for the entered city.
- Toggle between Celsius and Fahrenheit using the provided switch.

## Notes

- Keep your API keys and sensitive information private. Do not share or commit them to public repositories.

## Acknowledgements

This project was developed using the Ant Design library and the OpenWeatherMap API.
