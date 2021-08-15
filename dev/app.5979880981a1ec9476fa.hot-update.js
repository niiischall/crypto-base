webpackHotUpdate("app",{

/***/ "./src/pages/Home/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/Home/index.tsx ***!
  \**********************************/
/*! exports provided: Home, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_ArrowRightAlt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/ArrowRightAlt */ "./node_modules/@material-ui/icons/ArrowRightAlt.js");
/* harmony import */ var _material_ui_icons_ArrowRightAlt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowRightAlt__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Tabs */ "./node_modules/@material-ui/core/esm/Tabs/index.js");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Tab */ "./node_modules/@material-ui/core/esm/Tab/index.js");
/* harmony import */ var _material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Star */ "./node_modules/@material-ui/icons/Star.js");
/* harmony import */ var _material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "./node_modules/@material-ui/icons/Favorite.js");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Icons */ "./src/components/Icons/index.tsx");
/* harmony import */ var _Popular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Popular */ "./src/pages/Home/Popular.tsx");
/* harmony import */ var _Following__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Following */ "./src/pages/Home/Following.tsx");
/* harmony import */ var _store_actions_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../store/actions/actions */ "./src/store/actions/actions.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__);
var _jsxFileName = "/Users/geekyants/Desktop/Hackathon-21/crypto-base/src/pages/Home/index.tsx";














const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  homeContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  homeHeader: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%'
  },
  homeNavigation: {
    display: 'flex',
    flexDirection: 'column'
  },
  textBox: {
    flex: 1,
    textAlign: 'center'
  },
  heading: {
    color: '#669900',
    fontSize: 24,
    letterSpacing: 0.5
  },
  text: {
    display: 'block',
    color: '#979797',
    fontSize: 12,
    letterSpacing: -0.5,
    fontWeight: 300
  },
  icon: {
    marginBottom: '0px !important',
    marginRight: 5
  }
}));
const StyledButton = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(theme => ({
  root: {
    textTransform: 'capitalize',
    textDecoration: 'underline',
    fontSize: 12,
    color: '#f59842',
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
}))(props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
  disableRipple: true,
  ...props
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 70,
  columnNumber: 21
}, undefined));
const StyledTabs = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])({
  root: {
    width: '100%',
    minHeight: 30
  },
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      width: '100%',
      height: 5,
      backgroundColor: ' #669900'
    }
  }
})(props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_5__["default"], { ...props,
  TabIndicatorProps: {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("span", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 51
    }, undefined)
  }
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 89,
  columnNumber: 3
}, undefined));
const StyledTab = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(theme => ({
  root: {
    width: '50%',
    minHeight: 30,
    textTransform: 'none',
    color: '#323232',
    fontSize: 14,
    fontWeight: 300,
    '&:focus': {
      fontWeight: 400
    }
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  }
}))(props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_6__["default"], {
  disableRipple: true,
  ...props
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 108,
  columnNumber: 21
}, undefined));
const Home = props => {
  const classes = useStyles();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const latestCoins = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.coins);
  const homePageCoins = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.homePageCoins);
  const [currentTab, setCurrentTab] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (latestCoins.length > 0) {
      dispatch(Object(_store_actions_actions__WEBPACK_IMPORTED_MODULE_12__["getCoinsInfo"])(latestCoins));
    }
  }, [latestCoins]);

  const navigateToLearnMore = () => {
    chrome.tabs.create({
      url: 'http://www.google.com',
      active: true
    });
  };

  const handleChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  console.log(homePageCoins);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
    className: classes.homeContainer,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
      className: classes.homeHeader,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_components_Icons__WEBPACK_IMPORTED_MODULE_9__["HomeBackground"], {
        width: 100,
        height: 100
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
        className: classes.textBox,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("h1", {
          className: classes.heading,
          children: "CryptoBase"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("span", {
          className: classes.text,
          children: "Personalize your crypto experience."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(StyledButton, {
          onClick: navigateToLearnMore,
          endIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_material_ui_icons_ArrowRightAlt__WEBPACK_IMPORTED_MODULE_4___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 22
          }, undefined),
          children: "Learn More"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
      className: classes.homeNavigation,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(StyledTabs, {
        value: currentTab,
        onChange: handleChange,
        "aria-label": "icon label tabs example",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(StyledTab, {
          icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_7___default.a, {
            className: classes.icon
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 19
          }, undefined),
          label: "Popular"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(StyledTab, {
          icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_8___default.a, {
            className: classes.icon
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 19
          }, undefined),
          label: "Following"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 7
    }, undefined), currentTab === 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_Popular__WEBPACK_IMPORTED_MODULE_10__["default"], {
      data: homePageCoins
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 28
    }, undefined), currentTab === 1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_Following__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 28
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 135,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=app.5979880981a1ec9476fa.hot-update.js.map