import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { fetchCurrent, fetchError, getCurrentWeather } from './current';
import { FETCH_CURRENT, FETCH_ERROR } from '../types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Current weather actions test', () => {
  let actual;
  let expected;

  const data = {};
  test('should yield FETCH_CURRENT & payload', () => {
    actual = fetchCurrent(data);
    expected = { type: FETCH_CURRENT, payload: data };

    expect(actual).toMatchObject(expected);
    expect(actual).toHaveProperty('type', FETCH_CURRENT);
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

  test('getCurrentWeather() should yield expected type & payload on success', async () => {
    try {
      actual = await store.dispatch(getCurrentWeather(city));

      expect(actual).toHaveProperty('type', FETCH_CURRENT);
      expect(actual.payload).toHaveProperty('cityName', city);
    } catch (e) {
      throw e;
    }
  });

  test('getCurrentWeather() should yield expected type & payload on failure', async () => {
    try {
      actual = await store.dispatch(getCurrentWeather(undefined));

      expect(actual).toHaveProperty('type', FETCH_ERROR);
    } catch (e) {
      if (!e.message === 'Tidak ada data') {
        throw e;
      }
    }
  })
});
