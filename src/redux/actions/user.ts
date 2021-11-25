import { types } from './types';

export const setUser = (value: any) => (dispatch: any) => {
  dispatch({
    type: types.SET_USER,
    payload: value,
  });
};

export const changeField = (field: any, value: any) => (dispatch: any) => {
  dispatch({
    type: types.USER_CHANGE_FIELD,
    payload: { field, value },
  });
};

export const setAllUserFields = (value: any) => (dispatch: any) => {
  dispatch({
    type: types.SET_ALL_USER_FIELDS,
    payload: value,
  });
};
