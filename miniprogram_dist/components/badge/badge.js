var globalThis = this, self = this;
module.exports =
require("../../_commons/0.js")([
{
"ids": [3],
"modules":{

/***/ "./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%2Fbadge%2Fbadge!./src/components/badge/badge.ts":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%2Fbadge%2Fbadge!./src/components/badge/badge.ts ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./badge.ts */ "./src/components/badge/badge.ts")

/***/ }),

/***/ "./src/components/badge/badge.ts":
/*!***************************************!*\
  !*** ./src/components/badge/badge.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * @Author: 刘利军
 * @Date: 2021-12-19 16:25:02
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-12-20 12:00:14
 * @Description:
 * @PageName:
 */
Component({
  externalClasses: ["e-class", "e-class-alone"],
  properties: {
    count: {
      type: Number,
      value: 0,
      observer: "finalCount"
    },
    overflowCount: {
      type: Number,
      value: 99
    },
    dot: {
      type: Boolean,
      value: false
    }
  },
  data: {
    finalCount: 0
  },
  methods: {
    finalCount: function finalCount() {
      this.setData({
        finalCount: parseInt(this.data.count) >= parseInt(this.data.overflowCount) ? "".concat(this.data.overflowCount, "+") : this.data.count
      });
    }
  }
});

/***/ })

},
"entries": [["./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%2Fbadge%2Fbadge!./src/components/badge/badge.ts",0]]
},
]);
