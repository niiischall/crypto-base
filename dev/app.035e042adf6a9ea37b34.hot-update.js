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
const baseAPI = 'https://pro-api.coinmarketcap.com/';
const apiVersion = '/v1/';
const apiEndPoints = {
  marketStatus: 'market-status',
  marketTicker: 'tickers',
  marketDepth: 'depth',
  marketTrade: 'trades'
};
async function fetchApi(endPoint, payload, method = 'get', headers) {
  let path = `${baseAPI}${apiVersion}${endPoint}`;
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
//# sourceMappingURL=app.035e042adf6a9ea37b34.hot-update.js.map