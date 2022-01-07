/*
 * @Author: 刘利军
 * @Date: 2021-12-07 19:19:45
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-12-20 17:23:34
 * @Description:
 * @PageName:
 */
// components/collapse-item/index.js
Component({
  externalClasses: ["e-class-content", "e-class-title", "e-class"],

  relations: {
    "../collapse/collapse": {
      type: "parent",
      linked(target) {
        const options = {
          accordion: target.data.accordion,
          showContent: "",
        };
        if (target.data.name === this.data.name) {
          options.showContent = "e-collapse-item-show-content";
        }
        this.setData(options);
      },
    },
  },
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    name: String,
  },

  /**
   * 组件的初始数据
   */
  data: {
    showContent: "",
    accordion: false,
  },

  options: {
    multipleSlots: true,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    trigger(): void {
      const data = this.data;
      if (data.accordion) {
        this.triggerEvent(
          "collapse",
          { name: data.name },
          { composed: true, bubbles: true }
        );
      } else {
        this.setData({
          showContent: data.showContent ? "" : "e-collapse-item-show-content",
        });
      }
    },
  },
});
