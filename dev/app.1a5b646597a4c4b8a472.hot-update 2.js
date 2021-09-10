webpackHotUpdate("app",{

/***/ "./src/pages/Profile/index.tsx":
/*!*************************************!*\
  !*** ./src/pages/Profile/index.tsx ***!
  \*************************************/
/*! exports provided: Profile, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return Profile; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _components_Profile_SignUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Profile/SignUp */ "./src/components/Profile/SignUp.tsx");
/* harmony import */ var _components_Profile_SignIn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Profile/SignIn */ "./src/components/Profile/SignIn.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/geekyants/Desktop/Hackathon-21/crypto-base/src/pages/Profile/index.tsx";





const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  profileContainer: {
    flex: 1
  }
}));
const Profile = props => {
  const classes = useStyles();
  const [form, setForm] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('sign-in');

  const toggleForm = () => {
    if (form === 'sign-in') {
      setForm('sign-up');
    } else if (form === 'sign-up') {
      setForm('sign-in');
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    className: classes.profileContainer,
    children: form === 'sign-in' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components_Profile_SignIn__WEBPACK_IMPORTED_MODULE_3__["default"], {
      toggleForm: toggleForm
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 29
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components_Profile_SignUp__WEBPACK_IMPORTED_MODULE_2__["default"], {
      toggleForm: toggleForm
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 65
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ })

})
//# sourceMappingURL=app.1a5b646597a4c4b8a472.hot-update.js.map