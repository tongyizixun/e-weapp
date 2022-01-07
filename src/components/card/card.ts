/*
 * @Author: 刘利军
 * @Date: 2021-12-07 15:13:44
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-12-10 13:57:18
 * @Description:
 * @PageName:
 */
// components/card/index.js
Component({
  externalClasses: ["e-class"],

  options: {
    multipleSlots: true,
  },
  /**
   * 组件的属性列表
   */

  properties: {
    full: {
      type: Boolean,
      value: false,
    },
    thumb: {
      type: String,
      value: "",
    },
    title: {
      type: String,
      value: "",
    },
    extra: {
      type: String,
      value: "",
    },
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {},
});
