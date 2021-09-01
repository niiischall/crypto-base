webpackHotUpdate("app",{

/***/ "./src/services/notification.ts":
/*!**************************************!*\
  !*** ./src/services/notification.ts ***!
  \**************************************/
/*! exports provided: setNotification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setNotification", function() { return setNotification; });
const isASignificantChange = percent_change => {
  return percent_change > 1 || percent_change < -1;
};

const setNotification = coins => {
  console.log(coins);
  const coinsToBeNotified = coins.filter(coin => isASignificantChange(coin.quote.USD.percent_change_1h));
  chrome.notifications.create('cryptobase notification', {
    type: 'basic',
    iconUrl: 'images/1.png',
    title: 'Test Message',
    message: 'You are awesome!',
    priority: 2
  });
};

/***/ })

})
//# sourceMappingURL=app.779d8eab19c51c973237.hot-update.js.map