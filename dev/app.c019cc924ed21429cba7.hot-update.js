webpackHotUpdate("app",{

/***/ "./src/pages/Home/Popular.tsx":
/*!************************************!*\
  !*** ./src/pages/Home/Popular.tsx ***!
  \************************************/
/*! exports provided: Popular, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Popular", function() { return Popular; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/geekyants/Desktop/Hackathon-21/crypto-base/src/pages/Home/Popular.tsx";




const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  listingsContainer: {
    height: '355px',
    overflowY: 'auto'
  },
  listing: {
    borderRadius: '5px',
    backgroundColor: '#eeeeee',
    display: 'flex',
    alignItems: 'center',
    width: '85%',
    height: 75,
    margin: '0px auto',
    marginTop: 15,
    marginBottom: 15,
    paddingLeft: 15,
    transition: 'all .2s linear',
    '&:hover': {
      backgroundColor: '#f8f8f8',
      boxShadow: '0 0 0 1px rgb(0 0 0 / 5%), 0 5px 15px rgb(0 0 0 / 15%)'
    }
  },
  textBox: {
    marginLeft: 10
  },
  image: {
    width: 30,
    height: 30
  },
  name: {
    fontSize: 14,
    fontWeight: 600,
    marginRight: 5
  },
  symbol: {
    fontSize: 10
  }
}));
const Popular = () => {
  const classes = useStyles();
  const coins = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.homePageCoins);
  const latestListings = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.latestListings);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    className: classes.listingsContainer,
    children: latestListings.length > 0 && latestListings.map(listing => {
      const logo = coins[listing.id];
      console.log(logo);
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: classes.listing,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("img", {
          src: '',
          alt: `${listing.slug}-logo`,
          className: classes.image
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: classes.textBox,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
            className: classes.name,
            children: listing.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
            className: classes.symbol,
            children: listing.symbol
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 15
        }, undefined)]
      }, listing.id, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 13
      }, undefined);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (Popular);

/***/ })

})
//# sourceMappingURL=app.c019cc924ed21429cba7.hot-update.js.map