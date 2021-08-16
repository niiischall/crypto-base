webpackHotUpdate("app",{

/***/ "./src/store/reducers/search.ts":
/*!**************************************!*\
  !*** ./src/store/reducers/search.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return search; });
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/actionTypes */ "./src/store/actions/actionTypes.ts");

const initialState = {
  trendingCoins: [],
  coinsDetails: null,
  error: ''
};
/**
 * State management for data related to search
 * @param {Object} state - The current (or initial) state
 * @param {Object} action - An incoming action
 */

function search(state = initialState, action) {
  console.log(action);

  switch (action.type) {
    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_TRENDING_COINS_SUCCESS"]:
      return Object.assign({}, state, {
        trendingCoins: action.coins
      });

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_TRENDING_COINS_FAILURE"]:
      return Object.assign({}, state, {
        error: action.error
      });

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_TRENDING_COINS_DETAILS_SUCCESS"]:
      return Object.assign({}, state, {
        coinsDetails: action.coinsInfo
      });

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_TRENDING_COINS_DETAILS_FAILURE"]:
      return Object.assign({}, state, {
        error: action.error
      });

    default:
      return state;
  }
}

/***/ })

})
//# sourceMappingURL=app.0a6829f54e7c03577834.hot-update.js.map