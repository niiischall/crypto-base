webpackHotUpdate("app",{

/***/ "./src/components/Dialogs/NotSignedIn.tsx":
/*!************************************************!*\
  !*** ./src/components/Dialogs/NotSignedIn.tsx ***!
  \************************************************/
/*! exports provided: NotSignedInDialog, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotSignedInDialog", function() { return NotSignedInDialog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/geekyants/Desktop/Hackathon-21/crypto-base/src/components/Dialogs/NotSignedIn.tsx";




const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  dialog: {
    padding: 10
  },
  authButton: {
    height: 30,
    margin: '0px auto 10px auto',
    width: 150,
    borderRadius: '30px',
    color: '#fff',
    fontSize: '12px',
    textTransform: 'capitalize',
    backgroundColor: '#11a683'
  },
  title: {
    '& .MuiTypography-h6': {
      fontSize: 16
    }
  }
}));
const NotSignedInDialog = ({
  onClose,
  open
}) => {
  const classes = useStyles();

  const handleClose = event => {
    onClose();
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Dialog"], {
    className: classes.dialog,
    onClose: handleClose,
    "aria-labelledby": "dialog-title",
    open: open,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["DialogTitle"], {
      className: classes.title,
      id: "dialog-title",
      children: "You're not signed in yet"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      className: classes.authButton,
      size: "medium",
      type: "submit",
      variant: "contained",
      onClick: event => handleClose(event),
      children: "Continue"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (NotSignedInDialog);

/***/ })

})
//# sourceMappingURL=app.92f6140c28303b99444f.hot-update.js.map