webpackHotUpdate("app",{

/***/ "./src/store/actions/actions.ts":
/*!**************************************!*\
  !*** ./src/store/actions/actions.ts ***!
  \**************************************/
/*! exports provided: getLatestListings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLatestListings", function() { return getLatestListings; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ "./src/store/actions/actionTypes.ts");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api */ "./src/services/api.ts");



const getLatestListingsSuccess = listings => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_LATEST_LISTINGS_SUCCESS"],
    listings
  };
};

const getLatestListingsFailure = error => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_LATEST_LISTINGS_FAILURE"],
    error
  };
};

const getLatestListings = () => {
  return async dispatch => {
    try {
      const response = await Object(_services_api__WEBPACK_IMPORTED_MODULE_1__["fetchApi"])(_services_api__WEBPACK_IMPORTED_MODULE_1__["apiEndPoints"].latestListing);

      if (response.ok) {
        const json = await response.json();
        dispatch(getLatestListingsSuccess(json.data));
      } else {
        dispatch(getLatestListingsFailure('Unable to fetch latest cryptocurrency market listings.'));
      }
    } catch (error) {
      dispatch(getLatestListingsFailure('Unable to fetch latest cryptocurrency market listings.'));
    }
  };
};

/***/ })

})
//# sourceMappingURL=app.b5fd239773d8dc871f92.hot-update.js.map