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
      linked(): void {
        this._updateIsLastCell();
      },
      linkChanged(): void {
        this._updateIsLastCell();
      },
      unlinked(): void {
        this._updateIsLastCell();
      },
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _updateIsLastCell(): void {
      const items = this.getRelationNodes("../cell/cell");
      const len = items.length;
      if (len > 0) {
        const lastIndex = len - 1;
        items.forEach(
          (
            item: { updateIsLastCell: (arg0: boolean) => void },
            index: number
          ) => {
            item.updateIsLastCell(index === lastIndex);
          }
        );
      }
    },
  },
});
