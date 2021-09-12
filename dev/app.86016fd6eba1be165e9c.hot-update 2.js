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
/* harmony import */ var _services_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/helpers */ "./src/services/helpers.ts");
/* harmony import */ var _store_actions_actionHome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/actions/actionHome */ "./src/store/actions/actionHome.ts");
/* harmony import */ var _store_actions_actionSearch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/actions/actionSearch */ "./src/store/actions/actionSearch.ts");
/* harmony import */ var _services_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/context */ "./src/services/context.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/Users/geekyants/Desktop/Hackathon-21/crypto-base/src/pages/Layout/index.tsx";










const Layout = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const userId = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.profile.userId);
  const idToken = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.profile.idToken);
  const followingCoins = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.home.followingCoins);
  const {
    page
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_services_context__WEBPACK_IMPORTED_MODULE_8__["default"]);
  const gatherInitialData = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    dispatch(Object(_store_actions_actionHome__WEBPACK_IMPORTED_MODULE_6__["getPopularCoins"])());
    dispatch(Object(_store_actions_actionSearch__WEBPACK_IMPORTED_MODULE_7__["getTrendingCoins"])());
  }, [dispatch]);
  const gatherFollowingCoinData = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(followingCoins => {
    dispatch(Object(_store_actions_actionHome__WEBPACK_IMPORTED_MODULE_6__["getFollowingCoinsDetails"])(followingCoins));
  }, [dispatch]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    gatherInitialData();
    const interval = setInterval(() => gatherInitialData(), _services_helpers__WEBPACK_IMPORTED_MODULE_5__["API_RECALL_TIMER"]);
    return () => clearInterval(interval);
  }, [dispatch, gatherInitialData]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (followingCoins.length > 0) {
      gatherFollowingCoinData(followingCoins);
      const interval = setInterval(() => gatherFollowingCoinData(followingCoins), _services_helpers__WEBPACK_IMPORTED_MODULE_5__["API_RECALL_TIMER"]);
      return () => clearInterval(interval);
    }
  }, [dispatch, followingCoins, gatherFollowingCoinData]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    children: [page === 'home' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_Home__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 27
    }, undefined), page === 'search' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_Search__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 29
    }, undefined), page === 'profile' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_Profile__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 30
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=app.86016fd6eba1be165e9c.hot-update.js.map