export default response => {
  const cityName = response.city_name;

  return response.data.reduce((acc, val) => {
    let obj = {
      cityName: cityName,
      relativeHumidity: val.rh,
      windSpd: val.wind_spd,
      weather: {
        icon: val.weather.icon,
        code: val.weather.code,
        description: val.weather.description
      },
      precip: val.precip,
      temp: val.temp,
      timestampLocal: val.timestamp_local,
      timestampUTC: val.timestamp_utc
    };

    acc.push(obj);

    return acc;
  }, [])
}
