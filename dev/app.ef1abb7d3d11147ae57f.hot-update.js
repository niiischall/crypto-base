webpackHotUpdate("app",{

/***/ "./src/store/reducers/profile.ts":
/*!***************************************!*\
  !*** ./src/store/reducers/profile.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return profile; });
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/actionTypes */ "./src/store/actions/actionTypes.ts");

const initialState = {
  userEmail: null,
  userId: null,
  idToken: null,
  error: ''
};
/**
 * State management for data related to profile
 * @param {Object} state - The current (or initial) state
 * @param {Object} action - An incoming action
 */

function profile(state = initialState, action) {
  switch (action.type) {
    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["AUTH_SUCCESS"]:
      {
        return Object.assign({}, state, {
          userEmail: action.email,
          userId: action.userId,
          idToken: action.idToken
        });
      }

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["AUTH_FAILED"]:
      {
        return Object.assign({}, state, {
          error: action.error
        });
      }

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["AUTH_LOGOUT"]:
      {
        return Object.assign({}, state, {
          userEmail: null,
          userId: null,
          idToken: null,
          error: ''
        });
      }

    default:
      return state;
  }
}

/***/ })

})
//# sourceMappingURL=app.ef1abb7d3d11147ae57f.hot-update.js.map