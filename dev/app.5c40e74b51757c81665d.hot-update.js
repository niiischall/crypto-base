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
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "./node_modules/@material-ui/icons/Favorite.js");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tests_mocks_mock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../__tests__/mocks/mock */ "./src/__tests__/mocks/mock.ts");
/* harmony import */ var _services_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/helpers */ "./src/services/helpers.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/geekyants/Desktop/Hackathon-21/crypto-base/src/pages/Home/Popular.tsx";






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
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
    paddingRight: 15,
    transition: 'all .2s linear',
    '&:hover': {
      backgroundColor: '#f8f8f8',
      boxShadow: '0 0 0 1px rgb(0 0 0 / 5%), 0 5px 15px rgb(0 0 0 / 15%)'
    }
  },
  textBox: {
    marginLeft: 10
  },
  icon: {
    marginLeft: 'auto',
    color: '#979797',
    fontSize: 16
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
    fontSize: 8
  },
  price: {
    display: 'block',
    marginTop: 5,
    fontSize: 10,
    fontWeight: 700
  }
}));
const Popular = () => {
  const classes = useStyles();
  /*
  const coins = useSelector((state: any) => state.homePageCoins);
  const latestListings = useSelector((state: any) => state.latestListings);
  */

  const coins = { ..._tests_mocks_mock__WEBPACK_IMPORTED_MODULE_3__["homePageCoins"]
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
    className: classes.listingsContainer,
    children: _tests_mocks_mock__WEBPACK_IMPORTED_MODULE_3__["latestListings"].length > 0 && Object.keys(coins).length > 0 && _tests_mocks_mock__WEBPACK_IMPORTED_MODULE_3__["latestListings"].map(listing => {
      const logo = coins[listing.id].logo;
      console.log(listing);
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        className: classes.listing,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
          src: logo,
          alt: `${listing.slug}-logo`,
          className: classes.image
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          className: classes.textBox,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("span", {
            className: classes.name,
            children: listing.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("span", {
            className: classes.symbol,
            children: listing.symbol
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("span", {
            className: classes.price,
            children: ["$", Object(_services_helpers__WEBPACK_IMPORTED_MODULE_4__["normalizePrice"])(listing.quote.USD.price)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_2___default.a, {
          className: classes.icon
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 15
        }, undefined)]
      }, listing.id, true, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 13
      }, undefined);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (Popular);

/***/ })

})
//# sourceMappingURL=app.5c40e74b51757c81665d.hot-update.js.map