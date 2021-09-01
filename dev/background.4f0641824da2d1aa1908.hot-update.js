webpackHotUpdate("background",{

/***/ "./src/background/index.ts":
/*!*********************************!*\
  !*** ./src/background/index.ts ***!
  \*********************************/
/*! exports provided: background */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "background", function() { return background; });
background();
function background() {
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
//# sourceMappingURL=background.4f0641824da2d1aa1908.hot-update.js.map