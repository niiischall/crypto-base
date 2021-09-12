import { Dispatch } from 'redux';
import { doc, setDoc } from 'firebase/firestore';
import db from '../../services/firebase';

import * as types from './actionTypes';
import { apiEndPoints, fetchApi } from '../../services/api';

export const getFollowingCoins = (coins: any[]) => {
  return {
    type: types.FOLLOWING_COINS,
    followingCoins: coins,
  };
};

export const getNotifiedCoins = (coins: any[]) => {
  return {
    type: types.NOTIFIED_COINS,
    notificationCoins: coins,
  };
};

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
  return async (dispatch: Dispatch<any>, getState: any) => {
    const userId = getState().profile.userId;
    const following = getState().home.followingCoins.concat(coin);
    const notification = getState().home.notificationCoins;
    await setDoc(doc(db, 'users', userId), {
      userId,
      following,
      notification,
    });
  };
};

export const unfollowCoin = (unfollowedCoin: any) => {
  return async (dispatch: Dispatch<any>, getState: any) => {
    const userId = getState().profile.userId;
    const following = getState().home.followingCoins.filter(
      (coin: any) => coin.slug !== unfollowedCoin.slug,
    );
    const notification = getState().home.notificationCoins;
    await setDoc(doc(db, 'users', userId), {
      userId,
      following,
      notification,
    });
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

export const startNotifications = (coin: any) => {
  return async (dispatch: Dispatch<any>, getState: any) => {
    const userId = getState().profile.userId;
    const following = getState().home.followingCoins;
    const notification = getState().home.notificationCoins.concat(coin);
    await setDoc(doc(db, 'users', userId), {
      userId,
      following,
      notification,
    });
  };
};

export const stopNotifications = (unNotifiedCoin: any) => {
  return async (dispatch: Dispatch<any>, getState: any) => {
    const userId = getState().profile.userId;
    const following = getState().home.followingCoins;
    const notification = getState().home.notificationCoins.filter(
      (coin: any) => coin.slug !== unNotifiedCoin.slug,
    );
    await setDoc(doc(db, 'users', userId), {
      userId,
      following,
      notification,
    });
  };
};
