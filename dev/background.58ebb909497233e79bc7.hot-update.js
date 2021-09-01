webpackHotUpdate("background",{

/***/ "./src/background/index.ts":
/*!*********************************!*\
  !*** ./src/background/index.ts ***!
  \*********************************/
/*! exports provided: messageInBackground */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messageInBackground", function() { return messageInBackground; });
messageInBackground();
function messageInBackground() {
  chrome.alarms.onAlarm.addListener(alarm => {
    if (alarm.name === 'cryptobase_notification') {
      chrome.notifications.create('cryptobase_notification', {
        type: 'basic',
        iconUrl: 'images/1.png',
        title: 'Price change Notification!',
        message: 'Prices have changed by a percent',
        priority: 2
      });
    }
  });
}

/***/ })

})
//# sourceMappingURL=background.58ebb909497233e79bc7.hot-update.js.map