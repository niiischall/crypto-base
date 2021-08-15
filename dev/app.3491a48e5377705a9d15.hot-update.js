webpackHotUpdate("app",{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! exports provided: App, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Header */ "./src/components/Header/index.tsx");
/* harmony import */ var _pages_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/Layout */ "./src/pages/Layout/index.tsx");
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Navigation */ "./src/components/Navigation/index.tsx");
/* harmony import */ var _store_actions_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/actions/actions */ "./src/store/actions/actions.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/geekyants/Desktop/Hackathon-21/crypto-base/src/App.tsx";








const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  appContainer: {
    width: 360,
    height: 600,
    backgroundColor: '#F8F8F8',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
}));
const App = () => {
  const classes = useStyles();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const [value, setValue] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('home');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch(Object(_store_actions_actions__WEBPACK_IMPORTED_MODULE_6__["getLatestListings"])());
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
    className: classes.appContainer,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
      currentPage: value
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_pages_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
      currentPage: value
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_Navigation__WEBPACK_IMPORTED_MODULE_5__["default"], {
      currentPage: value,
      switchPage: handleChange
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

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

/***/ }),

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
        dispatch(getLatestListingsSuccess(json));
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
//# sourceMappingURL=app.3491a48e5377705a9d15.hot-update.js.map