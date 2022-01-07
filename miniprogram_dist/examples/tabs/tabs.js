var globalThis = this, self = this;
module.exports =
require("../../_commons/0.js")([
{
"ids": [14],
"modules":{

/***/ "./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=examples%2Ftabs%2Ftabs!./src/examples/tabs/tabs.ts":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=examples%2Ftabs%2Ftabs!./src/examples/tabs/tabs.ts ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./tabs.ts */ "./src/examples/tabs/tabs.ts")

/***/ }),

/***/ "./src/examples/tabs/tabs.ts":
/*!***********************************!*\
  !*** ./src/examples/tabs/tabs.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * @Author: 刘利军
 * @Date: 2021-12-19 16:25:02
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-12-20 18:27:07
 * @Description:
 * @PageName:
 */
Page({
  data: {
    current: "tab1",
    current_scroll: "tab1"
  },
  handleChange: function handleChange(_ref) {
    var detail = _ref.detail;
    this.setData({
      current: detail.key
    });
  },
  handleChangeScroll: function handleChangeScroll(_ref2) {
    var detail = _ref2.detail;
    this.setData({
      current_scroll: detail.key
    });
  }
});

/***/ })

},
"entries": [["./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=examples%2Ftabs%2Ftabs!./src/examples/tabs/tabs.ts",0]]
},
]);
