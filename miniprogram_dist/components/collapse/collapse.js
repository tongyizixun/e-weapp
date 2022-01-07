var globalThis = this, self = this;
module.exports =
require("../../_commons/0.js")([
{
"ids": [6],
"modules":{

/***/ "./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%2Fcollapse%2Fcollapse!./src/components/collapse/collapse.ts":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%2Fcollapse%2Fcollapse!./src/components/collapse/collapse.ts ***!
  \*************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./collapse.ts */ "./src/components/collapse/collapse.ts")

/***/ }),

/***/ "./src/components/collapse/collapse.ts":
/*!*********************************************!*\
  !*** ./src/components/collapse/collapse.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * @Author: 刘利军
 * @Date: 2021-12-07 19:18:59
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-12-20 19:08:55
 * @Description:
 * @PageName:
 */
// components/collapse/index.js
Component({
  externalClasses: ["e-class"],
  relations: {
    "../collapse-item/collapse-item": {
      type: "child"
    }
  },

  /**
   * 组件的属性列表
   */
  properties: {
    name: String,
    accordion: Boolean
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickfn: function clickfn(e) {
      var params = e.detail;
      var allList = this.getRelationNodes("../collapse-item/collapse-item");
      allList.forEach(function (item) {
        if (params.name === item.data.name) {
          item.setData({
            showContent: "e-collapse-item-show-content"
          });
        } else {
          item.setData({
            showContent: ""
          });
        }
      });
    }
  }
});

/***/ })

},
"entries": [["./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%2Fcollapse%2Fcollapse!./src/components/collapse/collapse.ts",0]]
},
]);
