webpackHotUpdate("app",{

/***/ "./src/components/Dialogs/Notification.tsx":
/*!*************************************************!*\
  !*** ./src/components/Dialogs/Notification.tsx ***!
  \*************************************************/
/*! exports provided: NotificationDialog, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationDialog", function() { return NotificationDialog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/geekyants/Desktop/crypto-base/src/components/Dialogs/Notification.tsx";





const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
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
const NotificationDialog = ({
  onClose,
  open
}) => {
  const classes = useStyles();
  const coins = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.home.notificationCoins);

  const handleClose = event => {
    onClose();
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Dialog"], {
    className: classes.dialog,
    onClose: handleClose,
    "aria-labelledby": "dialog-title",
    open: open,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["DialogTitle"], {
      className: classes.title,
      id: "dialog-title",
      children: coins.length > 0 ? `New alerts are created.` : `Removed all alerts.`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      className: classes.authButton,
      size: "medium",
      type: "submit",
      variant: "contained",
      onClick: event => handleClose(event),
      children: "Continue"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (NotificationDialog);

/***/ })

})
//# sourceMappingURL=app.e7e4a694a2617141ef77.hot-update.js.map