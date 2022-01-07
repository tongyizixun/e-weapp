var globalThis = this, self = this;
module.exports = {
"ids": [16],
"modules":{

/***/ "./src/components/common/utils.ts":
/*!****************************************!*\
  !*** ./src/components/common/utils.ts ***!
  \****************************************/
/*! exports provided: getSystemInfoSync, requestAnimationFrame, getContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSystemInfoSync", function() { return getSystemInfoSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestAnimationFrame", function() { return requestAnimationFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContext", function() { return getContext; });
// @ts-nocheck

/*
 * @Author: 刘利军
 * @Date: 2021-12-25 20:28:27
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-12-31 14:31:45
 * @Description:
 * @PageName:
 */
var systemInfo;
function getSystemInfoSync() {
  if (systemInfo == null) {
    systemInfo = wx.getSystemInfoSync();
  }

  return systemInfo;
}
function requestAnimationFrame(cb) {
  var systemInfo = getSystemInfoSync();

  if (systemInfo.platform === "devtools") {
    return setTimeout(function () {
      cb();
    }, 1000 / 30);
  }

  return wx.createSelectorQuery().selectViewport().boundingClientRect().exec(function () {
    cb();
  });
}
function getContext(selector) {
  var pages = getCurrentPages();
  var ctx = pages[pages.length - 1];
  var componentCtx = ctx.selectComponent(selector);

  if (!componentCtx) {
    console.warn("无法找到对应的组件，请按文档说明使用组件");
    return null;
  }

  return componentCtx;
}

/***/ })

}};
;