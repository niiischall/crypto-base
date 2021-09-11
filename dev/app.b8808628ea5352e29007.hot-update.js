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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-final-form */ "./node_modules/react-final-form/dist/react-final-form.es.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _FormInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../FormInput */ "./src/components/FormInput/index.tsx");
/* harmony import */ var _services_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/helpers */ "./src/services/helpers.ts");
/* harmony import */ var _services_validation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/validation */ "./src/services/validation.ts");
/* harmony import */ var _store_actions_actionProfile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/actions/actionProfile */ "./src/store/actions/actionProfile.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/Users/geekyants/Desktop/Hackathon-21/crypto-base/src/components/Profile/SignUp.tsx";










const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(theme => ({
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
  },
  form: {
    marginTop: 50
  },
  errorContainer: {
    color: '#ce1331',
    backgroundColor: '#ffdbe3',
    minHeight: 50,
    margin: '5px 0px',
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    transition: 'all 1s'
  },
  error: {
    fontSize: 12,
    textTransform: 'capitalize'
  },
  submitButton: {
    height: 55,
    marginTop: 15,
    width: '100%',
    borderRadius: '6px',
    color: '#fff',
    fontSize: '16px',
    textTransform: 'capitalize',
    backgroundColor: '#11a683'
  }
}));
const SignUp = ({
  toggleForm,
  submitForm
}) => {
  const classes = useStyles();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const errorInSigningUp = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.profile.error);

  const handleSubmit = values => {
    const {
      email,
      password
    } = values;
    submitForm(email, password, true);
  };

  const handleFormToggle = () => {
    toggleForm();
    dispatch(Object(_store_actions_actionProfile__WEBPACK_IMPORTED_MODULE_8__["clearAuthError"])());
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
    className: classes.signUpContainer,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      className: classes.header,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("span", {
        className: classes.heading,
        children: "Sign up"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("button", {
        className: classes.headerButton,
        onClick: handleFormToggle,
        children: "\u2192I have an account"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_final_form__WEBPACK_IMPORTED_MODULE_2__["Form"], {
      onSubmit: handleSubmit,
      render: ({
        handleSubmit,
        valid
      }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("form", {
        className: classes.form,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_final_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
          component: _FormInput__WEBPACK_IMPORTED_MODULE_5__["default"],
          format: _services_helpers__WEBPACK_IMPORTED_MODULE_6__["normalizeText"],
          fullWidth: true,
          label: "Email",
          name: "email",
          type: "email",
          validate: Object(_services_validation__WEBPACK_IMPORTED_MODULE_7__["setUpValidation"])(_services_validation__WEBPACK_IMPORTED_MODULE_7__["validations"].required, _services_validation__WEBPACK_IMPORTED_MODULE_7__["validations"].email)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_final_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
          component: _FormInput__WEBPACK_IMPORTED_MODULE_5__["default"],
          format: _services_helpers__WEBPACK_IMPORTED_MODULE_6__["normalizeText"],
          fullWidth: true,
          label: "Password",
          name: "password",
          type: "password",
          validate: Object(_services_validation__WEBPACK_IMPORTED_MODULE_7__["setUpValidation"])(_services_validation__WEBPACK_IMPORTED_MODULE_7__["validations"].required, _services_validation__WEBPACK_IMPORTED_MODULE_7__["validations"].minLength8)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 13
        }, undefined), errorInSigningUp && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          className: classes.errorContainer,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("span", {
            className: classes.error,
            children: ["It seems like there's an issue of \"", errorInSigningUp, "\"."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          className: classes.submitButton,
          disabled: !valid,
          size: "medium",
          type: "submit",
          variant: "contained",
          onClick: handleSubmit,
          children: "Continue"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 96,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (SignUp);

/***/ })

})
//# sourceMappingURL=app.b8808628ea5352e29007.hot-update.js.map