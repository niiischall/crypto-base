webpackHotUpdate("app",{

/***/ "./node_modules/@material-ui/icons/Home.js":
/*!*************************************************!*\
  !*** ./node_modules/@material-ui/icons/Home.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
}), 'Home');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/Person.js":
/*!***************************************************!*\
  !*** ./node_modules/@material-ui/icons/Person.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
}), 'Person');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/Search.js":
/*!***************************************************!*\
  !*** ./node_modules/@material-ui/icons/Search.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
}), 'Search');

exports.default = _default;

/***/ }),

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
    width: '50%',
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
//# sourceMappingURL=app.63fc358a82631f9a0fa3.hot-update.js.map