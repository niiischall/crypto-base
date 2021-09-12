webpackHotUpdate("background",{

/***/ "./src/background/index.ts":
/*!*********************************!*\
  !*** ./src/background/index.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/firebase */ "./src/services/firebase.ts");
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/firestore */ "./node_modules/@firebase/firestore/dist/index.esm2017.js");



const notificationInBackground = () => {
  console.log('Setting up notification!');
  const signedInUser = localStorage.getItem('userId');
  let notificationCoins;
  let coinPriceTicker;

  if (signedInUser) {
    Object(_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__["onSnapshot"])(Object(_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__["collection"])(_services_firebase__WEBPACK_IMPORTED_MODULE_0__["default"], 'users'), snapshot => {
      const db = snapshot.docs.map(doc => doc.data());
      const data = db.find(data => data.userId === signedInUser);

      if (data) {
        notificationCoins = data.notification.map(coin => coin.slug);
      }

      if (notificationCoins.length > 0) {}
    });
  } //Setting up alarm for notification.


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
};

/* harmony default export */ __webpack_exports__["default"] = (notificationInBackground());

/***/ })

})
//# sourceMappingURL=background.a5bb411ebac7ddc1ec6f.hot-update.js.map