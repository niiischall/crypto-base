webpackHotUpdate("app",{

/***/ "./src/pages/Search/index.tsx":
/*!************************************!*\
  !*** ./src/pages/Search/index.tsx ***!
  \************************************/
/*! exports provided: Search, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return Search; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _components_Trending__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Trending */ "./src/components/Trending/index.tsx");
/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Search */ "./src/components/Search/index.tsx");
/* harmony import */ var _store_actions_actionSearch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/actions/actionSearch */ "./src/store/actions/actionSearch.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/geekyants/Desktop/Hackathon-21/crypto-base/src/pages/Search/index.tsx";







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  searchContainer: {
    flex: 1,
    height: '100%',
    backgroundColor: '#f3f3f3',
    overflowY: 'auto',
    paddingBottom: 15,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingLeft: 15,
    paddingRight: 15,
    width: '100%'
  }
}));
const Search = props => {
  const classes = useStyles();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const searchTerm = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.search.searchedCoinTerm);
  const searchedCoin = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.search.searchedCoin);
  const totalCoins = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.search.totalCoins);
  const trendingCoins = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.search.trendingCoins);
  const trendingCoinsDetails = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.search.trendingCoinsDetails);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (totalCoins.length === 0) {
      dispatch(Object(_store_actions_actionSearch__WEBPACK_IMPORTED_MODULE_5__["getTotalCoins"])());
    }
  }, [dispatch, totalCoins]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (trendingCoins.length > 0 && !trendingCoinsDetails) {
      dispatch(Object(_store_actions_actionSearch__WEBPACK_IMPORTED_MODULE_5__["getTrendingCoinsDetails"])(trendingCoins));
    }
  }, [dispatch, trendingCoins, trendingCoinsDetails]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
    className: classes.searchContainer,
    children: searchTerm && searchedCoin ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_Search__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 37
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_Trending__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 56
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ })

})
//# sourceMappingURL=app.dac07b43507842e9d975.hot-update.js.map