import { FETCH_FORECAST, FETCH_ERROR } from '../types';
import fetch from 'isomorphic-unfetch';
import filterForecastData from '../../utils/filterForecastData';

const fetchForecast = data => ({
  type: FETCH_FORECAST,
  payload: data
});

const fetchError = () => ({
  type: FETCH_ERROR,
});

// dibutuhkan untuk test
if (process.env.NODE_ENV === 'test') {
  require('dotenv-safe').load()
}

const key = process.env.API_KEY;
const baseURL = process.env.NODE_ENV === 'dev' ? 'http://api.weatherbit.io/v2.0' : 'https://api.weatherbit.io/v2.0';

const getHourlyForecast = input => async dispatch => {
  const currentURL = `${baseURL}/forecast/hourly?key=${key}&city=${input}`;

  const response = await fetch(currentURL);

  if (response.status === 204) {
    dispatch(fetchError());

    throw new Error('Tidak ada data');
  } else if (response.status > 204) {
    dispatch(fetchError());

    throw new Error('Terjadi kesalahan');
  } else {
    const responseJson = await response.json();

    return dispatch(fetchForecast(filterForecastData(responseJson)));
  }
};

export { fetchForecast, fetchError, getHourlyForecast }
