export default data => {
  return data.reduce((acc, val) => {
    return {
      cityName: val.city_name,
      relativeHumidity: val.rh,
      windSpd: val.wind_spd,
      weather: {
        icon: val.weather.icon,
        code: val.weather.code,
        description: val.weather.description
      },
      precip: val.precip,
      temp: val.temp
    };
  }, {});
};
