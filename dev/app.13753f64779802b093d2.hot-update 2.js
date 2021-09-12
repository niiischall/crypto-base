webpackHotUpdate("app",{

/***/ "./src/store/actions/actionHome.ts":
/*!*****************************************!*\
  !*** ./src/store/actions/actionHome.ts ***!
  \*****************************************/
/*! exports provided: getPopularCoins, getPopularCoinsDetails, followCoinSuccess, followCoinFailure, followCoin, getFollowingCoinsSuccess, getFollowingCoinsFailure, getFollowingCoins, getFollowingCoinsDetails, startNotifications, stopNotifications */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPopularCoins", function() { return getPopularCoins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPopularCoinsDetails", function() { return getPopularCoinsDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "followCoinSuccess", function() { return followCoinSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "followCoinFailure", function() { return followCoinFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "followCoin", function() { return followCoin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFollowingCoinsSuccess", function() { return getFollowingCoinsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFollowingCoinsFailure", function() { return getFollowingCoinsFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFollowingCoins", function() { return getFollowingCoins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFollowingCoinsDetails", function() { return getFollowingCoinsDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startNotifications", function() { return startNotifications; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopNotifications", function() { return stopNotifications; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ "./src/store/actions/actionTypes.ts");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api */ "./src/services/api.ts");



const getPopularCoinsSuccess = coins => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_POPULAR_COINS_SUCCESS"],
    coins
  };
};

const getPopularCoinsFailure = error => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_POPULAR_COINS_FAILURE"],
    error
  };
};

const getPopularCoins = () => {
  return async dispatch => {
    try {
      const response = await Object(_services_api__WEBPACK_IMPORTED_MODULE_1__["fetchApi"])(_services_api__WEBPACK_IMPORTED_MODULE_1__["apiEndPoints"].popularCoins);
      const json = await response.json();

      if (response.ok) {
        dispatch(getPopularCoinsSuccess(json.data));
      } else {
        dispatch(getPopularCoinsFailure('Unable to fetch popular cryptocurrency.'));
      }
    } catch (error) {
      dispatch(getPopularCoinsFailure('Unable to fetch popular cryptocurrency.'));
    }
  };
};

const getPopularCoinsDetailsSuccess = coinsInfo => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_POPULAR_COINS_DETAILS_SUCCESS"],
    coinsInfo
  };
};

const getPopularCoinsDetailsFailure = error => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_POPULAR_COINS_DETAILS_FAILURE"],
    error
  };
};

const getPopularCoinsDetails = coins => {
  return async dispatch => {
    const data = coins.map(coin => coin.slug);
    const requestURL = `${_services_api__WEBPACK_IMPORTED_MODULE_1__["apiEndPoints"].coinsInfo}${data.join(',')}`;

    try {
      const response = await Object(_services_api__WEBPACK_IMPORTED_MODULE_1__["fetchApi"])(requestURL);
      const json = await response.json();

      if (response.ok) {
        dispatch(getPopularCoinsDetailsSuccess(json.data));
      } else {
        dispatch(getPopularCoinsDetailsFailure('Unable to fetch popular coins details.'));
      }
    } catch (error) {
      dispatch(getPopularCoinsDetailsFailure('Unable to fetch popular coins details.'));
    }
  };
};
const followCoinSuccess = (coins, key) => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["FOLLOW_COIN_SUCCESS"],
    key,
    coins
  };
};
const followCoinFailure = error => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["FOLLOW_COIN_FAILURE"],
    error
  };
};
const followCoin = coinObj => {
  return async (dispatch, getState) => {
    try {
      const response = await Object(_services_api__WEBPACK_IMPORTED_MODULE_1__["firebaseAPI"])(getState().profile.idToken, 'post', coinObj);

      if (response.ok) {
        const json = await response.json();
        dispatch(followCoinSuccess(coinObj.followingCoins, json.name));
      } else {
        dispatch(followCoinFailure('Unable to fetch following coins.'));
      }
    } catch (error) {
      dispatch(followCoinFailure('Unable to fetch following coins.'));
    }
  };
};
const getFollowingCoinsSuccess = followingCoins => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_FOLLOW_COINS_SUCCESS"],
    followingCoins
  };
};
const getFollowingCoinsFailure = error => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_FOLLOW_COINS_FAILURE"],
    error
  };
};
const getFollowingCoins = () => {
  return async (dispatch, getState) => {
    const queryParams = getState().profile.idToken + '&orderBy="userId"&equalTo="' + getState().profile.userId + '"';

    try {
      const response = await Object(_services_api__WEBPACK_IMPORTED_MODULE_1__["firebaseAPI"])(queryParams, 'get');
      const json = await response.json();

      if (response.ok) {
        const followingCoins = Object.values(json);
        console.log('followingCoins:');
        console.log(followingCoins);
      } else {
        dispatch(getFollowingCoinsFailure('Unable to fetch following coins.'));
      }
    } catch (error) {
      dispatch(getFollowingCoinsFailure('Unable to fetch following coins.'));
    }
  };
};

const getFollowingCoinsDetailsSuccess = coinsInfo => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_FOLLOWING_COINS_DETAILS_SUCCESS"],
    coinsInfo
  };
};

const getFollowingCoinsDetailsFailure = error => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_FOLLOWING_COINS_DETAILS_FAILURE"],
    error
  };
};

const getFollowingCoinsDetails = coins => {
  return async dispatch => {
    const data = coins.map(coin => coin.slug);
    const requestURL = `${_services_api__WEBPACK_IMPORTED_MODULE_1__["apiEndPoints"].coinsInfo}${data.join(',')}`;

    try {
      const response = await Object(_services_api__WEBPACK_IMPORTED_MODULE_1__["fetchApi"])(requestURL);
      const json = await response.json();

      if (response.ok) {
        dispatch(getFollowingCoinsDetailsSuccess(json.data));
      } else {
        dispatch(getFollowingCoinsDetailsFailure('Unable to fetch following coins details.'));
      }
    } catch (error) {
      dispatch(getFollowingCoinsDetailsFailure('Unable to fetch following coins details.'));
    }
  };
};
const startNotifications = coin => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["START_COIN_NOTIFICATION"],
    coin
  };
};
const stopNotifications = coin => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["STOP_COIN_NOTIFICATION"],
    coin
  };
};

/***/ })

})
//# sourceMappingURL=app.13753f64779802b093d2.hot-update.js.map