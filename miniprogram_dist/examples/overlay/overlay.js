var globalThis = this, self = this;
module.exports =
require("../../_commons/0.js")([
{
"ids": [28],
"modules":{

/***/ "./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=examples%2Foverlay%2Foverlay!./src/examples/overlay/overlay.ts":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=examples%2Foverlay%2Foverlay!./src/examples/overlay/overlay.ts ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./overlay.ts */ "./src/examples/overlay/overlay.ts")

/***/ }),

/***/ "./src/examples/overlay/overlay.ts":
/*!*****************************************!*\
  !*** ./src/examples/overlay/overlay.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * @Author: 刘利军
 * @Date: 2021-12-19 16:25:02
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-12-24 18:26:34
 * @Description:
 * @PageName:
 */
Page({
  data: {
    show: false,
    embedShow: false
  },
  onClickShow: function onClickShow() {
    this.setData({
      show: true
    });
  },
  onClickHide: function onClickHide() {
    this.setData({
      show: false
    });
  },
  embedShowShow: function embedShowShow() {
    this.setData({
      embedShow: true
    });
  },
  embedShowHide: function embedShowHide() {
    this.setData({
      embedShow: false
    });
  }
});

/***/ })

},
"entries": [["./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=examples%2Foverlay%2Foverlay!./src/examples/overlay/overlay.ts",0]]
},
]);
