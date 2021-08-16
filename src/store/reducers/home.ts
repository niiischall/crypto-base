import * as types from '../actions/actionTypes';

const initialState = {
  popularCoins: [],
  popularCoinsDetails: null,
  followingCoins: [],
  followingCoinsDetails: null,
  error: '',
};

/**
 * State management for data related to home
 * @param {Object} state - The current (or initial) state
 * @param {Object} action - An incoming action
 */
export default function home(state: any = initialState, action: any) {
  switch (action.type) {
    case types.FETCH_POPULAR_COINS_SUCCESS: {
      return Object.assign({}, state, {
        popularCoins: action.coins,
      });
    }
    case types.FETCH_POPULAR_COINS_FAILURE: {
      return Object.assign({}, state, {
        error: action.error,
      });
    }
    case types.FETCH_POPULAR_COINS_DETAILS_SUCCESS: {
      return Object.assign({}, state, {
        popularCoinsDetails: action.coinsInfo,
      });
    }
    case types.FETCH_POPULAR_COINS_DETAILS_FAILURE: {
      return Object.assign({}, state, {
        error: action.error,
      });
    }
    default:
      return state;
  }
}
