webpackHotUpdate("app",{

/***/ "./src/components/Profile/Confirmation.tsx":
/*!*************************************************!*\
  !*** ./src/components/Profile/Confirmation.tsx ***!
  \*************************************************/
/*! exports provided: Logout, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logout", function() { return Logout; });
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
  logoutContainer: {
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
  logoutButton: {
    height: 55,
    marginTop: 15,
    width: 250,
    borderRadius: '6px',
    color: '#fff',
    fontSize: '16px',
    textTransform: 'capitalize',
    backgroundColor: '#000',
    ':hover': {
      color: '#000'
    }
  }
}));
const StyledButton = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(theme => ({
  root: {
    height: 55,
    marginTop: 15,
    width: 250,
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
  lineNumber: 55,
  columnNumber: 21
}, undefined));
const Logout = () => {
  const classes = useStyles();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  const handleLogout = () => {
    dispatch(Object(_store_actions_actionProfile__WEBPACK_IMPORTED_MODULE_4__["authLogout"])());
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
    className: classes.logoutContainer,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h3", {
      className: classes.heading,
      children: "You're already signed in."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(StyledButton, {
      onClick: handleLogout,
      children: "Logout"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (Logout);

/***/ }),

/***/ "./src/components/Profile/Logout.tsx":
false,

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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_Profile_SignUp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Profile/SignUp */ "./src/components/Profile/SignUp.tsx");
/* harmony import */ var _components_Profile_SignIn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Profile/SignIn */ "./src/components/Profile/SignIn.tsx");
/* harmony import */ var _components_Profile_Confirmation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Profile/Confirmation */ "./src/components/Profile/Confirmation.tsx");
/* harmony import */ var _store_actions_actionProfile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/actions/actionProfile */ "./src/store/actions/actionProfile.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/geekyants/Desktop/Hackathon-21/crypto-base/src/pages/Profile/index.tsx";








const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  profileContainer: {
    flex: 1
  }
}));
const Profile = props => {
  const classes = useStyles();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const userId = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.profile.userId);
  const [form, setForm] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('sign-in');

  const toggleForm = () => {
    if (form === 'sign-in') {
      setForm('sign-up');
    } else if (form === 'sign-up') {
      setForm('sign-in');
    }
  };

  const submitForm = (email, password, isSignUp) => {
    dispatch(Object(_store_actions_actionProfile__WEBPACK_IMPORTED_MODULE_6__["auth"])(email, password, isSignUp));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
    className: classes.profileContainer,
    children: !userId ? form === 'sign-in' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_Profile_SignIn__WEBPACK_IMPORTED_MODULE_4__["default"], {
      toggleForm: toggleForm,
      submitForm: submitForm
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_Profile_SignUp__WEBPACK_IMPORTED_MODULE_3__["default"], {
      toggleForm: toggleForm,
      submitForm: submitForm
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_Profile_Confirmation__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ })

})
//# sourceMappingURL=app.4e5f243e9c5bc18b8b4c.hot-update.js.map