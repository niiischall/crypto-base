webpackHotUpdate("app",{

/***/ "./src/components/SearchInput/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/SearchInput/index.tsx ***!
  \**********************************************/
/*! exports provided: SearchInput, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchInput", function() { return SearchInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _SearchResults__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SearchResults */ "./src/components/SearchInput/SearchResults.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/geekyants/Desktop/Hackathon-21/crypto-base/src/components/SearchInput/index.tsx";








const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  form: {
    margin: theme.spacing(1)
  }
}));
const SearchInput = props => {
  const classes = useStyles();
  const totalCoins = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(state => state.search.totalCoins);
  const [search, setSearch] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [searchedResult, setSearchedResult] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [suggestions, showSuggestions] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const searching = () => {
    let filteredSearches = [];

    if (totalCoins.length > 0) {
      filteredSearches = totalCoins.filter(coin => {
        if (coin.toLowerCase().includes(search.toLowerCase())) {
          return coin;
        }
      });
    }

    return filteredSearches;
  };

  const delayedSearch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(Object(lodash__WEBPACK_IMPORTED_MODULE_4__["debounce"])(searching, 300), [search]);

  const searchHandler = searchText => {
    setSearch(searchText);
  };

  const onInputBlur = () => {
    showSuggestions(false);
  };

  const onInputFocus = () => {
    showSuggestions(true);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const searches = delayedSearch();
    console.log('Searches');
    console.log(searches);
    setSearchedResult(searches);
    return delayedSearch.cancel;
  }, [search, delayedSearch]);
  const InputProps = {
    startAdornment: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["InputAdornment"], {
      position: "start",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__["Search"], {
        fontSize: "large"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, undefined),
    disableUnderline: true,
    style: {
      fontSize: 14,
      color: '#323232'
    },
    onBlur: onInputBlur,
    onFocus: onInputFocus,
    value: search
  };
  console.log(search);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["FormControl"], {
    className: classes.form,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
      id: "coin-search-input",
      placeholder: "Search coins",
      InputProps: InputProps,
      onChange: event => searchHandler(event.target.value)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, undefined), suggestions && searchedResult && searchedResult.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_SearchResults__WEBPACK_IMPORTED_MODULE_5__["default"], {
      results: totalCoins
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (SearchInput);

/***/ })

})
//# sourceMappingURL=app.c667c85d117e7c20d50a.hot-update.js.map