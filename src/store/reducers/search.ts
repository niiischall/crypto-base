import * as types from '../actions/actionTypes';

const initialState = {
  totalCoins: [],
  trendingCoins: [],
  trendingCoinsDetails: null,
  error: '',
};

/**
 * State management for data related to search
 * @param {Object} state - The current (or initial) state
 * @param {Object} action - An incoming action
 */
export default function search(state: any = initialState, action: any) {
  switch (action.type) {
    case types.FETCH_TOTALCOINS_SUCCESS:
      return Object.assign({}, state, {
        totalCoins: action.coins,
      });
    case types.FETCH_TOTALCOINS_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
      });
    case types.FETCH_TRENDING_COINS_SUCCESS:
      return Object.assign({}, state, {
        trendingCoins: action.coins,
      });
    case types.FETCH_TRENDING_COINS_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
      });
    case types.FETCH_TRENDING_COINS_DETAILS_SUCCESS:
      return Object.assign({}, state, {
        trendingCoinsDetails: action.coinsInfo,
      });
    case types.FETCH_TRENDING_COINS_DETAILS_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
      });
    default:
      return state;
  }
}
