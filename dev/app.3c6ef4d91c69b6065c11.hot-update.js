webpackHotUpdate("app",{

/***/ "./src/components/Search/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Search/index.tsx ***!
  \*****************************************/
/*! exports provided: Search, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return Search; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/geekyants/Desktop/Hackathon-21/crypto-base/src/components/Search/index.tsx";




const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  searchResultContainer: {
    backgroundColor: 'orangered',
    height: '100%',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingTop: 15
  }
}));
const Search = props => {
  const classes = useStyles();
  const searchedCoin = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.search.searchedCoin);
  console.log(searchedCoin);
  /** 
    category: "coin"
    date_added: "2013-04-28T00:00:00.000Z"
    description: "Bitcoin (BTC) is a cryptocurrency . Users are able to generate BTC through the process of mining. Bitcoin has a current supply of 18,807,112. The last known price of Bitcoin is 50,256.4009478 USD and is down -0.23 over the last 24 hours. It is currently trading on 8851 active market(s) with $34,243,687,859.90 traded over the last 24 hours. More information can be found at https://bitcoin.org/."
    id: 1
    is_hidden: 0
    logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
    name: "Bitcoin"
    notice: ""
    platform: null
    slug: "bitcoin"
    subreddit: "bitcoin"
    symbol: "BTC"
    tag-groups: (29) ['OTHER', 'CONSENSUS_ALGORITHM', 'CONSENSUS_ALGORITHM', 'PROPERTY', 'PROPERTY', 'PROPERTY', 'PROPERTY', 'PROPERTY', 'PROPERTY', 'PROPERTY', 'PROPERTY', 'PROPERTY', 'PROPERTY', 'PROPERTY', 'PROPERTY', 'PROPERTY', 'PROPERTY', 'PROPERTY', 'PROPERTY', 'PROPERTY', 'PROPERTY', 'PROPERTY', 'PROPERTY', 'PROPERTY', 'PROPERTY', 'PROPERTY', 'PROPERTY', 'PROPERTY', 'PROPERTY']
    tag-names: (29) ['Mineable', 'PoW', 'SHA-256', 'Store of Value', 'State channels', 'Coinbase Ventures Portfolio', 'Three Arrows Capital Portfolio', 'Polychain Capital Portfolio', 'Binance Labs Portfolio', 'Arrington XRP capital', 'Blockchain Capital Portfolio', 'BoostVC Portfolio', 'CMS Holdings Portfolio', 'DCG Portfolio', 'DragonFly Capital Portfolio', 'Electric Capital Portfolio', 'Fabric Ventures Portfolio', 'Framework Ventures', 'Galaxy Digital Portfolio', 'Huobi Capital', 'Alameda Research Portfolio', 'A16Z Portfolio', '1Confirmation Portfolio', 'Winklevoss Capital', 'USV Portfolio', 'Placeholder Ventures Portfolio', 'Pantera Capital Portfolio', 'Multicoin Capital Portfolio', 'Paradigm XZY Screener']
    tags: (29) ['mineable', 'pow', 'sha-256', 'store-of-value', 'state-channels', 'coinbase-ventures-portfolio', 'three-arrows-capital-portfolio', 'polychain-capital-portfolio', 'binance-labs-portfolio', 'arrington-xrp-capital', 'blockchain-capital-portfolio', 'boostvc-portfolio', 'cms-holdings-portfolio', 'dcg-portfolio', 'dragonfly-capital-portfolio', 'electric-capital-portfolio', 'fabric-ventures-portfolio', 'framework-ventures', 'galaxy-digital-portfolio', 'huobi-capital', 'alameda-research-portfolio', 'a16z-portfolio', '1confirmation-portfolio', 'winklevoss-capital', 'usv-portfolio', 'placeholder-ventures-portfolio', 'pantera-capital-portfolio', 'multicoin-capital-portfolio', 'paradigm-xzy-screener']
    twitter_username: ""
    urls:
    announcement: []
    chat: []
    explorer: (5) [
        'https://blockchain.coinmarketcap.com/chain/bitcoin',
        'https://blockchain.info/', 
        'https://live.blockcypher.com/btc/', 
        'https://blockchair.com/bitcoin', 
        'https://explorer.viabtc.com/btc'
    ]
    message_board: ['https://bitcointalk.org']
    reddit: ['https://reddit.com/r/bitcoin']
    source_code: ['https://github.com/bitcoin/']
    technical_doc: ['https://bitcoin.org/bitcoin.pdf']
    twitter: []
    website: ['https://bitcoin.org/']
  */

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    className: classes.searchResultContainer,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
      children: "Search Result!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ })

})
//# sourceMappingURL=app.3c6ef4d91c69b6065c11.hot-update.js.map