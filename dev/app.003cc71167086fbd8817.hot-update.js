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
  chrome.notifications.create('cryptobase_notification', {
    type: 'basic',
    iconUrl: 'images/1.png',
    title: 'Price change Notification!',
    message: coinsToBeNotified[1].name,
    priority: 2
  });
};

/***/ })

})
//# sourceMappingURL=app.003cc71167086fbd8817.hot-update.js.map