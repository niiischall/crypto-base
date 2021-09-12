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
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api */ "./src/services/api.ts");
/* harmony import */ var _services_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/helpers */ "./src/services/helpers.ts");





const getMarketTicker = async notificationCoins => {
  const requestURL = `${_services_api__WEBPACK_IMPORTED_MODULE_2__["apiEndPoints"].coinsQuotes}${notificationCoins.join(',')}`;
  const response = await Object(_services_api__WEBPACK_IMPORTED_MODULE_2__["fetchApi"])(requestURL);
  const json = await response.json();
  const latestQuotes = Object.values(json.data).map(coin => {
    return {
      name: coin.name,
      price: `$${Object(_services_helpers__WEBPACK_IMPORTED_MODULE_3__["normalizePrice"])(coin.quote.USD.price)}`
    };
  });
  return latestQuotes;
};

const getNotificationMessage = async () => {
  const signedInUser = localStorage.getItem('userId');
  let message = '';

  if (signedInUser) {
    Object(_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__["onSnapshot"])(Object(_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__["collection"])(_services_firebase__WEBPACK_IMPORTED_MODULE_0__["default"], 'users'), async snapshot => {
      const db = snapshot.docs.map(doc => doc.data());
      const data = db.find(data => data.userId === signedInUser);

      if (data) {
        const notificationCoins = data.notification.map(coin => coin.slug);

        if (notificationCoins.length > 0) {
          const latestQuotes = await getMarketTicker(notificationCoins);
          return Object(_services_helpers__WEBPACK_IMPORTED_MODULE_3__["normalizeNotificationMessage"])(latestQuotes);
        }
      }
    });
  }

  return message;
};

const notificationInBackground = () => {
  //Setting up alarm for notification.
  chrome.alarms.create('notificationAlarm', {
    periodInMinutes: 1
  }); //Firing notification upon that alarm.

  chrome.alarms.onAlarm.addListener(async alarm => {
    const message = await getNotificationMessage();
    console.log('Message: ');
    console.log(message);

    if (alarm.name === 'notificationAlarm') {
      const message = '';
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
//# sourceMappingURL=background.775619068b5371588a58.hot-update.js.map