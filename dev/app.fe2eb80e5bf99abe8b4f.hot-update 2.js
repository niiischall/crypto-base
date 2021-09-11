webpackHotUpdate("app",{

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
  icon: {
    marginLeft: 5,
    fontSize: 15
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
        lineNumber: 156,
        columnNumber: 11
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
        className: classes.change,
        children: ["\u2193", absoluteChange, "%"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 151,
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
          children: ["Spotlight ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__["Whatshot"], {
            className: classes.icon
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 27
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 176,
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
            lineNumber: 185,
            columnNumber: 19
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            className: classes.textBox,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
              className: classes.name,
              children: coin.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 191,
              columnNumber: 21
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
              className: classes.symbol,
              children: coin.symbol
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 192,
              columnNumber: 21
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
              className: classes.price,
              children: ["$", Object(_services_helpers__WEBPACK_IMPORTED_MODULE_6__["normalizePrice"])(coin.quote.USD.price), " |", renderPriceChange(coin.quote.USD.percent_change_24h.toFixed(2))]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 193,
              columnNumber: 21
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 19
          }, undefined), Object(_services_helpers__WEBPACK_IMPORTED_MODULE_6__["isCoinPresent"])(coin, followingCoins) ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(StyledUnfollowButton, {
            disableRipple: true,
            className: classes.button,
            onClick: () => coinHandler(coin),
            endIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__["Check"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 205,
              columnNumber: 32
            }, undefined),
            children: "Following"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 21
          }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(StyledFollowButton, {
            disableRipple: true,
            className: classes.button,
            onClick: () => coinHandler(coin),
            endIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__["Favorite"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 214,
              columnNumber: 32
            }, undefined),
            children: "Follow"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 21
          }, undefined)]
        }, coin.id, true, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 17
        }, undefined);
      })]
    }, void 0, true)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 171,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (Trending);

/***/ })

})
//# sourceMappingURL=app.fe2eb80e5bf99abe8b4f.hot-update.js.map