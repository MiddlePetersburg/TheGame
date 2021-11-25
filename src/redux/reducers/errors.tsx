import { types } from '../actions/types';

const initialState = {
  error: '',
};

export function errorReducer(state = initialState, action: any) {
  switch (action.type) {
    case types.SET_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
}
