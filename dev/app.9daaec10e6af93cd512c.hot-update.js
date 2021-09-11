webpackHotUpdate("app",{

/***/ "./src/services/context.ts":
/*!*********************************!*\
  !*** ./src/services/context.ts ***!
  \*********************************/
/*! exports provided: pages, PageProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pages", function() { return pages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageProvider", function() { return PageProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 //Page Values

const pages = {
  home: 'home',
  search: 'search',
  profile: 'profile'
}; //Page context

const pageContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({
  page: '',
  switchPage: (event, value) => {}
}); //Page Provider

const PageProvider = pageContext.Provider; //Default pageContext Export

/* harmony default export */ __webpack_exports__["default"] = (pageContext);

/***/ })

})
//# sourceMappingURL=app.9daaec10e6af93cd512c.hot-update.js.map