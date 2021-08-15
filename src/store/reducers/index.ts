import * as types from '../actions/actionTypes';

const initialState = {
  coins: [],
  homePageCoins: {},
  latestListings: [],
  error: '',
};

/**
 * State management for data related to careers
 * @param {Object} state - The current (or initial) state
 * @param {Object} action - An incoming action
 */
export default function reducer(state: any = initialState, action: any) {
  switch (action.type) {
    case types.FETCH_LATEST_LISTINGS_SUCCESS:
      return Object.assign({}, state, {
        latestListings: action.listings,
        coins: action.listings.map((coin: any) => coin.slug),
      });
    case types.FETCH_LATEST_LISTINGS_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
      });
    case types.FETCH_COINS_INFO_SUCCESS:
      return Object.assign({}, state, {
        homePageCoins: action.coinsInfo,
      });
    case types.FETCH_COINS_INFO_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
      });
    default:
      return state;
  }
}
