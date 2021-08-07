webpackHotUpdate("app",{

/***/ "./src/components/Navigation/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/Navigation/index.tsx ***!
  \*********************************************/
/*! exports provided: Navigation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navigation", function() { return Navigation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Tabs */ "./node_modules/@material-ui/core/esm/Tabs/index.js");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Tab */ "./node_modules/@material-ui/core/esm/Tab/index.js");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Home */ "./node_modules/@material-ui/icons/Home.js");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Search */ "./node_modules/@material-ui/icons/Search.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Person */ "./node_modules/@material-ui/icons/Person.js");
/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/geekyants/Desktop/Hackathon-21/crypto-base/src/components/Navigation/index.tsx";








const StyledTabs = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])({
  root: {
    minHeight: 30,
    width: '100%',
    backgroundColor: '#FFF',
    borderBottom: '2px solid #E2E2E2'
  },
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      width: '100%',
      minHeight: 2,
      backgroundColor: '#635ee7'
    }
  }
})(props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_2__["default"], { ...props,
  TabIndicatorProps: {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 51
    }, undefined)
  }
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 28,
  columnNumber: 3
}, undefined));
const StyledTab = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(theme => ({
  root: {
    width: '33%',
    minHeight: 18,
    paddingTop: 6,
    textTransform: 'none',
    color: '#323232',
    fontSize: 12,
    '&:focus': {
      color: '#5E44FF',
      fontWeight: 700
    }
  },
  wrapper: {
    flexDirection: 'row-reverse'
  }
}))(props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_3__["default"], {
  disableRipple: true,
  ...props
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 47,
  columnNumber: 21
}, undefined));
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["createStyles"])({
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  }
}));
const Navigation = props => {
  const classes = useStyles(props);
  const [value, setValue] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('home');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
    className: classes.container,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(StyledTabs, {
      value: value,
      onChange: handleChange,
      "aria-label": "Navigation tabs",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(StyledTab, {
        icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_4___default.a, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 26
        }, undefined),
        label: "home"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(StyledTab, {
        icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_5___default.a, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 26
        }, undefined),
        label: "search"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(StyledTab, {
        icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_6___default.a, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 26
        }, undefined),
        label: "profile"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ })

})
//# sourceMappingURL=app.7ffc467e03be949bed0b.hot-update.js.map