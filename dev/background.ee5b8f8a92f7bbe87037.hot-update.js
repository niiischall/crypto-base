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
/* harmony import */ var _services_firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/firebase */ "./src/services/firebase.ts");
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/firestore */ "./node_modules/@firebase/firestore/dist/index.esm2017.js");


notificationInBackground();
function notificationInBackground() {
  console.log('Setting up notification!');
  console.log(localStorage.getItem('userId'));
  Object(_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__["onSnapshot"])(Object(_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__["collection"])(_services_firebase__WEBPACK_IMPORTED_MODULE_0__["default"], 'users'), snapshot => {
    const db = snapshot.docs.map(doc => doc.data());
    console.log(db);
  }); //Setting up alarm for notification.

  chrome.alarms.create('notificationAlarm', {
    periodInMinutes: 1
  }); //Firing notification upon that alarm.

  chrome.alarms.onAlarm.addListener(alarm => {
    const message = `Bitcoin is currently trading at $45,989. \nEethereum is currently tading at $35,000. \nSolana is currently trading at $45.`;

    if (alarm.name === 'notificationAlarm') {
      chrome.notifications.create('price change', {
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
//# sourceMappingURL=background.ee5b8f8a92f7bbe87037.hot-update.js.map