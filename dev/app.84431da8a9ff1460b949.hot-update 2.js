webpackHotUpdate("app",{

/***/ "./src/components/Profile/SignUp.tsx":
/*!*******************************************!*\
  !*** ./src/components/Profile/SignUp.tsx ***!
  \*******************************************/
/*! exports provided: SignUp, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUp", function() { return SignUp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-final-form */ "./node_modules/react-final-form/dist/react-final-form.es.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _FormInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../FormInput */ "./src/components/FormInput/index.tsx");
/* harmony import */ var _services_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/helpers */ "./src/services/helpers.ts");
/* harmony import */ var _services_validation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/validation */ "./src/services/validation.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/geekyants/Desktop/Hackathon-21/crypto-base/src/components/Profile/SignUp.tsx";








const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  signUpContainer: {
    height: '100%',
    padding: 30,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  header: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  heading: {
    fontSize: 22,
    lineHeight: '32px',
    fontWeight: 700,
    letterSpacing: '1px',
    marginRight: 'auto'
  },
  headerButton: {
    color: '#4A6EE0',
    fontSize: 14,
    lineHeight: '22px',
    backgroundColor: '#fff',
    border: 'none',
    textDecoration: 'underline',
    cursor: 'pointer'
  }
}));
const SignUp = ({
  toggleForm
}) => {
  const classes = useStyles();

  const handleSubmit = values => {
    console.log('Submitted!');
    console.log(values);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
    className: classes.signUpContainer,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      className: classes.header,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
        className: classes.heading,
        children: "Sign up"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
        className: classes.headerButton,
        onClick: () => toggleForm(),
        children: "I have an account"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_final_form__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      onSubmit: handleSubmit,
      render: ({
        handleSubmit,
        valid
      }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("form", {
        className: classes.form,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_final_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
          component: _FormInput__WEBPACK_IMPORTED_MODULE_4__["default"],
          format: _services_helpers__WEBPACK_IMPORTED_MODULE_5__["normalizeText"],
          fullWidth: true,
          label: "Email",
          name: "email",
          type: "email",
          validate: Object(_services_validation__WEBPACK_IMPORTED_MODULE_6__["setUpValidation"])(_services_validation__WEBPACK_IMPORTED_MODULE_6__["validations"].required, _services_validation__WEBPACK_IMPORTED_MODULE_6__["validations"].email)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_final_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
          component: _FormInput__WEBPACK_IMPORTED_MODULE_4__["default"],
          format: _services_helpers__WEBPACK_IMPORTED_MODULE_5__["normalizeText"],
          fullWidth: true,
          label: "Password",
          name: "password",
          type: "password",
          validate: Object(_services_validation__WEBPACK_IMPORTED_MODULE_6__["setUpValidation"])(_services_validation__WEBPACK_IMPORTED_MODULE_6__["validations"].required, _services_validation__WEBPACK_IMPORTED_MODULE_6__["validations"].minLength8)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          className: classes.submitButton,
          disabled: !valid,
          size: "medium",
          type: "submit",
          variant: "contained",
          onClick: handleSubmit,
          children: "Continue"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (SignUp);

/***/ })

})
//# sourceMappingURL=app.84431da8a9ff1460b949.hot-update.js.map