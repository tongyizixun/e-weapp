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
      type: "child",
    },
  },

  /**
   * 组件的属性列表
   */
  properties: {
    name: String,
    accordion: Boolean,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickfn(e): void {
      const params = e.detail;
      const allList = this.getRelationNodes("../collapse-item/collapse-item");
      allList.forEach((item) => {
        if (params.name === item.data.name) {
          item.setData({
            showContent: "e-collapse-item-show-content",
          });
        } else {
          item.setData({
            showContent: "",
          });
        }
      });
    },
  },
});
