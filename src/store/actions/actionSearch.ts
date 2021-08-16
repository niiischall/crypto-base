import { Dispatch } from 'redux';

import * as types from './actionTypes';
import { apiEndPoints, fetchApi } from '../../services/api';

const getTrendingCoinsSuccess = (coins: any[]) => {
  return {
    type: types.FETCH_TRENDING_COINS_SUCCESS,
    coins,
  };
};

const getTrendingCoinsFailure = (error: string) => {
  return {
    type: types.FETCH_TRENDING_COINS_FAILURE,
    error,
  };
};

export const getTrendingCoins = () => {
  return async (dispatch: Dispatch<any>) => {
    try {
      const response = await fetchApi(apiEndPoints.trendingCoins);
      if (response.ok) {
        const json = await response.json();
        dispatch(getTrendingCoinsSuccess(json.data));
      } else {
        dispatch(
          getTrendingCoinsFailure('Unable to fetch trending cryptocurrency.'),
        );
      }
    } catch (error) {
      dispatch(
        getTrendingCoinsFailure('Unable to fetch trending cryptocurrency.'),
      );
    }
  };
};

const getTrendingCoinsDetailsSuccess = (coinsInfo: {}) => {
  return {
    type: types.FETCH_TRENDING_COINS_DETAILS_SUCCESS,
    coinsInfo,
  };
};

const getTrendingCoinsDetailsFailure = (error: string) => {
  return {
    type: types.FETCH_TRENDING_COINS_DETAILS_FAILURE,
    error,
  };
};

export const getTrendingCoinsDetails = (coins: any[]) => {
  return async (dispatch: Dispatch<any>) => {
    const data = coins.map((coin: any) => coin.slug);
    const requestURL = `${apiEndPoints.coinsInfo}${data.join(',')}`;
    try {
      const response = await fetchApi(requestURL);
      if (response.ok) {
        const json = await response.json();
        dispatch(getTrendingCoinsDetailsSuccess(json.data));
      } else {
        dispatch(
          getTrendingCoinsDetailsSuccess(
            'Unable to fetch trending coins details.',
          ),
        );
      }
    } catch (error) {
      dispatch(
        getTrendingCoinsDetailsFailure(
          'Unable to fetch trending coins details.',
        ),
      );
    }
  };
};