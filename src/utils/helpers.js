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
