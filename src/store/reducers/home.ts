import * as types from '../actions/actionTypes';

const initialState = {
  popularCoins: [],
  popularCoinsDetails: null,
  followingCoins: [],
  followingCoinsDetails: null,
  notificationCoins: [],
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
    case types.FOLLOW_COIN: {
      return Object.assign({}, state, {
        followingCoins: state.followingCoins.concat(action.coin),
      });
    }
    case types.UNFOLLOW_COIN: {
      return Object.assign({}, state, {
        followingCoins: state.followingCoins.filter(
          (coin: any) => coin.slug !== action.coin.slug,
        ),
      });
    }
    case types.FETCH_FOLLOWING_COINS_DETAILS_SUCCESS: {
      return Object.assign({}, state, {
        followingCoinsDetails: action.coinsInfo,
      });
    }
    case types.FETCH_FOLLOWING_COINS_DETAILS_FAILURE: {
      return Object.assign({}, state, {
        error: action.error,
      });
    }
    case types.START_COIN_NOTIFICATION: {
      return Object.assign({}, state, {
        notificationCoins: state.notificationCoins.concat(action.coin),
      });
    }
    case types.STOP_COIN_NOTIFICATION: {
      return Object.assign({}, state, {
        notificationCoins: state.notificationCoins.filter(
          (coin: any) => coin.slug !== action.coin.slug,
        ),
      });
    }
    default:
      return state;
  }
}
