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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/geekyants/Desktop/Hackathon-21/crypto-base/src/components/Search/index.tsx";






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  searchResultContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: '100%'
  },
  searchHeader: {
    height: '10%',
    display: 'flex',
    alignItems: 'center',
    width: '100%'
  },
  searchHeading: {
    color: '#979797',
    display: 'flex',
    fontSize: 15,
    fontWeight: 700
  },
  imageBox: {
    flex: 1,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  searchBox: {
    height: 200,
    borderRadius: '5px',
    backgroundColor: '#f8f8f8',
    boxShadow: '0 0 0 1px rgb(0 0 0 / 5%), 0 5px 15px rgb(0 0 0 / 15%)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    margin: '0px auto',
    padding: 15
  },
  image: {
    width: 50,
    height: 50
  },
  coin: {
    width: '75%',
    height: '100%'
  },
  name: {
    fontSize: 18,
    color: '#669900'
  },
  year: {
    display: 'block',
    margin: '5px 0px',
    fontSize: 8,
    fontWeight: 'bold',
    color: '#f59842'
  },
  symbol: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#000'
  },
  description: {
    display: 'block',
    width: 200,
    fontSize: 12,
    color: '#ccc',
    lineHeight: '14.5px',
    margin: '5px 0px'
  }
}));
const StyledButton = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(theme => ({
  root: {
    textTransform: 'capitalize',
    textDecoration: 'underline',
    fontSize: 12,
    color: '#f59842',
    padding: 0,
    '&:focus': {
      fontWeight: 700
    },
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  endIcon: {
    margin: 0
  }
}))(props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], { ...props
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 100,
  columnNumber: 21
}, undefined));
const Search = props => {
  const classes = useStyles();
  const searchedCoin = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.search.searchedCoin);
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

  const navigateToKnowMore = url => {
    chrome.tabs.create({
      url,
      active: false
    });
  };

  const str = 'Bitcoin (BTC) is a cryptocurrency.Users are able to generate BTC through the process of mining. Bitcoin has a current supply of 18,807,112. The last known price of Bitcoin is 50,256.4009478 USD and is down -0.23 over the last 24 hours. It is currently trading on 8851 active market(s) with $34,243,687,859.90 traded over the last 24 hours. More information can be found at https://bitcoin.org/';
  const description = str.substring(0, 210);
  const date = new Date('2013-04-28T00:00:00.000Z');
  const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
    className: classes.searchResultContainer,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      className: classes.searchHeader,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("span", {
        className: classes.searchHeading,
        children: "Search result"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("article", {
      className: classes.searchBox,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        className: classes.imageBox,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
          src: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
          alt: "coin-preview",
          className: classes.image
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        className: classes.coin,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h3", {
          className: classes.name,
          children: ["Bitcoin ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("span", {
            className: classes.symbol,
            children: "(BTC)"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("span", {
          className: classes.year,
          children: ["In circulation since ", day, "/", month, "/", year, "."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
          className: classes.description,
          children: [description, "..."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(StyledButton, {
          onClick: () => navigateToKnowMore('https://bitcoin.org/'),
          endIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["ArrowRightAlt"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 22
          }, undefined),
          children: "Know More"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 158,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ })

})
//# sourceMappingURL=app.fe1f383e8059775fce30.hot-update.js.map