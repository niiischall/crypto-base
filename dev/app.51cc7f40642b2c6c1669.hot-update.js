webpackHotUpdate("app",{

/***/ "./src/components/FormInput/index.tsx":
/*!********************************************!*\
  !*** ./src/components/FormInput/index.tsx ***!
  \********************************************/
/*! exports provided: StyledTextField, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledTextField", function() { return StyledTextField; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/geekyants/Desktop/Hackathon-21/crypto-base/src/components/FormInput/index.tsx";




const StyledTextField = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(theme => ({
  root: {
    backgroundColor: 'orangered',
    margin: '25px 0px'
  },
  InputLabel: {
    fontSize: 14
  }
}))(props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], { ...props
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 19,
  columnNumber: 21
}, undefined));

const TextFieldInput = props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(StyledTextField, {
  error: props.meta.touched && props.meta.error,
  helperText: props.meta.touched && props.meta.error,
  InputProps: props.InputProps,
  onChange: (event, index, value) => props.input.onChange(value),
  value: Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(props, 'input.value', ''),
  ...props.input,
  ...props
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 22,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (TextFieldInput);

/***/ })

})
//# sourceMappingURL=app.51cc7f40642b2c6c1669.hot-update.js.map