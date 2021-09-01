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
        iconUrl: '',
        title: 'Test Message',
        message: 'You are awesome!',
        priority: 2
      });
    }
  });
}

/***/ })

})
//# sourceMappingURL=background.a5e48f77ac2edeb1ef72.hot-update.js.map