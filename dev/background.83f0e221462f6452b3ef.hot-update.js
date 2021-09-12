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
  //Setting up alarm for notification.
  chrome.alarms.create('notificationAlarm', {
    periodInMinutes: 5
  }); //Firing notification upon that alarm.

  chrome.alarms.onAlarm.addListener(alarm => {
    const message = `Bitcoin is currently trading at $45,989. \nEethereum is currently tading at $35,000. \nSolana is currently trading at $45.`;

    if (alarm.name === 'notificationAlarm') {
      chrome.notifications.create('test', {
        type: 'basic',
        iconUrl: 'img/icon-128.png',
        title: 'Price Change Notification',
        message: message,
        priority: 2
      });
    }
  });
}

/***/ })

})
//# sourceMappingURL=background.83f0e221462f6452b3ef.hot-update.js.map