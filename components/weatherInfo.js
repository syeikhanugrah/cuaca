import React from 'react';

const WeatherInfo = ({ data }) => {
  const iconURL = `https://www.weatherbit.io/static/img/icons/${data.weather.icon}.png`;
  let waktu;
  if (typeof(data.timestampLocal) !== 'undefined') {
    waktu = new Date(data.timestampLocal);
  }

  return (
    <div className="box">
      <div className="columns">
        <div className="column">
          <h2 className="title is-2">{data.cityName}</h2>
          <h3 className="subtitle has-text-grey">{data.weather.description}</h3>

          <div className="columns is-mobile is-vcentered">
            <div className="column is-2">
              <figure className="image is-64x64">
                <img src={iconURL} alt={data.weather.description} />
              </figure>
            </div>

            <div className="column is-3">
              <h1 className="title is-3">{data.temp} &#8451;</h1>
            </div>

            <div className="column">
              {waktu &&
                <div className="tag is-large">{waktu.toLocaleString()}</div>
              }
              <p>Precipitation: {data.precip} mm/hr</p>
              <p>Humidity: {data.relativeHumidity}%</p>
              <p>Wind: {data.windSpd} m/s</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
