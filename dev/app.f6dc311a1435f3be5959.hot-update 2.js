webpackHotUpdate("app",{

/***/ "./src/components/Dialogs/Unfollow.tsx":
/*!*********************************************!*\
  !*** ./src/components/Dialogs/Unfollow.tsx ***!
  \*********************************************/
/*! exports provided: UnfollowDialog, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnfollowDialog", function() { return UnfollowDialog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/geekyants/Desktop/Hackathon-21/crypto-base/src/components/Dialogs/Unfollow.tsx";




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
      fontSize: 14,
      textAlign: 'center'
    }
  }
}));
const UnfollowDialog = ({
  onClose,
  open,
  switchPage
}) => {
  const classes = useStyles();

  const handleClose = event => {
    onClose();
    switchPage();
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Dialog"], {
    className: classes.dialog,
    onClose: handleClose,
    "aria-labelledby": "dialog-title",
    open: open,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["DialogTitle"], {
      className: classes.title,
      id: "dialog-title",
      children: "Please remove the alert to unfollow."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
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
      lineNumber: 55,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (UnfollowDialog);

/***/ })

})
//# sourceMappingURL=app.f6dc311a1435f3be5959.hot-update.js.map