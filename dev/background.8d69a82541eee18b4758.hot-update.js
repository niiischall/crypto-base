webpackHotUpdate("background",{

/***/ "./src/background/index.ts":
/*!*********************************!*\
  !*** ./src/background/index.ts ***!
  \*********************************/
/*! exports provided: notificationInBackground */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notificationInBackground", function() { return notificationInBackground; });
notificationInBackground();
function notificationInBackground() {
  console.log('I am here to send notifications for price change!');
  chrome.alarms.create('testAlarm', {
    periodInMinutes: 1
  });
}

/***/ })

})
//# sourceMappingURL=background.8d69a82541eee18b4758.hot-update.js.map