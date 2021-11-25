import { combineReducers } from 'redux';
import { userReducer } from './user';
import { errorReducer } from './errors';

// В этом файле будем объединять все редьюсеры в один
export default combineReducers({
  userReducer,
  errorReducer,
});
