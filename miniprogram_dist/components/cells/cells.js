var globalThis = this, self = this;
module.exports =
require("../../_commons/0.js")([
{
"ids": [5],
"modules":{

/***/ "./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%2Fcells%2Fcells!./src/components/cells/cells.ts":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%2Fcells%2Fcells!./src/components/cells/cells.ts ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./cells.ts */ "./src/components/cells/cells.ts")

/***/ }),

/***/ "./src/components/cells/cells.ts":
/*!***************************************!*\
  !*** ./src/components/cells/cells.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * @Author: 刘利军
 * @Date: 2021-12-07 15:39:16
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-12-20 17:23:04
 * @Description:
 * @PageName:
 */
// components/list/index.js
Component({
  externalClasses: ["e-class"],
  relations: {
    "../cell/cell": {
      type: "child",
      linked: function linked() {
        this._updateIsLastCell();
      },
      linkChanged: function linkChanged() {
        this._updateIsLastCell();
      },
      unlinked: function unlinked() {
        this._updateIsLastCell();
      }
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _updateIsLastCell: function _updateIsLastCell() {
      var items = this.getRelationNodes("../cell/cell");
      var len = items.length;

      if (len > 0) {
        var lastIndex = len - 1;
        items.forEach(function (item, index) {
          item.updateIsLastCell(index === lastIndex);
        });
      }
    }
  }
});

/***/ })

},
"entries": [["./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%2Fcells%2Fcells!./src/components/cells/cells.ts",0]]
},
]);
