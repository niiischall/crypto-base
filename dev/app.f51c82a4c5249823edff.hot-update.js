webpackHotUpdate("app",{

/***/ "./src/store/actions/actionProfile.ts":
/*!********************************************!*\
  !*** ./src/store/actions/actionProfile.ts ***!
  \********************************************/
/*! exports provided: auth, authLogout, checkAuthState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authLogout", function() { return authLogout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAuthState", function() { return checkAuthState; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ "./src/store/actions/actionTypes.ts");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api */ "./src/services/api.ts");



const authSuccess = (userId, idToken, email) => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["AUTH_SUCCESS"],
    userId,
    idToken,
    email
  };
};

const authFailed = error => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["AUTH_FAILED"],
    error
  };
};

const auth = (email, password, isSignUp) => {
  const info = {
    email: email,
    password: password,
    returnSecureToken: true
  };
  let authURL = _services_api__WEBPACK_IMPORTED_MODULE_1__["apiEndPoints"].signUp;

  if (!isSignUp) {
    authURL = _services_api__WEBPACK_IMPORTED_MODULE_1__["apiEndPoints"].signIn;
  }

  return async dispatch => {
    try {
      const response = await Object(_services_api__WEBPACK_IMPORTED_MODULE_1__["authApi"])(authURL, 'post', info);

      if (response.ok) {
        const json = await response.json();
        dispatch(authSuccess(json.localId, json.idToken, info.email));
        localStorage.setItem('idToken', json.idToken);
        localStorage.setItem('userId', json.localId);
        localStorage.setItem('userEmail', info.email);
        const expirationDate = new Date(new Date().getTime() + json.expiresIn * 1000 * 24);
        localStorage.setItem('expirationDate', `${expirationDate}`);
        dispatch(authAutoLogout(json.expiresIn));
      }
    } catch (error) {
      dispatch(authFailed(error.response.data.error));
    }
  };
};
const authLogout = () => {
  localStorage.removeItem('idToken');
  localStorage.removeItem('userId');
  localStorage.removeItem('expirationDate');
  localStorage.removeItem('userEmail');
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["AUTH_LOGOUT"]
  };
};

const authAutoLogout = time => {
  return dispatch => {
    setTimeout(() => {
      dispatch(authLogout());
    }, time * 1000);
  };
};

const checkAuthState = () => {
  return dispatch => {
    let tokenId = localStorage.getItem('idToken');

    if (!tokenId) {
      dispatch(authLogout());
    } else {
      let currentExpirationDate = new Date(localStorage.getItem('expirationDate'));

      if (currentExpirationDate && currentExpirationDate > new Date()) {
        const userId = localStorage.getItem('userId');
        const idToken = localStorage.getItem('idToken');
        const userEmail = localStorage.getItem('userEmail');

        if (userId && idToken && userEmail) {
          dispatch(authSuccess(userId, idToken, userEmail));
        }
      } else {
        authLogout();
      }
    }
  };
};

/***/ })

})
//# sourceMappingURL=app.f51c82a4c5249823edff.hot-update.js.map