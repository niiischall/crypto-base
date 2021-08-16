webpackHotUpdate("app",{

/***/ "./src/store/reducers/index.ts":
/*!*************************************!*\
  !*** ./src/store/reducers/index.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reducer; });
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/actionTypes */ "./src/store/actions/actionTypes.ts");

const initialState = {
  homeCoinsSlug: [],
  homeCoins: {},
  latestListings: [],
  error: ''
};
/**
 * State management for data related to careers
 * @param {Object} state - The current (or initial) state
 * @param {Object} action - An incoming action
 */

function reducer(state = initialState, action) {
  switch (action.type) {
    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_LATEST_LISTINGS_SUCCESS"]:
      return Object.assign({}, state, {
        latestListings: action.listings,
        homeCoinsSlug: action.listings.map(coin => coin.slug)
      });

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_LATEST_LISTINGS_FAILURE"]:
      return Object.assign({}, state, {
        error: action.error
      });

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_COINS_INFO_SUCCESS"]:
      return Object.assign({}, state, {
        homePageCoins: action.coinsInfo
      });

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_COINS_INFO_FAILURE"]:
      return Object.assign({}, state, {
        error: action.error
      });

    default:
      return state;
  }
}

/***/ })

})
//# sourceMappingURL=app.dbb830e9ef6f9c3a758f.hot-update.js.map