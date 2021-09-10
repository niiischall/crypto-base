import { Dispatch } from 'redux';

import * as types from './actionTypes';
import { normalizeError } from '../../services/helpers';
import { apiEndPoints, authApi } from '../../services/api';

const authSuccess = (userId: string, idToken: string, email: string) => {
  return {
    type: types.AUTH_SUCCESS,
    userId,
    idToken,
    email,
  };
};

const authFailed = (error: string) => {
  return {
    type: types.AUTH_FAILED,
    error,
  };
};

export const auth = (email: string, password: string, isSignUp: boolean) => {
  const info = {
    email: email,
    password: password,
    returnSecureToken: true,
  };

  let authURL = apiEndPoints.signUp;

  if (!isSignUp) {
    authURL = apiEndPoints.signIn;
  }

  return async (dispatch: Dispatch<any>) => {
    try {
      const response = await authApi(authURL, 'post', info);
      const json = await response.json();
      if (response.ok) {
        const { localId, idToken, email, expiresIn } = json;
        dispatch(authSuccess(localId, idToken, email));
        localStorage.setItem('idToken', idToken);
        localStorage.setItem('userId', localId);
        localStorage.setItem('userEmail', email);
        const expirationDate = new Date(
          new Date().getTime() + expiresIn * 1000 * 24,
        );
        localStorage.setItem('expirationDate', String(expirationDate));
        dispatch(authAutoLogout(json.expiresIn));
      } else {
        const { message } = json.error;
        dispatch(authFailed(normalizeError(message)));
      }
    } catch (error: any) {
      dispatch(authFailed(normalizeError(error.message)));
    }
  };
};

export const authLogout = () => {
  localStorage.removeItem('idToken');
  localStorage.removeItem('userId');
  localStorage.removeItem('expirationDate');
  localStorage.removeItem('userEmail');
  return {
    type: types.AUTH_LOGOUT,
  };
};

const authAutoLogout = (time: number) => {
  return (dispatch: Dispatch<any>) => {
    setTimeout(() => {
      dispatch(authLogout());
    }, time * 1000);
  };
};

export const checkAuthState = () => {
  return (dispatch: Dispatch<any>) => {
    let tokenId = localStorage.getItem('idToken');
    if (!tokenId) {
      dispatch(authLogout());
    } else {
      const currentExpirationDate = localStorage.getItem('expirationDate');
      if (
        currentExpirationDate &&
        new Date(currentExpirationDate) > new Date()
      ) {
        const userId = localStorage.getItem('userId');
        const idToken = localStorage.getItem('idToken');
        const userEmail = localStorage.getItem('userEmail');
        if (userId && idToken && userEmail) {
          dispatch(authSuccess(userId, idToken, userEmail));
        }
      } else {
        authLogout();
      }
    }
  };
};

export const clearAuthError = () => {
  return {
    type: types.AUTH_ERROR_CLEAR,
  };
};
