var globalThis = this, self = this;
module.exports =
require("../../_commons/0.js")([
{
"ids": [22],
"modules":{

/***/ "./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%2Ftab%2Ftab!./src/components/tab/tab.ts":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%2Ftab%2Ftab!./src/components/tab/tab.ts ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./tab.ts */ "./src/components/tab/tab.ts")

/***/ }),

/***/ "./src/components/tab/tab.ts":
/*!***********************************!*\
  !*** ./src/components/tab/tab.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * @Author: 刘利军
 * @Date: 2021-12-06 16:41:46
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-12-20 17:48:13
 * @Description:
 * @PageName:
 */
// components/tab/tab.js
Component({
  externalClasses: ["e-class"],
  relations: {
    "../tabs/tabs": {
      type: "parent"
    }
  },

  /**
   * 组件的属性列表
   */
  properties: {
    key: {
      type: String,
      value: ""
    },
    title: {
      type: String,
      value: ""
    },
    dot: {
      type: Boolean,
      value: false
    },
    count: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    current: false,
    currentColor: "",
    scroll: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeCurrent: function changeCurrent(current) {
      this.setData({
        current: current
      });
    },
    changeCurrentColor: function changeCurrentColor(currentColor) {
      this.setData({
        currentColor: currentColor
      });
    },
    changeScroll: function changeScroll(scroll) {
      this.setData({
        scroll: scroll
      });
    },
    handleClickItem: function handleClickItem() {
      var parent = this.getRelationNodes("../tabs/tabs")[0];
      parent.emitEvent(this.data.key);
    }
  }
});

/***/ })

},
"entries": [["./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%2Ftab%2Ftab!./src/components/tab/tab.ts",0]]
},
]);
