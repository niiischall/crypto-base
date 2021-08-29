webpackHotUpdate("app",{

/***/ "./src/pages/Layout/index.tsx":
/*!************************************!*\
  !*** ./src/pages/Layout/index.tsx ***!
  \************************************/
/*! exports provided: Layout, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Home */ "./src/pages/Home/index.tsx");
/* harmony import */ var _Profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Profile */ "./src/pages/Profile/index.tsx");
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Search */ "./src/pages/Search/index.tsx");
/* harmony import */ var _store_actions_actionHome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/actions/actionHome */ "./src/store/actions/actionHome.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/geekyants/Desktop/Hackathon-21/crypto-base/src/pages/Layout/index.tsx";







const Layout = props => {
  const {
    currentPage
  } = props;
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const followingCoins = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.home.followingCoins);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (followingCoins.length > 0) {
      console.log('Following Coins: ');
      console.log(followingCoins);
      dispatch(Object(_store_actions_actionHome__WEBPACK_IMPORTED_MODULE_5__["getFollowingCoinsDetails"])(followingCoins));
    }
  }, [dispatch, followingCoins]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    children: [currentPage === 'home' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_Home__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 34
    }, undefined), currentPage === 'search' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_Search__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 36
    }, undefined), currentPage === 'profile' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_Profile__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 37
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=app.09c68b4a74f00b7075e7.hot-update.js.map