webpackHotUpdate("app",{

/***/ "./src/services/helpers.ts":
/*!*********************************!*\
  !*** ./src/services/helpers.ts ***!
  \*********************************/
/*! exports provided: normalizePrice, isCoinPresent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizePrice", function() { return normalizePrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCoinPresent", function() { return isCoinPresent; });
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
  console.log(data);
  console.log(coin);
  return data.find(element => element.slug === coin.slug);
}

/***/ })

})
//# sourceMappingURL=app.a100948499538f934ea4.hot-update.js.map