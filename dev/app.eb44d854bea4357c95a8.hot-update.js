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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _SearchResults__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SearchResults */ "./src/components/SearchInput/SearchResults.tsx");
/* harmony import */ var _store_actions_actionSearch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/actions/actionSearch */ "./src/store/actions/actionSearch.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/Users/geekyants/Desktop/Hackathon-21/crypto-base/src/components/SearchInput/index.tsx";









const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  form: {
    margin: theme.spacing(1)
  }
}));
const SearchInput = props => {
  const classes = useStyles();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const search = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.search.searchedCoinTerm);
  const totalCoins = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.search.totalCoins);
  const [searchedResult, setSearchedResult] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [suggestions, showSuggestions] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false); //Debouncing logic for searching through the coins.

  const searching = () => {
    if (totalCoins.length > 0) {
      const filteredSearches = totalCoins.filter(coin => {
        if (coin.slug.toLowerCase().includes(search.toLowerCase())) {
          return coin;
        }
      });
      setSearchedResult(filteredSearches);
    }
  };

  const delayedSearch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(Object(lodash__WEBPACK_IMPORTED_MODULE_5__["debounce"])(searching, 300), [search]);

  const searchHandler = term => {
    dispatch(Object(_store_actions_actionSearch__WEBPACK_IMPORTED_MODULE_7__["searchCoinTerm"])(term));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    delayedSearch();
    return delayedSearch.cancel;
  }, [search, delayedSearch]); //Handlers for interacting with the search

  const onInputBlur = () => {
    setTimeout(() => showSuggestions(false), 250);
  };

  const onInputFocus = () => {
    showSuggestions(true);
  }; //Handler for searching a coin


  const handleCoinSearch = (coinName, coinSlug) => {
    dispatch(Object(_store_actions_actionSearch__WEBPACK_IMPORTED_MODULE_7__["searchCoinTerm"])(coinName));
    dispatch(Object(_store_actions_actionSearch__WEBPACK_IMPORTED_MODULE_7__["searchCoin"])(coinSlug));
  }; //Properties for Mui-TextField


  const InputProps = {
    startAdornment: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["InputAdornment"], {
      position: "start",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["Search"], {
        fontSize: "large"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["FormControl"], {
    className: classes.form,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
      id: "coin-search-input",
      placeholder: "Search coins",
      InputProps: InputProps,
      onChange: event => searchHandler(event.target.value)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, undefined), suggestions && searchedResult && searchedResult.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_SearchResults__WEBPACK_IMPORTED_MODULE_6__["default"], {
      results: searchedResult,
      search: handleCoinSearch
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (SearchInput);

/***/ })

})
//# sourceMappingURL=app.eb44d854bea4357c95a8.hot-update.js.map