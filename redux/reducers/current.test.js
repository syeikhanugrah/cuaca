import reducer, { initialState } from './current';
import { FETCH_CURRENT, FETCH_ERROR } from '../types';

describe('Current weather reducer test', () => {
  let actual;
  let expected;
  let state;

  it('should create action FETCH_CURRENT', function () {
    actual = reducer((state = initialState), {
      type: FETCH_CURRENT,
      payload: {}
    });

    expected = { ...state, data: {}, isFetched: true };

    expect(actual).toMatchObject(expected);
    expect(actual).toHaveProperty('data', {});
    expect(actual).toHaveProperty('error', false);
    expect(actual).toHaveProperty('isFetched', true);
  });

  it('should create action FETCH_ERROR', function () {
    actual = reducer((state = initialState), { type: FETCH_ERROR });

    expected = { ...state, error: true, isFetched: true };

    expect(actual).toMatchObject(expected);
    expect(actual).toHaveProperty('data', null);
    expect(actual).toHaveProperty('error', true);
    expect(actual).toHaveProperty('isFetched', true);
  });
});
