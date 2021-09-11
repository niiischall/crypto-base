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
/* harmony import */ var _services_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/helpers */ "./src/services/helpers.ts");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api */ "./src/services/api.ts");




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
  let authURL = _services_api__WEBPACK_IMPORTED_MODULE_2__["apiEndPoints"].signUp;

  if (!isSignUp) {
    authURL = _services_api__WEBPACK_IMPORTED_MODULE_2__["apiEndPoints"].signIn;
  }

  return async dispatch => {
    try {
      const response = await Object(_services_api__WEBPACK_IMPORTED_MODULE_2__["authApi"])(authURL, 'post', info);
      const json = await response.json();

      if (response.ok) {
        const {
          localId,
          idToken,
          email,
          expiresIn
        } = json;
        dispatch(authSuccess(localId, idToken, email));
        localStorage.setItem('idToken', idToken);
        localStorage.setItem('userId', localId);
        localStorage.setItem('userEmail', email);
        const expirationDate = new Date(new Date().getTime() + expiresIn * 1000 * 24);
        localStorage.setItem('expirationDate', String(expirationDate));
        dispatch(authAutoLogout(json.expiresIn));
      } else {
        const {
          message
        } = json.error;
        dispatch(authFailed(Object(_services_helpers__WEBPACK_IMPORTED_MODULE_1__["normalizeError"])(message)));
      }
    } catch (error) {
      dispatch(authFailed(Object(_services_helpers__WEBPACK_IMPORTED_MODULE_1__["normalizeError"])(error.message)));
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
      const currentExpirationDate = localStorage.getItem('expirationDate');

      if (currentExpirationDate && new Date(currentExpirationDate) > new Date()) {
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
//# sourceMappingURL=app.4ce04e783e0c46b89f31.hot-update.js.map