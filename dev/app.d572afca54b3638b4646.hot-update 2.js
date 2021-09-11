webpackHotUpdate("app",{

/***/ "./src/components/Profile/SignIn.tsx":
/*!*******************************************!*\
  !*** ./src/components/Profile/SignIn.tsx ***!
  \*******************************************/
/*! exports provided: SignIn, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignIn", function() { return SignIn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-final-form */ "./node_modules/react-final-form/dist/react-final-form.es.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _services_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/helpers */ "./src/services/helpers.ts");
/* harmony import */ var _services_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/validation */ "./src/services/validation.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/geekyants/Desktop/Hackathon-21/crypto-base/src/components/Profile/SignIn.tsx";







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  signInContainer: {
    height: '100%',
    flex: 1,
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
  },
  form: {
    marginTop: 50
  },
  submitButton: {}
}));
const SignIn = ({
  toggleForm
}) => {
  const classes = useStyles();

  const handleSubmit = values => {
    console.log('Submitted!');
    console.log(values);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
    className: classes.signInContainer,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
      className: classes.header,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("span", {
        className: classes.heading,
        children: "Sign in"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("button", {
        className: classes.headerButton,
        onClick: () => toggleForm(),
        children: "I don't have an account"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_final_form__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      onSubmit: handleSubmit,
      render: ({
        handleSubmit,
        valid
      }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("form", {
        className: classes.form,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_final_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
          component: TextField,
          format: _services_helpers__WEBPACK_IMPORTED_MODULE_4__["normalizeText"],
          fullWidth: true,
          label: "Email Address",
          name: "email",
          type: "email",
          validate: Object(_services_validation__WEBPACK_IMPORTED_MODULE_5__["setUpValidation"])(_services_validation__WEBPACK_IMPORTED_MODULE_5__["validations"].required, _services_validation__WEBPACK_IMPORTED_MODULE_5__["validations"].email)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_final_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
          component: TextField,
          format: _services_helpers__WEBPACK_IMPORTED_MODULE_4__["normalizeText"],
          fullWidth: true,
          label: "Password",
          name: "password",
          type: "password",
          validate: Object(_services_validation__WEBPACK_IMPORTED_MODULE_5__["setUpValidation"])(_services_validation__WEBPACK_IMPORTED_MODULE_5__["validations"].required, _services_validation__WEBPACK_IMPORTED_MODULE_5__["validations"].minLength8)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          className: classes.submitButton,
          disabled: !valid,
          size: "medium",
          type: "submit",
          variant: "contained",
          onClick: handleSubmit,
          children: "SUBMIT"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (SignIn);

/***/ })

})
//# sourceMappingURL=app.d572afca54b3638b4646.hot-update.js.map