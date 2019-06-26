import React from 'react';
import WeatherInfo from "./weatherInfo";

const forecastList = ({ data }) => (
  <>
    {data.map((forecast, i) => (
      <WeatherInfo key={i} data={forecast} />
    ))}
  </>
);

export default forecastList;
