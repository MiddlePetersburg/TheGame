import { types } from './types';

export const setError = (value: any) => (dispatch: any) => {
  dispatch({
    type: types.SET_ERROR,
    payload: value,
  });
};
