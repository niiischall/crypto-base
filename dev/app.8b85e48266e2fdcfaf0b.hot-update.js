webpackHotUpdate("app",{

/***/ "./src/store/actions/actionSearch.ts":
/*!*******************************************!*\
  !*** ./src/store/actions/actionSearch.ts ***!
  \*******************************************/
/*! exports provided: getTrendingCoins, getTrendingCoinsDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTrendingCoins", function() { return getTrendingCoins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTrendingCoinsDetails", function() { return getTrendingCoinsDetails; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ "./src/store/actions/actionTypes.ts");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api */ "./src/services/api.ts");



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
  console.log('getTrendingCoins!');
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

/***/ })

})
//# sourceMappingURL=app.8b85e48266e2fdcfaf0b.hot-update.js.map