import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { fetchForecast, fetchError, getHourlyForecast } from './forecast';
import { FETCH_FORECAST, FETCH_ERROR } from '../types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Forecast actions test', () => {
  let actual;
  let expected;

  const data = {};
  test('should yield FETCH_FORECAST & payload', () => {
    actual = fetchForecast(data);
    expected = { type: FETCH_FORECAST, payload: data };

    expect(actual).toMatchObject(expected);
    expect(actual).toHaveProperty('type', FETCH_FORECAST);
    expect(actual).toHaveProperty('payload', data)
  });

  test('should yield FETCH_ERROR', () => {
    actual = fetchError(data);
    expected = { type: FETCH_ERROR };

    expect(actual).toMatchObject(expected);
    expect(actual).toHaveProperty('type', FETCH_ERROR);
  });
});

describe('Async action creators test', () => {
  let actual;
  let store;

  const city = 'Bogor';

  beforeEach(() => {
    store = mockStore()
  });

  test('getHourlyForecast() should yield expected type & payload on success', async () => {
    try {
      actual = await store.dispatch(getHourlyForecast(city));

      expect(actual).toHaveProperty('type', FETCH_FORECAST);
      expect(actual).toHaveProperty('payload');
    } catch (e) {
      throw e;
    }
  });

  test('getHourlyForecast() should yield expected type & payload on failure', async () => {
    try {
      actual = await store.dispatch(getHourlyForecast(undefined));

      expect(actual).toHaveProperty('type', FETCH_ERROR);
    } catch (e) {
      if (!e.message === 'Tidak ada data') {
        throw e;
      }
    }
  })
});
