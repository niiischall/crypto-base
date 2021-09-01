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
    if (alarm.name === 'testAlarm') {
      chrome.notifications.create('test', {
        type: 'basic',
        iconUrl: 'img/icon-128.png',
        title: 'Test Message',
        message: 'You are awesome!',
        priority: 2
      });
    }
  });
}

/***/ })

})
//# sourceMappingURL=background.fc2fa8c45840225ce09e.hot-update.js.map