webpackHotUpdate("contentScript",{

/***/ "./src/contentScript/index.js":
/*!************************************!*\
  !*** ./src/contentScript/index.js ***!
  \************************************/
/*! exports provided: printAllPageLinks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printAllPageLinks", function() { return printAllPageLinks; });
printAllPageLinks();
function printAllPageLinks() {
  const allLinks = Array.from(document.querySelectorAll('a')).map(link => link.href);
  console.log('-'.repeat(30));
  console.log(`These are all ${allLinks.length} links on the current page that have been printed by the Sample Create React Extension`);
  console.log(allLinks);
  console.log('-'.repeat(30));
}

/***/ })

})
//# sourceMappingURL=contentScript.d7062a72e21598390f4a.hot-update.js.map