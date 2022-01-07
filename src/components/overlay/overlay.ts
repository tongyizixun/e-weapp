/*
 * @Author: 刘利军
 * @Date: 2021-11-24 07:56:45
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-12-25 21:32:11
 * @Description:
 * @PageName:
 */
// components/overlay/overlay.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    show: {
      type: Boolean,
      value: false,
    },
    duration: {
      type: null,
      value: 1,
    },
    zIndex: {
      type: Number,
      value: 0.3,
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    i: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    
  },
});
