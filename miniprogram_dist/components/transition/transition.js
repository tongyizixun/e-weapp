var globalThis = this, self = this;
module.exports =
require("../../_commons/0.js")([
require("../../_commons/16.js"),
{
"ids": [9],
"modules":{

/***/ "./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%2Ftransition%2Ftransition!./src/components/transition/transition.ts":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%2Ftransition%2Ftransition!./src/components/transition/transition.ts ***!
  \*********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./transition.ts */ "./src/components/transition/transition.ts")

/***/ }),

/***/ "./src/components/transition/transition.ts":
/*!*************************************************!*\
  !*** ./src/components/transition/transition.ts ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/utils */ "./src/components/common/utils.ts");
/*
 * @Author: 刘利军
 * @Date: 2021-12-07 19:18:59
 * @LastEditors: 刘利军
 * @LastEditTime: 2022-01-07 14:17:09
 * @Description:
 * @PageName:
 */
 // 阶段类名

var getClassNames = function getClassNames(moveName) {
  return {
    enter: "e-".concat(moveName, "-enter e-").concat(moveName, "-enter-active "),
    "enter-to": "e-".concat(moveName, "-enter-to e-").concat(moveName, "-enter-active"),
    leave: "e-".concat(moveName, "-leave e-").concat(moveName, "-leave-active"),
    "leave-to": "e-".concat(moveName, "-leave-to e-").concat(moveName, "-leave-active")
  };
};

Component({
  externalClasses: ["e-class"],

  /**
   * 组件的属性列表
   */
  properties: {
    show: {
      type: Boolean,
      value: false,
      observer: "observeShow"
    },
    name: {
      type: String,
      value: "fade"
    },
    duration: {
      type: Number,
      value: 0.3
    }
  },
  data: {
    inited: false,
    display: false
  },
  lifetimes: {
    ready: function ready() {
      if (this.data.show === true) {
        this.observeShow(true, false);
      }
    }
  },
  methods: {
    observeShow: function observeShow(value, old) {
      if (value === old) {
        return;
      }

      value ? this.enter() : this.leave();
    },
    enter: function enter() {
      var _this = this;

      var _this$data = this.data,
          duration = _this$data.duration,
          name = _this$data.name;
      var classNames = getClassNames(name);
      this.status = "enter";
      this.triggerEvent("before-enter");
      Object(_common_utils__WEBPACK_IMPORTED_MODULE_0__["requestAnimationFrame"])(function () {
        if (_this.status !== "enter") {
          return;
        }

        _this.triggerEvent("enter");

        _this.setData({
          inited: true,
          display: true,
          classes: classNames.enter,
          duration: duration
        });

        Object(_common_utils__WEBPACK_IMPORTED_MODULE_0__["requestAnimationFrame"])(function () {
          if (_this.status !== "enter") {
            return;
          }

          _this.transitionEnded = false;

          _this.setData({
            classes: classNames["enter-to"]
          });
        });
      });
    },
    leave: function leave() {
      var _this2 = this;

      if (!this.data.display) {
        return;
      }

      var _this$data2 = this.data,
          duration = _this$data2.duration,
          name = _this$data2.name;
      var classNames = getClassNames(name);
      this.status = "leave";
      this.triggerEvent("before-leave");
      Object(_common_utils__WEBPACK_IMPORTED_MODULE_0__["requestAnimationFrame"])(function () {
        if (_this2.status !== "leave") {
          return;
        }

        _this2.triggerEvent("leave");

        _this2.setData({
          classes: classNames.leave,
          duration: duration
        });

        Object(_common_utils__WEBPACK_IMPORTED_MODULE_0__["requestAnimationFrame"])(function () {
          if (_this2.status !== "leave") {
            return;
          }

          _this2.transitionEnded = false; // setTimeout(() => this.onTransitionEnd(), duration);

          _this2.setData({
            classes: classNames["leave-to"]
          });
        });
      });
    },
    onTransitionEnd: function onTransitionEnd() {
      if (this.transitionEnded) {
        return;
      }

      this.transitionEnded = true;
      this.triggerEvent("after-".concat(this.status));
      var _this$data3 = this.data,
          show = _this$data3.show,
          display = _this$data3.display;

      if (!show && display) {
        this.setData({
          display: false
        });
      }
    }
  }
});

/***/ })

},
"entries": [["./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%2Ftransition%2Ftransition!./src/components/transition/transition.ts",0,16]]
},
]);
