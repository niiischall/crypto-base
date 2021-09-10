import { Dispatch } from 'redux';

import * as types from './actionTypes';
import { apiEndPoints, fetchApi } from '../../services/api';

const getPopularCoinsSuccess = (coins: any[]) => {
  return {
    type: types.FETCH_POPULAR_COINS_SUCCESS,
    coins,
  };
};

const getPopularCoinsFailure = (error: string) => {
  return {
    type: types.FETCH_POPULAR_COINS_FAILURE,
    error,
  };
};

export const getPopularCoins = () => {
  return async (dispatch: Dispatch<any>) => {
    try {
      const response = await fetchApi(apiEndPoints.popularCoins);
      const json = await response.json();
      if (response.ok) {
        dispatch(getPopularCoinsSuccess(json.data));
      } else {
        dispatch(
          getPopularCoinsFailure('Unable to fetch popular cryptocurrency.'),
        );
      }
    } catch (error) {
      dispatch(
        getPopularCoinsFailure('Unable to fetch popular cryptocurrency.'),
      );
    }
  };
};

const getPopularCoinsDetailsSuccess = (coinsInfo: any) => {
  return {
    type: types.FETCH_POPULAR_COINS_DETAILS_SUCCESS,
    coinsInfo,
  };
};

const getPopularCoinsDetailsFailure = (error: string) => {
  return {
    type: types.FETCH_POPULAR_COINS_DETAILS_FAILURE,
    error,
  };
};

export const getPopularCoinsDetails = (coins: any[]) => {
  return async (dispatch: Dispatch<any>) => {
    const data = coins.map((coin: any) => coin.slug);
    const requestURL = `${apiEndPoints.coinsInfo}${data.join(',')}`;
    try {
      const response = await fetchApi(requestURL);
      const json = await response.json();
      if (response.ok) {
        dispatch(getPopularCoinsDetailsSuccess(json.data));
      } else {
        dispatch(
          getPopularCoinsDetailsFailure(
            'Unable to fetch popular coins details.',
          ),
        );
      }
    } catch (error) {
      dispatch(
        getPopularCoinsDetailsFailure('Unable to fetch popular coins details.'),
      );
    }
  };
};

export const followCoin = (coin: any) => {
  return {
    type: types.FOLLOW_COIN,
    coin,
  };
};

export const unfollowCoin = (coin: any) => {
  return {
    type: types.UNFOLLOW_COIN,
    coin,
  };
};

const getFollowingCoinsDetailsSuccess = (coinsInfo: any) => {
  return {
    type: types.FETCH_FOLLOWING_COINS_DETAILS_SUCCESS,
    coinsInfo,
  };
};

const getFollowingCoinsDetailsFailure = (error: string) => {
  return {
    type: types.FETCH_FOLLOWING_COINS_DETAILS_FAILURE,
    error,
  };
};

export const getFollowingCoinsDetails = (coins: any[]) => {
  return async (dispatch: Dispatch<any>) => {
    const data = coins.map((coin: any) => coin.slug);
    const requestURL = `${apiEndPoints.coinsInfo}${data.join(',')}`;
    try {
      const response = await fetchApi(requestURL);
      const json = await response.json();
      if (response.ok) {
        dispatch(getFollowingCoinsDetailsSuccess(json.data));
      } else {
        dispatch(
          getFollowingCoinsDetailsFailure(
            'Unable to fetch following coins details.',
          ),
        );
      }
    } catch (error) {
      dispatch(
        getFollowingCoinsDetailsFailure(
          'Unable to fetch following coins details.',
        ),
      );
    }
  };
};

export const startNotifications = (coin: string) => {
  return {
    type: types.START_COIN_NOTIFICATION,
    coin,
  };
};

export const stopNotifications = (coin: string) => {
  return {
    type: types.STOP_COIN_NOTIFICATION,
    coin,
  };
};
