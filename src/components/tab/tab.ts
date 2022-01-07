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
      type: "parent",
    },
  },

  /**
   * 组件的属性列表
   */

  properties: {
    key: {
      type: String,
      value: "",
    },
    title: {
      type: String,
      value: "",
    },
    dot: {
      type: Boolean,
      value: false,
    },
    count: {
      type: Number,
      value: 0,
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    current: false,
    currentColor: "",
    scroll: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeCurrent(current): void {
      this.setData({ current });
    },
    changeCurrentColor(currentColor): void {
      this.setData({ currentColor });
    },
    changeScroll(scroll): void {
      this.setData({ scroll });
    },
    handleClickItem(): void {
      const parent = this.getRelationNodes("../tabs/tabs")[0];
      parent.emitEvent(this.data.key);
    },
  },
});
