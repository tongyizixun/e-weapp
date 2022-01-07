var globalThis = this, self = this;
module.exports =
require("../../_commons/0.js")([
require("../../_commons/16.js"),
require("../../_commons/2.js"),
require("../../_commons/1.js"),
{
"ids": [29],
"modules":{

/***/ "./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=examples%2Ftoast%2Ftoast!./src/examples/toast/toast.ts":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=examples%2Ftoast%2Ftoast!./src/examples/toast/toast.ts ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./toast.ts */ "./src/examples/toast/toast.ts")

/***/ }),

/***/ "./src/examples/toast/toast.ts":
/*!*************************************!*\
  !*** ./src/examples/toast/toast.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 * @Author: 刘利军
 * @Date: 2021-12-19 16:25:02
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-12-31 14:54:33
 * @Description:
 * @PageName:
 */
var _require = __webpack_require__(/*! ../../components/toast/toast */ "./src/components/toast/toast.ts"),
    Toast = _require.Toast;

Page({
  data: {},
  handleDefault: function handleDefault() {
    Toast("这是文本提示");
  },
  handleSuccess: function handleSuccess() {},
  handleWarning: function handleWarning() {},
  handleError: function handleError() {},
  handleDuration: function handleDuration() {}
});

/***/ })

},
"entries": [["./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=examples%2Ftoast%2Ftoast!./src/examples/toast/toast.ts",0,16,2,1]]
},
]);
