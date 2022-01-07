var globalThis = this, self = this;
module.exports =
require("../../_commons/0.js")([
{
"ids": [15],
"modules":{

/***/ "./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=examples%2Ftransition%2Ftransition!./src/examples/transition/transition.ts":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=examples%2Ftransition%2Ftransition!./src/examples/transition/transition.ts ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./transition.ts */ "./src/examples/transition/transition.ts")

/***/ }),

/***/ "./src/examples/transition/transition.ts":
/*!***********************************************!*\
  !*** ./src/examples/transition/transition.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * @Author: 刘利军
 * @Date: 2021-12-19 16:25:02
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-12-28 11:51:22
 * @Description:
 * @PageName:
 */
Page({
  data: {
    name: "",
    show: false
  },
  fade: function fade() {
    this.setData({
      name: "fade",
      show: true
    });
  },
  fadeUp: function fadeUp() {
    this.setData({
      name: "fade-up",
      show: true
    });
  },
  fadeDown: function fadeDown() {
    this.setData({
      name: "fade-down",
      show: true
    });
  },
  fadeLeft: function fadeLeft() {
    this.setData({
      name: "fade-left",
      show: true
    });
  },
  fadeRight: function fadeRight() {
    this.setData({
      name: "fade-right",
      show: true
    });
  },
  slideUp: function slideUp() {
    this.setData({
      name: "slide-up",
      show: true
    });
  },
  slideDown: function slideDown() {
    this.setData({
      name: "slide-down",
      show: true
    });
  },
  slideLeft: function slideLeft() {
    this.setData({
      name: "slide-left",
      show: true
    });
  },
  slideRight: function slideRight() {
    this.setData({
      name: "slide-right",
      show: true
    });
  },
  afterEnter: function afterEnter() {
    var _this = this;

    setTimeout(function () {
      _this.setData({
        show: false
      });
    }, 1000);
  }
});

/***/ })

},
"entries": [["./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=examples%2Ftransition%2Ftransition!./src/examples/transition/transition.ts",0]]
},
]);
