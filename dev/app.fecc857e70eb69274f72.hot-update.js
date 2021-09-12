webpackHotUpdate("app",{

/***/ "./src/services/firebase.ts":
/*!**********************************!*\
  !*** ./src/services/firebase.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");


const firebaseConfig = {
  apiKey: 'AIzaSyD72gMheiysnrSBbCaNNjNqfkFDw5zyWgY',
  authDomain: 'crypto-base-db.firebaseapp.com',
  databaseURL: 'https://crypto-base-db-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'crypto-base-db',
  storageBucket: 'crypto-base-db.appspot.com',
  messagingSenderId: '853554508159',
  appId: '1:853554508159:web:9a2f30558c2fc026066a4a'
};
const app = Object(firebase_app__WEBPACK_IMPORTED_MODULE_0__["initializeApp"])(firebaseConfig);
/* harmony default export */ __webpack_exports__["default"] = (Object(firebase_firestore__WEBPACK_IMPORTED_MODULE_1__["getFirestore"])());

/***/ })

})
//# sourceMappingURL=app.fecc857e70eb69274f72.hot-update.js.map