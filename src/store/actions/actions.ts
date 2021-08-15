import { Dispatch } from 'redux';

import * as types from './actionTypes';
import { apiEndPoints, fetchApi } from '../../services/api';

const getLatestListingsSuccess = (listings: any[]) => {
  return {
    type: types.FETCH_LATEST_LISTINGS_SUCCESS,
    listings,
  };
};

const getLatestListingsFailure = (error: string) => {
  return {
    type: types.FETCH_LATEST_LISTINGS_FAILURE,
    error,
  };
};

export const getLatestListings = () => {
  return async (dispatch: Dispatch<any>) => {
    try {
      const response = await fetchApi(apiEndPoints.latestListing);
      if (response.ok) {
        const json = await response.json();
        dispatch(getLatestListingsSuccess(json.data));
      } else {
        dispatch(
          getLatestListingsFailure(
            'Unable to fetch latest cryptocurrency market listings.',
          ),
        );
      }
    } catch (error) {
      dispatch(
        getLatestListingsFailure(
          'Unable to fetch latest cryptocurrency market listings.',
        ),
      );
    }
  };
};

const getCoinsInfoSuccess = (coinsInfo: {}) => {
  return {
    type: types.FETCH_COINS_INFO_SUCCESS,
    coinsInfo,
  };
};

const getCoinsInfoFailure = (error: string) => {
  return {
    type: types.FETCH_COINS_INFO_FAILURE,
    error,
  };
};

export const getCoinsInfo = (coins: any[]) => {
  return async (dispatch: Dispatch<any>) => {
    const requestURL = `${apiEndPoints.listingInfo}${coins.join(',')}`;
    try {
      const response = await fetchApi(requestURL);
      if (response.ok) {
        const json = await response.json();
        dispatch(getCoinsInfoSuccess(json.data));
      } else {
        dispatch(getCoinsInfoFailure('Unable to fetch respective coin info.'));
      }
    } catch (error) {
      dispatch(getCoinsInfoFailure('Unable to fetch respective coin info.'));
    }
  };
};
