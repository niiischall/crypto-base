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
const apiVersion = 'v1';
const apiKey = `&CMC_PRO_API_KEY=${"3b3805da-f1c9-49e0-b771-1dbc44005362"}`;
const apiEndPoints = {
  latestListing: '/cryptocurrency/listings/latest?limit=25'
};
async function fetchApi(endPoint, payload, method = 'get', headers) {
  let path = `${baseAPI}${apiVersion}${endPoint}${apiKey}`;
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
//# sourceMappingURL=app.d15ed7cd2b128a802306.hot-update.js.map