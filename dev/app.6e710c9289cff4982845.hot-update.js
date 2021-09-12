webpackHotUpdate("app",{

/***/ "./src/services/api.ts":
/*!*****************************!*\
  !*** ./src/services/api.ts ***!
  \*****************************/
/*! exports provided: apiEndPoints, fetchApi, authApi, firebaseAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiEndPoints", function() { return apiEndPoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchApi", function() { return fetchApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authApi", function() { return authApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseAPI", function() { return firebaseAPI; });
const baseCoinAPI = 'https://pro-api.coinmarketcap.com/';
const baseAuthAPI = 'https://identitytoolkit.googleapis.com/';
const baseFirebaseAPI = 'https://crypto-base-db-default-rtdb.asia-southeast1.firebasedatabase.app/coins.json';
const apiVersion = 'v1';
const authVersion = 'v1';
const apiKey = `&CMC_PRO_API_KEY=${"3b3805da-f1c9-49e0-b771-1dbc44005362"}`;
const authKey = `?key=${"AIzaSyD72gMheiysnrSBbCaNNjNqfkFDw5zyWgY"}`;
const firebaseKey = `?auth=${Object({"NODE_ENV":"development","PUBLIC_URL":undefined,"WDS_SOCKET_HOST":undefined,"WDS_SOCKET_PATH":undefined,"WDS_SOCKET_PORT":undefined,"REACT_APP_CMC_KEY":"3b3805da-f1c9-49e0-b771-1dbc44005362","REACT_APP_AUTH_KEY":"AIzaSyD72gMheiysnrSBbCaNNjNqfkFDw5zyWgY"}).FIREBASE_API_KEY}`;
const apiEndPoints = {
  totalCoins: '/cryptocurrency/map?sort=cmc_rank&limit=500&listing_status=active',
  popularCoins: '/cryptocurrency/listings/latest?limit=25',
  trendingCoins: '/cryptocurrency/listings/latest?sort=percent_change_24h&limit=25',
  coinsInfo: '/cryptocurrency/info?slug=',
  signUp: `/accounts:signUp`,
  signIn: `/accounts:signInWithPassword`
};
async function fetchApi(endPoint, payload, method = 'get', headers) {
  let path = `${baseCoinAPI}${apiVersion}${endPoint}${apiKey}`;
  const headersObject = { ...headers
  };
  let request = {
    body: JSON.stringify(payload),
    headers: headersObject,
    method: method.toLowerCase()
  };

  try {
    return fetch(path, request);
  } catch (e) {
    const stringError = e && e.toString && e.toString();
    const type = stringError === 'TypeError: Network request failed' ? 'networkError' : 'unknown';
    const error = {
      text: stringError,
      type
    };
    throw error;
  }
}
async function authApi(endPoint, method, payload, headers) {
  const path = `${baseAuthAPI}${authVersion}${endPoint}${authKey}`;
  const headersObject = { ...headers
  };
  let request = {
    body: JSON.stringify(payload),
    headers: headersObject,
    method: method.toLowerCase()
  };

  try {
    return fetch(path, request);
  } catch (e) {
    const stringError = e && e.toString && e.toString();
    const type = stringError === 'TypeError: Network request failed' ? 'networkError' : 'unknown';
    const error = {
      text: stringError,
      type
    };
    throw error;
  }
}
async function firebaseAPI(method, idToken, payload, headers) {
  const path = `${baseFirebaseAPI}${firebaseKey}`;
  const headersObject = { ...headers
  };
  let request = {
    body: JSON.stringify(payload),
    headers: headersObject,
    method: method.toLowerCase()
  };

  try {
    return fetch(path, request);
  } catch (e) {
    const stringError = e && e.toString && e.toString();
    const type = stringError === 'TypeError: Network request failed' ? 'networkError' : 'unknown';
    const error = {
      text: stringError,
      type
    };
    throw error;
  }
}

/***/ })

})
//# sourceMappingURL=app.6e710c9289cff4982845.hot-update.js.map