webpackHotUpdate("app",{

/***/ "./src/store/reducers/index.ts":
/*!*************************************!*\
  !*** ./src/store/reducers/index.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/store/reducers/menu.ts");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/store/reducers/home.ts");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search */ "./src/store/reducers/search.ts");
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile */ "./src/store/reducers/profile.ts");





/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  menu: _menu__WEBPACK_IMPORTED_MODULE_1__["default"],
  home: _home__WEBPACK_IMPORTED_MODULE_2__["default"],
  search: _search__WEBPACK_IMPORTED_MODULE_3__["default"],
  profile: _profile__WEBPACK_IMPORTED_MODULE_4__["default"]
}));

/***/ }),

/***/ "./src/store/reducers/menu.ts":
/*!************************************!*\
  !*** ./src/store/reducers/menu.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return menu; });
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/actionTypes */ "./src/store/actions/actionTypes.ts");

const initialState = {
  currentPage: 'home'
};
/**
 * State management for data related to menu
 * @param {Object} state - The current (or initial) state
 * @param {Object} action - An incoming action
 */

function menu(state = initialState, action) {
  switch (action.type) {
    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["MENU_HOME"]:
      {
        return Object.assign({}, state, {
          currentPage: 'home'
        });
      }

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["MENU_SEARCH"]:
      {
        return Object.assign({}, state, {
          currentPage: 'search'
        });
      }

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["MENU_PROFILE"]:
      {
        return Object.assign({}, state, {
          currentPage: 'profile'
        });
      }
  }
}

/***/ })

})
//# sourceMappingURL=app.2d88be49ec5247914b5f.hot-update.js.map