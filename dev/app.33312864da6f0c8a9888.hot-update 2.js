webpackHotUpdate("app",{

/***/ "./node_modules/firebase/firestore/dist/index.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/firebase/firestore/dist/index.esm.js ***!
  \***********************************************************/
/*! exports provided: AbstractUserDataWriter, Bytes, CACHE_SIZE_UNLIMITED, CollectionReference, DocumentReference, DocumentSnapshot, FieldPath, FieldValue, Firestore, FirestoreError, GeoPoint, LoadBundleTask, Query, QueryConstraint, QueryDocumentSnapshot, QuerySnapshot, SnapshotMetadata, Timestamp, Transaction, WriteBatch, _DatabaseId, _DocumentKey, _EmptyCredentialsProvider, _FieldPath, _cast, _debugAssert, _isBase64Available, _logWarn, _validateIsNotUsedTogether, addDoc, arrayRemove, arrayUnion, clearIndexedDbPersistence, collection, collectionGroup, connectFirestoreEmulator, deleteDoc, deleteField, disableNetwork, doc, documentId, enableIndexedDbPersistence, enableMultiTabIndexedDbPersistence, enableNetwork, endAt, endBefore, ensureFirestoreConfigured, executeWrite, getDoc, getDocFromCache, getDocFromServer, getDocs, getDocsFromCache, getDocsFromServer, getFirestore, increment, initializeFirestore, limit, limitToLast, loadBundle, namedQuery, onSnapshot, onSnapshotsInSync, orderBy, query, queryEqual, refEqual, runTransaction, serverTimestamp, setDoc, setLogLevel, snapshotEqual, startAfter, startAt, terminate, updateDoc, waitForPendingWrites, where, writeBatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/firestore */ "./node_modules/@firebase/firestore/dist/index.esm2017.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbstractUserDataWriter", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["AbstractUserDataWriter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bytes", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["Bytes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CACHE_SIZE_UNLIMITED", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["CACHE_SIZE_UNLIMITED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CollectionReference", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["CollectionReference"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DocumentReference", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["DocumentReference"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DocumentSnapshot", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["DocumentSnapshot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FieldPath", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["FieldPath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FieldValue", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["FieldValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Firestore", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["Firestore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FirestoreError", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["FirestoreError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GeoPoint", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["GeoPoint"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadBundleTask", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["LoadBundleTask"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Query", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["Query"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QueryConstraint", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["QueryConstraint"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QueryDocumentSnapshot", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["QueryDocumentSnapshot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuerySnapshot", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["QuerySnapshot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SnapshotMetadata", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["SnapshotMetadata"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Timestamp", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["Timestamp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Transaction", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["Transaction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WriteBatch", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["WriteBatch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_DatabaseId", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["_DatabaseId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_DocumentKey", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["_DocumentKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_EmptyCredentialsProvider", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["_EmptyCredentialsProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_FieldPath", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["_FieldPath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_cast", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["_cast"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_debugAssert", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["_debugAssert"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_isBase64Available", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["_isBase64Available"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_logWarn", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["_logWarn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_validateIsNotUsedTogether", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["_validateIsNotUsedTogether"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addDoc", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["addDoc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayRemove", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["arrayRemove"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayUnion", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["arrayUnion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearIndexedDbPersistence", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["clearIndexedDbPersistence"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "collection", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["collection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "collectionGroup", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["collectionGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connectFirestoreEmulator", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["connectFirestoreEmulator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteDoc", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["deleteDoc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteField", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["deleteField"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "disableNetwork", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["disableNetwork"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doc", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["doc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "documentId", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["documentId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enableIndexedDbPersistence", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["enableIndexedDbPersistence"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enableMultiTabIndexedDbPersistence", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["enableMultiTabIndexedDbPersistence"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enableNetwork", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["enableNetwork"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "endAt", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["endAt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "endBefore", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["endBefore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ensureFirestoreConfigured", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["ensureFirestoreConfigured"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "executeWrite", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["executeWrite"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDoc", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["getDoc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDocFromCache", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["getDocFromCache"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDocFromServer", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["getDocFromServer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDocs", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["getDocs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDocsFromCache", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["getDocsFromCache"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDocsFromServer", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["getDocsFromServer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFirestore", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["getFirestore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "increment", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["increment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initializeFirestore", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["initializeFirestore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "limit", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["limit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "limitToLast", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["limitToLast"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadBundle", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["loadBundle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "namedQuery", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["namedQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onSnapshot", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["onSnapshot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onSnapshotsInSync", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["onSnapshotsInSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "orderBy", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["orderBy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "query", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["query"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryEqual", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["queryEqual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "refEqual", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["refEqual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "runTransaction", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["runTransaction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "serverTimestamp", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["serverTimestamp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setDoc", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["setDoc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setLogLevel", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["setLogLevel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "snapshotEqual", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["snapshotEqual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startAfter", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["startAfter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startAt", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["startAt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "terminate", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["terminate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateDoc", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["updateDoc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "waitForPendingWrites", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["waitForPendingWrites"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "where", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["where"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "writeBatch", function() { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__["writeBatch"]; });



/***/ }),

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
//# sourceMappingURL=app.33312864da6f0c8a9888.hot-update.js.map