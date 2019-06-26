import {FETCH_CURRENT, FETCH_ERROR} from '../types';
import fetch from 'isomorphic-unfetch';
import filterCurrentData from "../../utils/filterCurrentData";

const fetchCurrent = data => ({
  type: FETCH_CURRENT,
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

const getCurrentWeather = input => async dispatch => {
  const currentURL = `${baseURL}/current?key=${key}&city=${input}`;

  const response = await fetch(currentURL);

  if (response.status === 204) {
    dispatch(fetchError());

    throw new Error('Tidak ada data');
  } else if (response.status > 204) {
    dispatch(fetchError());

    throw new Error('Terjadi kesalahan');
  } else {
    const responseJson = await response.json();

    return dispatch(fetchCurrent(filterCurrentData(responseJson.data)));
  }
};

export { fetchCurrent, fetchError, getCurrentWeather }
