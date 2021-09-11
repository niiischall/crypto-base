webpackHotUpdate("app",{

/***/ "./src/components/Profile/Confirmation.tsx":
/*!*************************************************!*\
  !*** ./src/components/Profile/Confirmation.tsx ***!
  \*************************************************/
/*! exports provided: Confirmation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Confirmation", function() { return Confirmation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _store_actions_actionProfile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions/actionProfile */ "./src/store/actions/actionProfile.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/geekyants/Desktop/Hackathon-21/crypto-base/src/components/Profile/Confirmation.tsx";






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  heading: {
    fontSize: '18px',
    color: '#669900'
  },
  statement: {
    fontSize: '14px'
  }
}));
const StyledButton = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(theme => ({
  root: {
    height: 45,
    marginTop: 15,
    width: '50%',
    borderRadius: '6px',
    color: '#fff',
    fontSize: '16px',
    textTransform: 'capitalize',
    backgroundColor: '#000',
    boxShadow: '0 0 0 1px rgb(0 0 0 / 5%), 0 5px 15px rgb(0 0 0 / 15%)',
    '&:hover': {
      color: '#000'
    }
  },
  endIcon: {
    margin: 0
  }
}))(props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
  disableRipple: true,
  ...props
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 45,
  columnNumber: 21
}, undefined));
const Confirmation = () => {
  const classes = useStyles();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  const handleLogout = () => {
    dispatch(Object(_store_actions_actionProfile__WEBPACK_IMPORTED_MODULE_4__["authLogout"])());
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
    className: classes.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h3", {
      className: classes.heading,
      children: "You're in!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
      className: classes.statement,
      children: "We're so glad you're here."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(StyledButton, {
        onClick: handleNavigation,
        children: "Home"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(StyledButton, {
        onClick: handleLogout,
        children: "Logout"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (Confirmation);

/***/ })

})
//# sourceMappingURL=app.c160ad127ba823a7ce97.hot-update.js.map