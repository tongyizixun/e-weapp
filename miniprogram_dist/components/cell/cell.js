var globalThis = this, self = this;
module.exports =
require("../../_commons/0.js")([
require("../../_commons/2.js"),
{
"ids": [19],
"modules":{

/***/ "./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%2Fcell%2Fcell!./src/components/cell/cell.ts":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%2Fcell%2Fcell!./src/components/cell/cell.ts ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./cell.ts */ "./src/components/cell/cell.ts")

/***/ }),

/***/ "./src/components/cell/cell.ts":
/*!*************************************!*\
  !*** ./src/components/cell/cell.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

/* eslint-disable no-console */

/*
 * @Author: 刘利军
 * @Date: 2021-12-07 15:40:28
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-12-20 17:23:11
 * @Description:
 * @PageName:
 */
// components/list-item/index.js
var warnInfo = function warnInfo(msg, getValue) {
  console.warn(msg);
  console.log("接受到的值为:", getValue);
};

Component({
  externalClasses: ["e-class"],
  options: {
    multipleSlots: true
  },
  relations: {
    "../cells/cells": {
      type: "parent"
    }
  },

  /**
   * 组件的属性列表
   */
  properties: {
    // 左侧标题
    title: {
      type: String
    },
    // 标题下方的描述信息
    label: {
      type: String
    },
    // 右侧内容
    value: {
      type: String
    },
    // 只有点击 footer 区域才触发 tab 事件
    onlyTapFooter: {
      type: Boolean
    },
    // 是否展示右侧箭头并开启尝试以 url 跳转
    link: {
      type: null,
      value: ""
    },
    // 链接类型，可选值为 navigateTo，redirectTo，switchTab，reLaunch
    linkType: {
      type: String,
      value: "navigateTo"
    },
    url: {
      type: String,
      value: ""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isLastCell: true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    navigateTo: function navigateTo() {
      var url = this.data.url;

      var type = _typeof(this.data.link);

      this.triggerEvent("click", {});
      if (!this.data.link || !url || url === "true" || url === "false") return;

      if (type !== "boolean" && type !== "string") {
        warnInfo("link 属性值必须是一个字符串或布尔值", this.data.link);
        return;
      }

      if (["navigateTo", "redirectTo", "switchTab", "reLaunch"].indexOf(this.data.linkType) === -1) {
        warnInfo("linkType 属性可选值为 navigateTo，redirectTo，switchTab，reLaunch", this.data.linkType);
        return;
      }

      wx[this.data.linkType].call(wx, {
        url: url
      });
    },
    handleTap: function handleTap() {
      if (!this.data.onlyTapFooter) {
        this.navigateTo();
      }
    },
    updateIsLastCell: function updateIsLastCell(isLastCell) {
      this.setData({
        isLastCell: isLastCell
      });
    }
  }
});

/***/ })

},
"entries": [["./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%2Fcell%2Fcell!./src/components/cell/cell.ts",0,2]]
},
]);
