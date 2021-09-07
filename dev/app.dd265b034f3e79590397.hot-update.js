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
    fontSize: 10,
    color: '#f59842'
  },
  symbol: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 5
  },
  description: {
    display: 'block',
    width: '100%',
    fontSize: 12,
    color: '#000',
    lineHeight: '14.5px',
    margin: '5px 0px'
  }
}));
const StyledButton = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(theme => ({
  root: {
    textTransform: 'capitalize',
    textDecoration: 'underline',
    fontSize: 12,
    color: '#669900',
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

  const navigateToKnowMore = url => {
    chrome.tabs.create({
      url,
      active: false
    });
  };

  const coin = Object.values(searchedCoin)[0];
  const {
    name,
    logo,
    symbol,
    urls,
    date_added,
    description
  } = coin;
  const date = new Date(date_added);
  const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
  const coindesc = description.substr(0, 200);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
    className: classes.searchResultContainer,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      className: classes.searchHeader,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("span", {
        className: classes.searchHeading,
        children: "Search result"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("article", {
      className: classes.searchBox,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        className: classes.imageBox,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
          src: logo,
          alt: "coin-preview",
          className: classes.image
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        className: classes.coin,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h3", {
          className: classes.name,
          children: [name, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("span", {
            className: classes.symbol,
            children: ["(", symbol, ")"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("span", {
          className: classes.year,
          children: ["In circulation since", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("span", {
            style: {
              fontWeight: 'bold'
            },
            children: [day, "/", month, "/", year]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 13
          }, undefined), "."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
          className: classes.description,
          children: [coindesc, "..."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(StyledButton, {
          onClick: () => navigateToKnowMore(urls.website[0]),
          endIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["ArrowRightAlt"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 22
          }, undefined),
          children: "Know More"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 121,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./src/components/Trending/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/Trending/index.tsx ***!
  \*******************************************/
/*! exports provided: Trending, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trending", function() { return Trending; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _store_actions_actionHome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/actions/actionHome */ "./src/store/actions/actionHome.ts");
/* harmony import */ var _services_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/helpers */ "./src/services/helpers.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/geekyants/Desktop/Hackathon-21/crypto-base/src/components/Trending/index.tsx";









const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(theme => ({
  button: {
    marginTop: 'auto'
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
  trendingCoin: {
    backgroundColor: '#f8f8f8',
    width: '47.5%',
    height: 200,
    marginBottom: 15,
    padding: 10,
    boxShadow: '0px 2px 9px 0px rgb(0 0 0 / 2%)',
    borderRadius: '3px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    transition: 'all .2s linear',
    '&:hover': {
      backgroundColor: '#fff',
      boxShadow: '0 0 0 1px rgb(0 0 0 / 5%), 0 5px 15px rgb(0 0 0 / 15%)'
    }
  },
  coin: {
    width: 50,
    height: 50,
    border: '2px solid #979797',
    borderRadius: '50%'
  },
  textBox: {
    margin: '5px 0px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column'
  },
  symbol: {
    fontSize: 8,
    fontWeight: 700,
    color: '#669900'
  },
  priceChange: {
    fontSize: 10,
    marginLeft: 3
  },
  change: {
    marginRight: 2,
    fontWeight: 500
  },
  price: {
    color: '#979797',
    display: 'block',
    marginTop: 5,
    fontSize: 10,
    fontWeight: 500
  },
  name: {
    fontSize: 14,
    fontWeight: 600,
    marginBottom: 5
  }
}));
const StyledFollowButton = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["withStyles"])(theme => ({
  root: {
    color: '#fff',
    backgroundColor: '#000',
    width: 100,
    borderRadius: 15,
    transition: 'all .2s',
    '&:hover': {
      color: '#fff',
      backgroundColor: '#000'
    }
  },
  label: {
    fontSize: 12,
    textTransform: 'capitalize',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  endIcon: {
    marginLeft: 2
  }
}))(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"]);
const StyledUnfollowButton = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["withStyles"])(theme => ({
  root: {
    color: '#fff',
    backgroundColor: '#669900',
    width: 100,
    borderRadius: 15,
    transition: 'all .2s',
    '&:hover': {
      color: '#fff',
      backgroundColor: '#669900'
    }
  },
  label: {
    fontSize: 12,
    textTransform: 'capitalize',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  endIcon: {
    marginLeft: 2
  }
}))(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"]);
const Trending = props => {
  const classes = useStyles();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const trendingCoins = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.search.trendingCoins);
  const trendingCoinsDetails = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.search.trendingCoinsDetails);
  const followingCoins = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.home.followingCoins);

  const renderPriceChange = change => {
    const isPositive = change > 0;
    const absoluteChange = Math.abs(change);
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
      className: classes.priceChange,
      style: {
        color: isPositive ? '#006600' : '#cc3300'
      },
      children: isPositive ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
        className: classes.change,
        children: ["\u2191", absoluteChange, "%"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 11
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
        className: classes.change,
        children: ["\u2193", absoluteChange, "%"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 7
    }, undefined);
  };

  const coinHandler = coin => {
    const isCoinFollowed = Object(_services_helpers__WEBPACK_IMPORTED_MODULE_6__["isCoinPresent"])(coin, followingCoins);
    if (isCoinFollowed) dispatch(Object(_store_actions_actionHome__WEBPACK_IMPORTED_MODULE_5__["unfollowCoin"])(coin));else dispatch(Object(_store_actions_actionHome__WEBPACK_IMPORTED_MODULE_5__["followCoin"])(coin));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    children: trendingCoins.length > 0 && trendingCoinsDetails && Object.keys(trendingCoins).length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: classes.searchHeader,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
          className: classes.searchHeading,
          children: "Trending Now"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 13
      }, undefined), trendingCoins.map(coin => {
        const logo = trendingCoinsDetails[coin.id].logo;
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: classes.trendingCoin,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("img", {
            className: classes.coin,
            src: logo,
            alt: `${coin.slug}-logo`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 19
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            className: classes.textBox,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
              className: classes.name,
              children: coin.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 185,
              columnNumber: 21
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
              className: classes.symbol,
              children: coin.symbol
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 186,
              columnNumber: 21
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
              className: classes.price,
              children: ["$", Object(_services_helpers__WEBPACK_IMPORTED_MODULE_6__["normalizePrice"])(coin.quote.USD.price), " |", renderPriceChange(coin.quote.USD.percent_change_24h.toFixed(2))]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 187,
              columnNumber: 21
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 19
          }, undefined), Object(_services_helpers__WEBPACK_IMPORTED_MODULE_6__["isCoinPresent"])(coin, followingCoins) ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(StyledUnfollowButton, {
            disableRipple: true,
            className: classes.button,
            onClick: () => coinHandler(coin),
            endIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__["Check"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 199,
              columnNumber: 32
            }, undefined),
            children: "Following"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 21
          }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(StyledFollowButton, {
            disableRipple: true,
            className: classes.button,
            onClick: () => coinHandler(coin),
            endIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__["Favorite"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 208,
              columnNumber: 32
            }, undefined),
            children: "Follow"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 204,
            columnNumber: 21
          }, undefined)]
        }, coin.id, true, {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 17
        }, undefined);
      })]
    }, void 0, true)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 167,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (Trending);

/***/ }),

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
//# sourceMappingURL=app.dd265b034f3e79590397.hot-update.js.map