webpackHotUpdate("app",{

/***/ "./src/store/actions/actionSearch.ts":
/*!*******************************************!*\
  !*** ./src/store/actions/actionSearch.ts ***!
  \*******************************************/
/*! exports provided: getTotalCoins, getTrendingCoins, getTrendingCoinsDetails, searchCoinTerm, searchCoinSuccess, searchCoinFailure, searchCoin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalCoins", function() { return getTotalCoins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTrendingCoins", function() { return getTrendingCoins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTrendingCoinsDetails", function() { return getTrendingCoinsDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchCoinTerm", function() { return searchCoinTerm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchCoinSuccess", function() { return searchCoinSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchCoinFailure", function() { return searchCoinFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchCoin", function() { return searchCoin; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ "./src/store/actions/actionTypes.ts");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api */ "./src/services/api.ts");



const getTotalCoinsSuccess = coins => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_TOTALCOINS_SUCCESS"],
    coins
  };
};

const getTotalCoinsFailure = error => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_TOTALCOINS_FAILURE"],
    error
  };
};

const getTotalCoins = () => {
  return async dispatch => {
    const requestURL = _services_api__WEBPACK_IMPORTED_MODULE_1__["apiEndPoints"].totalCoins;

    try {
      const response = await Object(_services_api__WEBPACK_IMPORTED_MODULE_1__["fetchApi"])(requestURL);

      if (response.ok) {
        const json = await response.json();
        dispatch(getTotalCoinsSuccess(json.data));
      } else {
        dispatch(getTotalCoinsFailure('Unable to fetch all coins list.'));
      }
    } catch (error) {
      dispatch(getTotalCoinsFailure('Unable to fetch all coins details.'));
    }
  };
};

const getTrendingCoinsSuccess = coins => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_TRENDING_COINS_SUCCESS"],
    coins
  };
};

const getTrendingCoinsFailure = error => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_TRENDING_COINS_FAILURE"],
    error
  };
};

const getTrendingCoins = () => {
  return async dispatch => {
    try {
      const response = await Object(_services_api__WEBPACK_IMPORTED_MODULE_1__["fetchApi"])(_services_api__WEBPACK_IMPORTED_MODULE_1__["apiEndPoints"].trendingCoins);

      if (response.ok) {
        const json = await response.json();
        dispatch(getTrendingCoinsSuccess(json.data));
      } else {
        dispatch(getTrendingCoinsFailure('Unable to fetch trending cryptocurrency.'));
      }
    } catch (error) {
      dispatch(getTrendingCoinsFailure('Unable to fetch trending cryptocurrency.'));
    }
  };
};

const getTrendingCoinsDetailsSuccess = coinsInfo => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_TRENDING_COINS_DETAILS_SUCCESS"],
    coinsInfo
  };
};

const getTrendingCoinsDetailsFailure = error => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_TRENDING_COINS_DETAILS_FAILURE"],
    error
  };
};

const getTrendingCoinsDetails = coins => {
  return async dispatch => {
    const data = coins.map(coin => coin.slug);
    const requestURL = `${_services_api__WEBPACK_IMPORTED_MODULE_1__["apiEndPoints"].coinsInfo}${data.join(',')}`;

    try {
      const response = await Object(_services_api__WEBPACK_IMPORTED_MODULE_1__["fetchApi"])(requestURL);

      if (response.ok) {
        const json = await response.json();
        dispatch(getTrendingCoinsDetailsSuccess(json.data));
      } else {
        dispatch(getTrendingCoinsDetailsSuccess('Unable to fetch trending coins details.'));
      }
    } catch (error) {
      dispatch(getTrendingCoinsDetailsFailure('Unable to fetch trending coins details.'));
    }
  };
};
const searchCoinTerm = term => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SEARCH_COIN_TERM"],
    term
  };
};
const searchCoinSuccess = coin => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SEARCH_COIN_SUCCESS"],
    coin
  };
};
const searchCoinFailure = error => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SEARCH_COIN_FAILURE"],
    error
  };
};
const searchCoin = coin => {
  return async dispatch => {
    const requestURL = `${_services_api__WEBPACK_IMPORTED_MODULE_1__["apiEndPoints"].coinsInfo}${coin}`;

    try {
      const response = await Object(_services_api__WEBPACK_IMPORTED_MODULE_1__["fetchApi"])(requestURL);

      if (response.ok) {
        const json = await response.json();
        dispatch(searchCoinSuccess(json.data));
      } else {
        dispatch(searchCoinFailure('Unable to fetch searched coin details.'));
      }
    } catch (error) {
      dispatch(searchCoinFailure('Unable to fetch searched coin details.'));
    }
  };
};

/***/ })

})
//# sourceMappingURL=app.aa8f9cade5877bc33353.hot-update.js.map