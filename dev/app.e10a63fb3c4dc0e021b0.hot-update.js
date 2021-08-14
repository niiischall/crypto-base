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
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_ArrowRightAlt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/ArrowRightAlt */ "./node_modules/@material-ui/icons/ArrowRightAlt.js");
/* harmony import */ var _material_ui_icons_ArrowRightAlt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowRightAlt__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Tabs */ "./node_modules/@material-ui/core/esm/Tabs/index.js");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Tab */ "./node_modules/@material-ui/core/esm/Tab/index.js");
/* harmony import */ var _components_Icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Icons */ "./src/components/Icons/index.tsx");
/* harmony import */ var _Listings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Listings */ "./src/pages/Home/Listings.tsx");
/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../actions/actions */ "./src/actions/actions.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/Users/geekyants/Desktop/Hackathon-21/crypto-base/src/pages/Home/index.tsx";










const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
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
    backgroundColor: 'orangered'
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
  }
}));
const StyledButton = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(theme => ({
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
}))(props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
  disableRipple: true,
  ...props
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 61,
  columnNumber: 21
}, undefined));
const Home = props => {
  const [currentTab, setCurrentTab] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('popular');
  const [listings, setListings] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const classes = useStyles();

  const navigateToLearnMore = () => {
    chrome.tabs.create({
      url: 'http://www.google.com',
      active: true
    });
  };
  /*
  useEffect(() => {
    getListings();
  }, []);
  */


  async function getListings() {
    const fetchedListings = await Object(_actions_actions__WEBPACK_IMPORTED_MODULE_8__["getMarketTicker"])();
    setListings(fetchedListings.data);
  }

  const StyledTabs = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])({
    root: {
      width: '100%',
      borderTop: '2px solid #eeeeee'
    },
    indicator: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent',
      '& > span': {
        width: '50%',
        height: 2,
        backgroundColor: ' #669900'
      }
    }
  })(props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_4__["default"], { ...props,
    TabIndicatorProps: {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("span", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 53
      }, undefined)
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 101,
    columnNumber: 5
  }, undefined));
  const StyledTab = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(theme => ({
    root: {
      width: '50%',
      textTransform: 'none',
      color: '#323232',
      fontSize: 12,
      fontWeight: 500,
      '&:focus': {
        fontWeight: 700
      }
    }
  }))(props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_5__["default"], {
    disableRipple: true,
    ...props
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 115,
    columnNumber: 23
  }, undefined));

  const handleChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
    className: classes.homeContainer,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      className: classes.homeHeader,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_Icons__WEBPACK_IMPORTED_MODULE_6__["HomeBackground"], {
        width: 100,
        height: 100
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
        className: classes.textBox,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h1", {
          className: classes.heading,
          children: "CryptoBase"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("span", {
          className: classes.text,
          children: "Personalize your crypto experience."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(StyledButton, {
          onClick: navigateToLearnMore,
          endIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_material_ui_icons_ArrowRightAlt__WEBPACK_IMPORTED_MODULE_3___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 22
          }, undefined),
          children: "Learn More"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      className: classes.homeNavigation,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(StyledTabs, {
        value: currentTab,
        onChange: handleChange,
        "aria-label": "Navigation tabs",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(StyledTab, {
          value: "popular",
          label: "Popular"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(StyledTab, {
          value: "following",
          label: "Following"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_Listings__WEBPACK_IMPORTED_MODULE_7__["default"], {
      data: listings
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 122,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=app.e10a63fb3c4dc0e021b0.hot-update.js.map