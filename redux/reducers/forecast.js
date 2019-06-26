import { FETCH_ERROR, FETCH_FORECAST } from '../types';

export const initialState = {
  data: null,
  error: false,
  isFetched: false
};

export default (state = initialState, { payload, type }) => {
  switch (type) {
    case FETCH_FORECAST:
      return {
        ...state,
        data: payload,
        error: false,
        isFetched: true
      };
    case FETCH_ERROR:
      return {
        ...state,
        error: true,
        isFetched: true
      };
    default:
      return state;
  }
}
