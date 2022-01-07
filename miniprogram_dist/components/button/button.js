var globalThis = this, self = this;
module.exports =
require("../../_commons/0.js")([
{
"ids": [18],
"modules":{

/***/ "./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%2Fbutton%2Fbutton!./src/components/button/button.ts":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%2Fbutton%2Fbutton!./src/components/button/button.ts ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./button.ts */ "./src/components/button/button.ts")

/***/ }),

/***/ "./src/components/button/button.ts":
/*!*****************************************!*\
  !*** ./src/components/button/button.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * @Author: 刘利军
 * @Date: 2021-12-07 16:52:07
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-12-18 18:30:59
 * @Description:
 * @PageName:
 */
// components/button/button.js
Component({
  externalClasses: ["e-class"],

  /**
   * 组件的属性列表
   */
  properties: {
    type: {
      type: String,
      value: ""
    },
    inline: {
      type: Boolean,
      value: false
    },
    plain: {
      type: Boolean,
      value: false
    },
    size: {
      type: String,
      value: "default"
    },
    disabled: {
      type: Boolean,
      value: false
    },
    loading: {
      type: Boolean,
      value: false
    },
    openType: String,
    appParameter: String,
    hoverStopPropagation: Boolean,
    hoverStartTime: {
      type: Number,
      value: 20
    },
    hoverStayTime: {
      type: Number,
      value: 70
    },
    lang: {
      type: String,
      value: "en"
    },
    sessionFrom: {
      type: String,
      value: ""
    },
    sendMessageTitle: String,
    sendMessagePath: String,
    sendMessageImg: String,
    showMessageCard: Boolean
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTap: function handleTap() {
      if (this.data.disabled) return false;
      this.triggerEvent("click");
    },
    bindgetuserinfo: function bindgetuserinfo() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$detail = _ref.detail,
          detail = _ref$detail === void 0 ? {} : _ref$detail;

      this.triggerEvent("getuserinfo", detail);
    },
    bindcontact: function bindcontact() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$detail = _ref2.detail,
          detail = _ref2$detail === void 0 ? {} : _ref2$detail;

      this.triggerEvent("contact", detail);
    },
    bindgetphonenumber: function bindgetphonenumber() {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref3$detail = _ref3.detail,
          detail = _ref3$detail === void 0 ? {} : _ref3$detail;

      this.triggerEvent("getphonenumber", detail);
    },
    binderror: function binderror() {
      var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref4$detail = _ref4.detail,
          detail = _ref4$detail === void 0 ? {} : _ref4$detail;

      this.triggerEvent("error", detail);
    }
  }
});

/***/ })

},
"entries": [["./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%2Fbutton%2Fbutton!./src/components/button/button.ts",0]]
},
]);
