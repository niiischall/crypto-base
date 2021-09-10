webpackHotUpdate("app",{

/***/ "./src/services/api.ts":
/*!*****************************!*\
  !*** ./src/services/api.ts ***!
  \*****************************/
/*! exports provided: apiEndPoints, fetchApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiEndPoints", function() { return apiEndPoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchApi", function() { return fetchApi; });
const baseCoinAPI = 'https://pro-api.coinmarketcap.com/';
const baseAuthAPI = 'https://identitytoolkit.googleapis.com/v1/accounts:';
const apiVersion = 'v1';
const apiKey = `&CMC_PRO_API_KEY=${"3b3805da-f1c9-49e0-b771-1dbc44005362"}`;
const authKey = `?key=${"AIzaSyD72gMheiysnrSBbCaNNjNqfkFDw5zyWgY"}`;
const apiEndPoints = {
  totalCoins: '/cryptocurrency/map?sort=cmc_rank&limit=500&listing_status=active',
  popularCoins: '/cryptocurrency/listings/latest?limit=25',
  trendingCoins: '/cryptocurrency/listings/latest?sort=percent_change_24h&limit=25',
  coinsInfo: '/cryptocurrency/info?slug=',
  signUp: `signUp${authKey}`,
  signIn: `signInWithPassword${authKey}`
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

/***/ })

})
//# sourceMappingURL=app.c5eb33a3a3625046db42.hot-update.js.map