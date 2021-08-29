webpackHotUpdate("app",{

/***/ "./src/store/reducers/home.ts":
/*!************************************!*\
  !*** ./src/store/reducers/home.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return home; });
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/actionTypes */ "./src/store/actions/actionTypes.ts");

const initialState = {
  popularCoins: [],
  popularCoinsDetails: null,
  followingCoins: [],
  followingCoinsDetails: null,
  error: ''
};
/**
 * State management for data related to home
 * @param {Object} state - The current (or initial) state
 * @param {Object} action - An incoming action
 */

function home(state = initialState, action) {
  console.log('Following Coins: ');
  console.log(state.followingCoins);

  switch (action.type) {
    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_POPULAR_COINS_SUCCESS"]:
      {
        return Object.assign({}, state, {
          popularCoins: action.coins
        });
      }

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_POPULAR_COINS_FAILURE"]:
      {
        return Object.assign({}, state, {
          error: action.error
        });
      }

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_POPULAR_COINS_DETAILS_SUCCESS"]:
      {
        return Object.assign({}, state, {
          popularCoinsDetails: action.coinsInfo
        });
      }

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_POPULAR_COINS_DETAILS_FAILURE"]:
      {
        return Object.assign({}, state, {
          error: action.error
        });
      }

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["FOLLOW_COIN"]:
      {
        return Object.assign({}, state, {
          followingCoins: state.followingCoins.push(action.coin)
        });
      }

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["UNFOLLOW_COIN"]:
      {
        return Object.assign({}, state, {
          followingCoins: state.followingCoins.filter(coin => coin.slug !== action.coin.slug)
        });
      }

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_FOLLOWING_COINS_DETAILS_SUCCESS"]:
      {
        return Object.assign({}, state, {
          followingCoinsDetails: action.coinsInfo
        });
      }

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_FOLLOWING_COINS_DETAILS_FAILURE"]:
      {
        return Object.assign({}, state, {
          error: action.error
        });
      }

    default:
      return state;
  }
}

/***/ })

})
//# sourceMappingURL=app.1675732b57eeb10eecd2.hot-update.js.map