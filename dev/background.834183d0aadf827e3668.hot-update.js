webpackHotUpdate("background",{

/***/ "./src/background/index.ts":
/*!*********************************!*\
  !*** ./src/background/index.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

messageInBackground();
chrome.notifications.create('NOTFICATION_ID', {
  type: 'basic',
  iconUrl: 'img/icon-128.png',
  title: 'Test Notification',
  message: 'This is a test notification',
  priority: 2
});

/***/ })

})
//# sourceMappingURL=background.834183d0aadf827e3668.hot-update.js.map