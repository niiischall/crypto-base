import * as types from '../actions/actionTypes';

const initialState = {
  userEmail: null,
  userId: null,
  idToken: null,
  error: '',
};

/**
 * State management for data related to profile
 * @param {Object} state - The current (or initial) state
 * @param {Object} action - An incoming action
 */
export default function profile(state: any = initialState, action: any) {
  switch (action.type) {
    case types.AUTH_SUCCESS: {
      return Object.assign({}, state, {
        userEmail: action.email,
        userId: action.userId,
        idToken: action.idToken,
      });
    }
    case types.AUTH_FAILED: {
      return Object.assign({}, state, {
        error: action.error,
      });
    }
    case types.AUTH_LOGOUT: {
      return Object.assign({}, state, {
        userEmail: null,
        userId: null,
        idToken: null,
        error: '',
      });
    }
    case types.AUTH_ERROR_CLEAR: {
      return Object.assign({}, state, {
        error: '',
      });
    }
    default:
      return state;
  }
}
