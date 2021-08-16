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
      if (response.ok) {
        const json = await response.json();
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

const getPopularCoinsDetailsSuccess = (coinsInfo: {}) => {
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
      if (response.ok) {
        const json = await response.json();
        dispatch(getPopularCoinsDetailsSuccess(json.data));
      } else {
        dispatch(
          getPopularCoinsDetailsSuccess(
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
