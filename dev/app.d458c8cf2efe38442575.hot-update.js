webpackHotUpdate("app",{

/***/ "./src/store/actions/actionTypes.ts":
/*!******************************************!*\
  !*** ./src/store/actions/actionTypes.ts ***!
  \******************************************/
/*! exports provided: FETCH_POPULAR_COINS, FETCH_POPULAR_COINS_SUCCESS, FETCH_POPULAR_COINS_FAILURE, FETCH_POPULAR_COINS_DETAILS, FETCH_POPULAR_COINS_DETAILS_SUCCESS, FETCH_POPULAR_COINS_DETAILS_FAILURE, FETCH_TRENDING_COINS, FETCH_TRENDING_COINS_SUCCESS, FETCH_TRENDING_COINS_FAILURE, FETCH_TRENDING_COINS_DETAILS, FETCH_TRENDING_COINS_DETAILS_SUCCESS, FETCH_TRENDING_COINS_DETAILS_FAILURE, FOLLOW_COIN, UNFOLLOW_COIN, FETCH_FOLLOWING_COINS_DETAILS, FETCH_FOLLOWING_COINS_DETAILS_SUCCESS, FETCH_FOLLOWING_COINS_DETAILS_FAILURE, START_COIN_NOTIFICATION, STOP_COIN_NOTIFICATION, FETCH_TOTALCOINS, FETCH_TOTALCOINS_SUCCESS, FETCH_TOTALCOINS_FAILURE, SEARCH_COIN_TEXT, SEARCH_COIN, SEARCH_COIN_SUCCESS, SEARCH_COIN_FAILURE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_POPULAR_COINS", function() { return FETCH_POPULAR_COINS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_POPULAR_COINS_SUCCESS", function() { return FETCH_POPULAR_COINS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_POPULAR_COINS_FAILURE", function() { return FETCH_POPULAR_COINS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_POPULAR_COINS_DETAILS", function() { return FETCH_POPULAR_COINS_DETAILS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_POPULAR_COINS_DETAILS_SUCCESS", function() { return FETCH_POPULAR_COINS_DETAILS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_POPULAR_COINS_DETAILS_FAILURE", function() { return FETCH_POPULAR_COINS_DETAILS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_TRENDING_COINS", function() { return FETCH_TRENDING_COINS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_TRENDING_COINS_SUCCESS", function() { return FETCH_TRENDING_COINS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_TRENDING_COINS_FAILURE", function() { return FETCH_TRENDING_COINS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_TRENDING_COINS_DETAILS", function() { return FETCH_TRENDING_COINS_DETAILS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_TRENDING_COINS_DETAILS_SUCCESS", function() { return FETCH_TRENDING_COINS_DETAILS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_TRENDING_COINS_DETAILS_FAILURE", function() { return FETCH_TRENDING_COINS_DETAILS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_COIN", function() { return FOLLOW_COIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_COIN", function() { return UNFOLLOW_COIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_FOLLOWING_COINS_DETAILS", function() { return FETCH_FOLLOWING_COINS_DETAILS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_FOLLOWING_COINS_DETAILS_SUCCESS", function() { return FETCH_FOLLOWING_COINS_DETAILS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_FOLLOWING_COINS_DETAILS_FAILURE", function() { return FETCH_FOLLOWING_COINS_DETAILS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "START_COIN_NOTIFICATION", function() { return START_COIN_NOTIFICATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STOP_COIN_NOTIFICATION", function() { return STOP_COIN_NOTIFICATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_TOTALCOINS", function() { return FETCH_TOTALCOINS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_TOTALCOINS_SUCCESS", function() { return FETCH_TOTALCOINS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_TOTALCOINS_FAILURE", function() { return FETCH_TOTALCOINS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_COIN_TEXT", function() { return SEARCH_COIN_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_COIN", function() { return SEARCH_COIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_COIN_SUCCESS", function() { return SEARCH_COIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_COIN_FAILURE", function() { return SEARCH_COIN_FAILURE; });
const FETCH_POPULAR_COINS = 'FETCH_POPULAR_COINS';
const FETCH_POPULAR_COINS_SUCCESS = 'FETCH_POPULAR_COINS_SUCCESS';
const FETCH_POPULAR_COINS_FAILURE = 'FETCH_POPULAR_COINS_FAILURE';
const FETCH_POPULAR_COINS_DETAILS = 'FETCH_POPULAR_COINS_DETAILS';
const FETCH_POPULAR_COINS_DETAILS_SUCCESS = 'FETCH_POPULAR_COINS_DETAILS_SUCCESS';
const FETCH_POPULAR_COINS_DETAILS_FAILURE = 'FETCH_POPULAR_COINS_DETAILS_FAILURE';
const FETCH_TRENDING_COINS = 'FETCH_TRENDING_COINS';
const FETCH_TRENDING_COINS_SUCCESS = 'FETCH_TRENDING_COINS_SUCCESS';
const FETCH_TRENDING_COINS_FAILURE = 'FETCH_TRENDING_COINS_FAILURE ';
const FETCH_TRENDING_COINS_DETAILS = 'FETCH_TRENDING_COINS_DETAILS';
const FETCH_TRENDING_COINS_DETAILS_SUCCESS = 'FETCH_TRENDING_COINS_DETAILS_SUCCESS';
const FETCH_TRENDING_COINS_DETAILS_FAILURE = 'FETCH_TRENDING_COINS_DETAILS_FAILURE';
const FOLLOW_COIN = 'FOLLOW_COIN';
const UNFOLLOW_COIN = 'UNFOLLOW_COIN';
const FETCH_FOLLOWING_COINS_DETAILS = 'FETCH_FOLLOWING_COINS_DETAILS';
const FETCH_FOLLOWING_COINS_DETAILS_SUCCESS = 'FETCH_FOLLOWING_COINS_DETAILS_SUCCESS';
const FETCH_FOLLOWING_COINS_DETAILS_FAILURE = 'FETCH_FOLLOWING_COINS_DETAILS_FAILURE';
const START_COIN_NOTIFICATION = 'START_COIN_NOTIFICATION';
const STOP_COIN_NOTIFICATION = 'STOP_COIN_NOTIFICATION';
const FETCH_TOTALCOINS = 'FETCH_ALLCOINS';
const FETCH_TOTALCOINS_SUCCESS = 'FETCH_ALLCOINS_SUCCESS';
const FETCH_TOTALCOINS_FAILURE = 'FETCH_ALLCOINS_FAILURE';
const SEARCH_COIN_TEXT = 'SEARCH_COIN_TEXT';
const SEARCH_COIN = 'SEARCH_COIN';
const SEARCH_COIN_SUCCESS = 'SEARCH_COIN_SUCCESS';
const SEARCH_COIN_FAILURE = 'SEARCH_COIN_FAILURE';

/***/ })

})
//# sourceMappingURL=app.d458c8cf2efe38442575.hot-update.js.map