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
  chrome.notifications.create('NOTFICATION_ID', {
    type: 'basic',
    iconUrl: 'img/icon-128.png',
    title: 'Test Notification',
    message: 'This is a test notification',
    priority: 2
  });
}

/***/ })

})
//# sourceMappingURL=background.4a45eeb98d6af36fbaba.hot-update.js.map