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
//# sourceMappingURL=background.6df4720a83648058c55b.hot-update.js.map