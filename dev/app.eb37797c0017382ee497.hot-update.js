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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "./node_modules/@material-ui/icons/Favorite.js");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/helpers */ "./src/services/helpers.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
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
    color: '#979797',
    fontSize: 16
  },
  iconButton: {
    marginLeft: 'auto'
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
    fontSize: 8,
    fontWeight: 700,
    color: '#669900'
  },
  price: {
    color: '#979797',
    display: 'block',
    marginTop: 5,
    fontSize: 10,
    fontWeight: 500
  },
  priceChange: {
    fontSize: 10,
    marginLeft: 3
  },
  change: {
    marginRight: 2,
    fontWeight: 500
  }
}));
const Popular = () => {
  const classes = useStyles();
  const coins = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.homePageCoins);
  const latestListings = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.latestListings);

  const renderPriceChange = change => {
    const isPositive = change > 0;
    const absoluteChange = Math.abs(change);
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("span", {
      className: classes.priceChange,
      style: {
        color: isPositive ? '#006600' : '#cc3300'
      },
      children: isPositive ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("span", {
        className: classes.change,
        children: ["\u2191", absoluteChange, "%"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 11
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("span", {
        className: classes.change,
        children: ["\u2193", absoluteChange, "%"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }, undefined);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
    className: classes.listingsContainer,
    children: latestListings.length > 0 && Object.keys(coins).length > 0 && latestListings.map(listing => {
      const logo = coins[listing.id].logo;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        className: classes.listing,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("img", {
          src: logo,
          alt: `${listing.slug}-logo`,
          className: classes.image
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          className: classes.textBox,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("span", {
            className: classes.name,
            children: listing.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("span", {
            className: classes.symbol,
            children: listing.symbol
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("span", {
            className: classes.price,
            children: ["$", Object(_services_helpers__WEBPACK_IMPORTED_MODULE_5__["normalizePrice"])(listing.quote.USD.price), " |", renderPriceChange(listing.quote.USD.percent_change_24h.toFixed(2))]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
          className: classes.iconButton,
          onClick: () => console.log('Favorite!'),
          disableRipple: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_4___default.a, {
            className: classes.icon
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 15
        }, undefined)]
      }, listing.id, true, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 13
      }, undefined);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 99,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (Popular);

/***/ })

})
//# sourceMappingURL=app.eb37797c0017382ee497.hot-update.js.map