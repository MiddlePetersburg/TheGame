import { types } from '../actions/types';

const initialState = {
  user: '',
  userId: '',
  login: '',
  password: '',
  email: '',
  phone: '',
  firstName: '',
  secondName: '',
};

export function userReducer(state = initialState, action: any) {
  switch (action.type) {
    case types.USER_CHANGE_FIELD: {
      return {
        ...state,
        [action.payload.field.field]: action.payload.field.value,
      };
    }
    case types.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case types.SET_ALL_USER_FIELDS:
      return {
        ...state,
        userId: action.payload.id,
        login: action.payload.login,
        password: action.payload.password,
        email: action.payload.email,
        phone: action.payload.phone,
        firstName: action.payload.first_name,
        secondName: action.payload.second_name,
      };
    default:
      return state;
  }
}
