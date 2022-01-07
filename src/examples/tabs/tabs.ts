/*
 * @Author: 刘利军
 * @Date: 2021-12-19 16:25:02
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-12-20 18:27:07
 * @Description:
 * @PageName:
 */

Page({
  data: {
    current: "tab1",
    current_scroll: "tab1",
  },

  handleChange({ detail }) {
    this.setData({
      current: detail.key,
    });
  },

  handleChangeScroll({ detail }) {
    this.setData({
      current_scroll: detail.key,
    });
  },
});
