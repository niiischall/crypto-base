webpackHotUpdate("app",{

/***/ "./src/actions/actions.ts":
/*!********************************!*\
  !*** ./src/actions/actions.ts ***!
  \********************************/
/*! exports provided: getMarketTicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMarketTicker", function() { return getMarketTicker; });
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/api */ "./src/services/api.ts");

async function getMarketTicker() {
  try {
    console.log(Object({"NODE_ENV":"development","PUBLIC_URL":undefined,"WDS_SOCKET_HOST":undefined,"WDS_SOCKET_PATH":undefined,"WDS_SOCKET_PORT":undefined}).REACT_APP_CMC_KEY);
    const response = await Object(_services_api__WEBPACK_IMPORTED_MODULE_0__["fetchApi"])(_services_api__WEBPACK_IMPORTED_MODULE_0__["apiEndPoints"].marketTicker);

    if (response.ok) {
      const json = await response.json();
      console.log(json);
    } else {
      console.log('Error in fetching!');
    }
  } catch (error) {
    console.log('Error in fetching!');
  }
}

/***/ })

})
//# sourceMappingURL=app.f9c07e8569a24dc04d65.hot-update.js.map