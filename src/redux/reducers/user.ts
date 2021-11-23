import { actions } from '../actions/types'

type LoadStatus = 'success' | 'pending' | 'failed';

type UserState = {
  item: Nullable<User>;
  status: LoadStatus;
};

interface ItemActionType extends BaseActionType<keyof actions> {
  status: LoadStatus;
}

export function userReducer(state: UserState = defaultState, {type, status}: ItemActionType = {}): UserReducer {
  switch (type) {
    case actions.SET_STATUS:
      return {
        ...state,
        status,
      };
    default:
      return state;
  }
}

export function setLoadingStatus(status: LoadStatus) {
  return { type: actions.SET_STATUS, status };
}
