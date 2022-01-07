var globalThis = this, self = this;
module.exports =
require("../../_commons/0.js")([
{
"ids": [8],
"modules":{

/***/ "./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%2Ftabs%2Ftabs!./src/components/tabs/tabs.ts":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%2Ftabs%2Ftabs!./src/components/tabs/tabs.ts ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./tabs.ts */ "./src/components/tabs/tabs.ts")

/***/ }),

/***/ "./src/components/tabs/tabs.ts":
/*!*************************************!*\
  !*** ./src/components/tabs/tabs.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * @Author: 刘利军
 * @Date: 2021-12-06 16:46:30
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-12-20 17:48:05
 * @Description:
 * @PageName:
 */
// components/tabs/tabs.js
Component({
  /**
   * 组件的属性列表
   */
  externalClasses: ["e-class"],
  relations: {
    "../tab/tab": {
      type: "child",
      linked: function linked() {
        this.changeCurrent();
      },
      linkChanged: function linkChanged() {
        this.changeCurrent();
      },
      unlinked: function unlinked() {
        this.changeCurrent();
      }
    }
  },
  properties: {
    current: {
      type: String,
      value: "",
      observer: "changeCurrent"
    },
    color: {
      type: String,
      value: ""
    },
    scroll: {
      type: Boolean,
      value: false
    },
    fixed: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    changeCurrent: function changeCurrent() {
      var _this = this;

      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.data.current;
      var items = this.getRelationNodes("../tab/tab");
      var len = items.length;

      if (len > 0) {
        items.forEach(function (item) {
          item.changeScroll(_this.data.scroll);
          item.changeCurrent(item.data.key === val);
          item.changeCurrentColor(_this.data.color);
        });
      }
    },
    emitEvent: function emitEvent(key) {
      this.triggerEvent("change", {
        key: key
      });
    }
  }
});

/***/ })

},
"entries": [["./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%2Ftabs%2Ftabs!./src/components/tabs/tabs.ts",0]]
},
]);
