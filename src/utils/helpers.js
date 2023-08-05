export const getWindDirection = (degrees) => {
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  const index = Math.round(degrees / 45) % 8;
  return directions[index];
};

export const getFormattedTemperature = (temp = 0, isCelsius = true) => {
  return isCelsius ? `${temp} °C` : `${((temp * 9) / 5 + 32).toFixed(2)} °F`;
};

export const getFormattedDate = (date) => {
  const options = { weekday: "long", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString(undefined, options);
};

export const getIconUrl = (id) => {
  const iconUrl = `${process.env.REACT_APP_WEATHER_ICON_URL}${id}@2x.png` || "";
  return iconUrl;
};

export const weatherMockData = {
  coord: {
    lon: 85.1167,
    lat: 25.6,
  },
  weather: [
    {
      id: 721,
      main: "Haze",
      description: "haze",
      icon: "50d",
    },
  ],
  base: "stations",
  main: {
    temp: 31.96,
    feels_like: 38.96,
    temp_min: 31.96,
    temp_max: 31.96,
    pressure: 999,
    humidity: 79,
  },
  visibility: 4500,
  wind: {
    speed: 3.09,
    deg: 150,
  },
  clouds: {
    all: 75,
  },
  dt: 1691234678,
  sys: {
    type: 1,
    id: 9129,
    country: "IN",
    sunrise: 1691192864,
    sunset: 1691240605,
  },
  timezone: 19800,
  id: 1260086,
  name: "Patna",
  cod: 200,
};

export const forecastMockData = {
  cod: "200",
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1691236800,
      main: {
        temp: 31.96,
        feels_like: 38.96,
        temp_min: 31.73,
        temp_max: 31.96,
        pressure: 999,
        sea_level: 999,
        grnd_level: 993,
        humidity: 79,
        temp_kf: 0.23,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 75,
      },
      wind: {
        speed: 3.02,
        deg: 183,
        gust: 2.96,
      },
      visibility: 10000,
      pop: 0.29,
      rain: {
        "3h": 0.15,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2023-08-05 12:00:00",
    },
    {
      dt: 1691247600,
      main: {
        temp: 31.2,
        feels_like: 38.2,
        temp_min: 29.69,
        temp_max: 31.2,
        pressure: 1000,
        sea_level: 1000,
        grnd_level: 994,
        humidity: 78,
        temp_kf: 1.51,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 82,
      },
      wind: {
        speed: 3.05,
        deg: 201,
        gust: 5.06,
      },
      visibility: 10000,
      pop: 0.85,
      rain: {
        "3h": 1.6,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2023-08-05 15:00:00",
    },
    {
      dt: 1691258400,
      main: {
        temp: 29.71,
        feels_like: 36.71,
        temp_min: 28.58,
        temp_max: 29.71,
        pressure: 1000,
        sea_level: 1000,
        grnd_level: 994,
        humidity: 81,
        temp_kf: 1.13,
      },
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 90,
      },
      wind: {
        speed: 3.42,
        deg: 222,
        gust: 5.89,
      },
      visibility: 10000,
      pop: 0.95,
      rain: {
        "3h": 3.09,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2023-08-05 18:00:00",
    },
    {
      dt: 1691269200,
      main: {
        temp: 27.33,
        feels_like: 31.19,
        temp_min: 27.33,
        temp_max: 27.33,
        pressure: 999,
        sea_level: 999,
        grnd_level: 992,
        humidity: 86,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.18,
        deg: 218,
        gust: 5.09,
      },
      visibility: 10000,
      pop: 0.99,
      rain: {
        "3h": 1.41,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2023-08-05 21:00:00",
    },
    {
      dt: 1691280000,
      main: {
        temp: 27.41,
        feels_like: 31.28,
        temp_min: 27.41,
        temp_max: 27.41,
        pressure: 999,
        sea_level: 999,
        grnd_level: 993,
        humidity: 85,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.53,
        deg: 216,
        gust: 3.82,
      },
      visibility: 10000,
      pop: 0.99,
      rain: {
        "3h": 1.46,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2023-08-06 00:00:00",
    },
    {
      dt: 1691290800,
      main: {
        temp: 28.2,
        feels_like: 32.6,
        temp_min: 28.2,
        temp_max: 28.2,
        pressure: 1000,
        sea_level: 1000,
        grnd_level: 994,
        humidity: 80,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.51,
        deg: 206,
        gust: 3.96,
      },
      visibility: 10000,
      pop: 0.6,
      rain: {
        "3h": 0.19,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2023-08-06 03:00:00",
    },
    {
      dt: 1691301600,
      main: {
        temp: 29.52,
        feels_like: 35.02,
        temp_min: 29.52,
        temp_max: 29.52,
        pressure: 999,
        sea_level: 999,
        grnd_level: 992,
        humidity: 75,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.78,
        deg: 218,
        gust: 4.12,
      },
      visibility: 10000,
      pop: 0.44,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-08-06 06:00:00",
    },
    {
      dt: 1691312400,
      main: {
        temp: 33.39,
        feels_like: 40.39,
        temp_min: 33.39,
        temp_max: 33.39,
        pressure: 996,
        sea_level: 996,
        grnd_level: 989,
        humidity: 60,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.87,
        deg: 214,
        gust: 3.52,
      },
      visibility: 10000,
      pop: 0.51,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-08-06 09:00:00",
    },
    {
      dt: 1691323200,
      main: {
        temp: 31.34,
        feels_like: 38.34,
        temp_min: 31.34,
        temp_max: 31.34,
        pressure: 995,
        sea_level: 995,
        grnd_level: 989,
        humidity: 70,
        temp_kf: 0,
      },
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.31,
        deg: 250,
        gust: 5.46,
      },
      visibility: 3579,
      pop: 0.94,
      rain: {
        "3h": 6.33,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2023-08-06 12:00:00",
    },
    {
      dt: 1691334000,
      main: {
        temp: 28.77,
        feels_like: 35.16,
        temp_min: 28.77,
        temp_max: 28.77,
        pressure: 997,
        sea_level: 997,
        grnd_level: 991,
        humidity: 85,
        temp_kf: 0,
      },
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 5.53,
        deg: 264,
        gust: 9.38,
      },
      visibility: 10000,
      pop: 0.96,
      rain: {
        "3h": 9.9,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2023-08-06 15:00:00",
    },
    {
      dt: 1691344800,
      main: {
        temp: 27.68,
        feels_like: 32.45,
        temp_min: 27.68,
        temp_max: 27.68,
        pressure: 997,
        sea_level: 997,
        grnd_level: 990,
        humidity: 88,
        temp_kf: 0,
      },
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 6.73,
        deg: 279,
        gust: 11.71,
      },
      visibility: 10000,
      pop: 0.98,
      rain: {
        "3h": 5.24,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2023-08-06 18:00:00",
    },
    {
      dt: 1691355600,
      main: {
        temp: 26.95,
        feels_like: 30.69,
        temp_min: 26.95,
        temp_max: 26.95,
        pressure: 995,
        sea_level: 995,
        grnd_level: 988,
        humidity: 91,
        temp_kf: 0,
      },
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 5.51,
        deg: 281,
        gust: 9.94,
      },
      visibility: 7764,
      pop: 0.96,
      rain: {
        "3h": 4.43,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2023-08-06 21:00:00",
    },
    {
      dt: 1691366400,
      main: {
        temp: 26.2,
        feels_like: 26.2,
        temp_min: 26.2,
        temp_max: 26.2,
        pressure: 996,
        sea_level: 996,
        grnd_level: 989,
        humidity: 91,
        temp_kf: 0,
      },
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 5.86,
        deg: 277,
        gust: 11.07,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 8.64,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2023-08-07 00:00:00",
    },
    {
      dt: 1691377200,
      main: {
        temp: 26.23,
        feels_like: 26.23,
        temp_min: 26.23,
        temp_max: 26.23,
        pressure: 998,
        sea_level: 998,
        grnd_level: 992,
        humidity: 89,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 5.39,
        deg: 251,
        gust: 10.01,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 2.09,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2023-08-07 03:00:00",
    },
    {
      dt: 1691388000,
      main: {
        temp: 27.01,
        feels_like: 30.35,
        temp_min: 27.01,
        temp_max: 27.01,
        pressure: 998,
        sea_level: 998,
        grnd_level: 991,
        humidity: 86,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 5.56,
        deg: 260,
        gust: 9.39,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 2.15,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2023-08-07 06:00:00",
    },
    {
      dt: 1691398800,
      main: {
        temp: 26.63,
        feels_like: 26.63,
        temp_min: 26.63,
        temp_max: 26.63,
        pressure: 996,
        sea_level: 996,
        grnd_level: 990,
        humidity: 88,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 5.39,
        deg: 263,
        gust: 9.87,
      },
      visibility: 10000,
      pop: 0.98,
      rain: {
        "3h": 2.73,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2023-08-07 09:00:00",
    },
    {
      dt: 1691409600,
      main: {
        temp: 26.06,
        feels_like: 26.06,
        temp_min: 26.06,
        temp_max: 26.06,
        pressure: 997,
        sea_level: 997,
        grnd_level: 990,
        humidity: 90,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.41,
        deg: 255,
        gust: 8.84,
      },
      visibility: 10000,
      pop: 0.98,
      rain: {
        "3h": 2.86,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2023-08-07 12:00:00",
    },
    {
      dt: 1691420400,
      main: {
        temp: 25.87,
        feels_like: 26.89,
        temp_min: 25.87,
        temp_max: 25.87,
        pressure: 999,
        sea_level: 999,
        grnd_level: 993,
        humidity: 91,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.28,
        deg: 249,
        gust: 9.23,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 2.5,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2023-08-07 15:00:00",
    },
    {
      dt: 1691431200,
      main: {
        temp: 25.56,
        feels_like: 26.57,
        temp_min: 25.56,
        temp_max: 25.56,
        pressure: 999,
        sea_level: 999,
        grnd_level: 992,
        humidity: 92,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.99,
        deg: 238,
        gust: 9.6,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 1.97,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2023-08-07 18:00:00",
    },
    {
      dt: 1691442000,
      main: {
        temp: 24.95,
        feels_like: 25.93,
        temp_min: 24.95,
        temp_max: 24.95,
        pressure: 997,
        sea_level: 997,
        grnd_level: 990,
        humidity: 93,
        temp_kf: 0,
      },
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 5.3,
        deg: 230,
        gust: 10.9,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 4.15,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2023-08-07 21:00:00",
    },
    {
      dt: 1691452800,
      main: {
        temp: 25.22,
        feels_like: 26.2,
        temp_min: 25.22,
        temp_max: 25.22,
        pressure: 998,
        sea_level: 998,
        grnd_level: 991,
        humidity: 92,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.91,
        deg: 252,
        gust: 10.47,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 2.62,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2023-08-08 00:00:00",
    },
    {
      dt: 1691463600,
      main: {
        temp: 25.14,
        feels_like: 26.16,
        temp_min: 25.14,
        temp_max: 25.14,
        pressure: 999,
        sea_level: 999,
        grnd_level: 993,
        humidity: 94,
        temp_kf: 0,
      },
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.92,
        deg: 246,
        gust: 8.64,
      },
      visibility: 10000,
      pop: 0.98,
      rain: {
        "3h": 3.36,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2023-08-08 03:00:00",
    },
    {
      dt: 1691474400,
      main: {
        temp: 25.36,
        feels_like: 26.35,
        temp_min: 25.36,
        temp_max: 25.36,
        pressure: 1000,
        sea_level: 1000,
        grnd_level: 993,
        humidity: 92,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.51,
        deg: 259,
        gust: 9.56,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 2.6,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2023-08-08 06:00:00",
    },
    {
      dt: 1691485200,
      main: {
        temp: 25.61,
        feels_like: 26.6,
        temp_min: 25.61,
        temp_max: 25.61,
        pressure: 998,
        sea_level: 998,
        grnd_level: 992,
        humidity: 91,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.75,
        deg: 257,
        gust: 9.59,
      },
      visibility: 10000,
      pop: 0.98,
      rain: {
        "3h": 0.92,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2023-08-08 09:00:00",
    },
    {
      dt: 1691496000,
      main: {
        temp: 25.84,
        feels_like: 26.83,
        temp_min: 25.84,
        temp_max: 25.84,
        pressure: 999,
        sea_level: 999,
        grnd_level: 993,
        humidity: 90,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.17,
        deg: 272,
        gust: 8.73,
      },
      visibility: 10000,
      pop: 0.98,
      rain: {
        "3h": 0.22,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2023-08-08 12:00:00",
    },
    {
      dt: 1691506800,
      main: {
        temp: 25.88,
        feels_like: 26.87,
        temp_min: 25.88,
        temp_max: 25.88,
        pressure: 1002,
        sea_level: 1002,
        grnd_level: 995,
        humidity: 90,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.51,
        deg: 283,
        gust: 8.02,
      },
      visibility: 10000,
      pop: 0.4,
      rain: {
        "3h": 0.18,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2023-08-08 15:00:00",
    },
    {
      dt: 1691517600,
      main: {
        temp: 25.52,
        feels_like: 26.56,
        temp_min: 25.52,
        temp_max: 25.52,
        pressure: 1002,
        sea_level: 1002,
        grnd_level: 995,
        humidity: 93,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.46,
        deg: 279,
        gust: 5.79,
      },
      visibility: 10000,
      pop: 0.68,
      rain: {
        "3h": 1.21,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2023-08-08 18:00:00",
    },
    {
      dt: 1691528400,
      main: {
        temp: 25.37,
        feels_like: 26.39,
        temp_min: 25.37,
        temp_max: 25.37,
        pressure: 1000,
        sea_level: 1000,
        grnd_level: 994,
        humidity: 93,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.25,
        deg: 289,
        gust: 4.86,
      },
      visibility: 10000,
      pop: 0.51,
      rain: {
        "3h": 0.34,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2023-08-08 21:00:00",
    },
    {
      dt: 1691539200,
      main: {
        temp: 25.06,
        feels_like: 26.13,
        temp_min: 25.06,
        temp_max: 25.06,
        pressure: 1001,
        sea_level: 1001,
        grnd_level: 994,
        humidity: 96,
        temp_kf: 0,
      },
      weather: [
        {
          id: 502,
          main: "Rain",
          description: "heavy intensity rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.23,
        deg: 295,
        gust: 4.55,
      },
      visibility: 7138,
      pop: 0.93,
      rain: {
        "3h": 13.98,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2023-08-09 00:00:00",
    },
    {
      dt: 1691550000,
      main: {
        temp: 25.29,
        feels_like: 26.36,
        temp_min: 25.29,
        temp_max: 25.29,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 997,
        humidity: 95,
        temp_kf: 0,
      },
      weather: [
        {
          id: 502,
          main: "Rain",
          description: "heavy intensity rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.27,
        deg: 222,
        gust: 6.41,
      },
      visibility: 8992,
      pop: 0.91,
      rain: {
        "3h": 19.84,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2023-08-09 03:00:00",
    },
    {
      dt: 1691560800,
      main: {
        temp: 25.13,
        feels_like: 26.13,
        temp_min: 25.13,
        temp_max: 25.13,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 997,
        humidity: 93,
        temp_kf: 0,
      },
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.35,
        deg: 261,
        gust: 7.03,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 6.52,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2023-08-09 06:00:00",
    },
    {
      dt: 1691571600,
      main: {
        temp: 26.13,
        feels_like: 26.13,
        temp_min: 26.13,
        temp_max: 26.13,
        pressure: 1003,
        sea_level: 1003,
        grnd_level: 996,
        humidity: 84,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.88,
        deg: 251,
        gust: 5.9,
      },
      visibility: 10000,
      pop: 0.7,
      rain: {
        "3h": 0.55,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2023-08-09 09:00:00",
    },
    {
      dt: 1691582400,
      main: {
        temp: 28.03,
        feels_like: 31.14,
        temp_min: 28.03,
        temp_max: 28.03,
        pressure: 1003,
        sea_level: 1003,
        grnd_level: 997,
        humidity: 73,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 93,
      },
      wind: {
        speed: 3.24,
        deg: 261,
        gust: 4.57,
      },
      visibility: 10000,
      pop: 0.48,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-08-09 12:00:00",
    },
    {
      dt: 1691593200,
      main: {
        temp: 26.21,
        feels_like: 26.21,
        temp_min: 26.21,
        temp_max: 26.21,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 999,
        humidity: 81,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 81,
      },
      wind: {
        speed: 1.67,
        deg: 221,
        gust: 2.02,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-08-09 15:00:00",
    },
    {
      dt: 1691604000,
      main: {
        temp: 25.73,
        feels_like: 26.55,
        temp_min: 25.73,
        temp_max: 25.73,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 999,
        humidity: 84,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 90,
      },
      wind: {
        speed: 1.79,
        deg: 217,
        gust: 3.18,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-08-09 18:00:00",
    },
    {
      dt: 1691614800,
      main: {
        temp: 24.77,
        feels_like: 25.57,
        temp_min: 24.77,
        temp_max: 24.77,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 998,
        humidity: 87,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 77,
      },
      wind: {
        speed: 1.56,
        deg: 216,
        gust: 2.23,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-08-09 21:00:00",
    },
    {
      dt: 1691625600,
      main: {
        temp: 24.42,
        feels_like: 25.22,
        temp_min: 24.42,
        temp_max: 24.42,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 999,
        humidity: 88,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 58,
      },
      wind: {
        speed: 1.76,
        deg: 222,
        gust: 2.35,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-08-10 00:00:00",
    },
    {
      dt: 1691636400,
      main: {
        temp: 26.93,
        feels_like: 29.32,
        temp_min: 26.93,
        temp_max: 26.93,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 1000,
        humidity: 77,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 78,
      },
      wind: {
        speed: 2.24,
        deg: 235,
        gust: 2.3,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-08-10 03:00:00",
    },
    {
      dt: 1691647200,
      main: {
        temp: 28.3,
        feels_like: 31.41,
        temp_min: 28.3,
        temp_max: 28.3,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 1000,
        humidity: 71,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 87,
      },
      wind: {
        speed: 3.65,
        deg: 239,
        gust: 3.62,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-08-10 06:00:00",
    },
    {
      dt: 1691658000,
      main: {
        temp: 30.11,
        feels_like: 33.9,
        temp_min: 30.11,
        temp_max: 30.11,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 998,
        humidity: 64,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 97,
      },
      wind: {
        speed: 4.14,
        deg: 257,
        gust: 4.63,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-08-10 09:00:00",
    },
  ],
  city: {
    id: 1260086,
    name: "Patna",
    coord: {
      lat: 25.6,
      lon: 85.1167,
    },
    country: "IN",
    population: 1599920,
    timezone: 19800,
    sunrise: 1691192864,
    sunset: 1691240605,
  },
};
