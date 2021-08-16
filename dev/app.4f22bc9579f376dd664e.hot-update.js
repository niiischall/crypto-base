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
    backgroundColor: 'orangered',
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
  const data = Object.values(coins);
  /*
  category: "coin"
  date_added: "2013-04-28T00:00:00.000Z"
  description: "Bitcoin (BTC) is a cryptocurrency . Users are able to generate BTC through the process of mining. Bitcoin has a current supply of 18,786,662. The last known price of Bitcoin is 45,935.22321409 USD and is down -0.96 over the last 24 hours. It is currently trading on 8909 active market(s) with $30,065,428,776.82 traded over the last 24 hours. More information can be found at https://bitcoin.org/."
  id: 1
  is_hidden: 0
  logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
  name: "Bitcoin"
  notice: ""
  platform: null
  slug: "bitcoin"
  subreddit: "bitcoin"
  symbol: "BTC"
  tag-groups: (29) ["OTHER", "CONSENSUS_ALGORITHM", "CONSENSUS_ALGORITHM", "PROPERTY", "PROPERTY", "PROPERTY", "PROPERTY", "PROPERTY", "PROPERTY", "PROPERTY", "PROPERTY", "PROPERTY", "PROPERTY", "PROPERTY", "PROPERTY", "PROPERTY", "PROPERTY", "PROPERTY", "PROPERTY", "PROPERTY", "PROPERTY", "PROPERTY", "PROPERTY", "PROPERTY", "PROPERTY", "PROPERTY", "PROPERTY", "PROPERTY", "PROPERTY"]
  tag-names: (29) ["Mineable", "PoW", "SHA-256", "Store of Value", "State channels", "Coinbase Ventures Portfolio", "Three Arrows Capital Portfolio", "Polychain Capital Portfolio", "Binance Labs Portfolio", "Arrington XRP capital", "Blockchain Capital Portfolio", "BoostVC Portfolio", "CMS Holdings Portfolio", "DCG Portfolio", "DragonFly Capital Portfolio", "Electric Capital Portfolio", "Fabric Ventures Portfolio", "Framework Ventures", "Galaxy Digital Portfolio", "Huobi Capital", "Alameda Research Portfolio", "A16Z Portfolio", "1Confirmation Portfolio", "Winklevoss Capital", "USV Portfolio", "Placeholder Ventures Portfolio", "Pantera Capital Portfolio", "Multicoin Capital Portfolio", "Paradigm XZY Screener"]
  tags: (29) ["mineable", "pow", "sha-256", "store-of-value", "state-channels", "coinbase-ventures-portfolio", "three-arrows-capital-portfolio", "polychain-capital-portfolio", "binance-labs-portfolio", "arrington-xrp-capital", "blockchain-capital-portfolio", "boostvc-portfolio", "cms-holdings-portfolio", "dcg-portfolio", "dragonfly-capital-portfolio", "electric-capital-portfolio", "fabric-ventures-portfolio", "framework-ventures", "galaxy-digital-portfolio", "huobi-capital", "alameda-research-portfolio", "a16z-portfolio", "1confirmation-portfolio", "winklevoss-capital", "usv-portfolio", "placeholder-ventures-portfolio", "pantera-capital-portfolio", "multicoin-capital-portfolio", "paradigm-xzy-screener"]
  twitter_username: ""
  urls: {website: Array(1), twitter: Array(0), message_board: Array(1)
  */

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    className: classes.listingsContainer,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: classes.listing,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("img", {
        src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png',
        alt: `bitcoin-logo`,
        className: classes.image
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: classes.textBox,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
          className: classes.name,
          children: "Bitcoin"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
          className: classes.symbol,
          children: "BTC"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 74,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (Popular);

/***/ })

})
//# sourceMappingURL=app.4f22bc9579f376dd664e.hot-update.js.map