webpackHotUpdate("app",{

/***/ "./src/services/helpers.ts":
/*!*********************************!*\
  !*** ./src/services/helpers.ts ***!
  \*********************************/
/*! exports provided: API_RECALL_TIMER, normalizePrice, isCoinPresent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_RECALL_TIMER", function() { return API_RECALL_TIMER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizePrice", function() { return normalizePrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCoinPresent", function() { return isCoinPresent; });
const API_RECALL_TIMER = 60000;
function normalizePrice(value, precision = 0) {
  let toReturn = value;

  if (!value) {
    return null;
  }

  const min = 0;
  const max = 99999999;

  if (typeof toReturn === 'string') {
    toReturn = toReturn.replace(/[^0-9.]+/g, '');
    toReturn = parseFloat(toReturn);
  }

  if (toReturn < min) {
    toReturn = min;
  }

  if (toReturn > max) {
    toReturn = max;
  }

  const formatted = toReturn.toFixed(precision).replace(/./g, (c, i, a) => i && c !== '.' && (a.length - i) % 3 === 0 ? `,${c}` : c);
  return formatted;
}
function isCoinPresent(coin, data) {
  return data.find(element => element.slug === coin.slug);
}

/***/ })

})
//# sourceMappingURL=app.ba586b8ba6240fba5815.hot-update.js.map