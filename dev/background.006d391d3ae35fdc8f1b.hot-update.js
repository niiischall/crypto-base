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
  chrome.notifications.create('NOTFICATION_ID_NEWEST', {
    type: 'basic',
    iconUrl: 'img/icon-128.png',
    title: 'Test Notification',
    message: 'This is a test notification',
    priority: 2
  });
}

/***/ })

})
//# sourceMappingURL=background.006d391d3ae35fdc8f1b.hot-update.js.map