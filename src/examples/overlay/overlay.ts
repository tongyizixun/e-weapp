/*
 * @Author: 刘利军
 * @Date: 2021-12-19 16:25:02
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-12-24 18:26:34
 * @Description:
 * @PageName:
 */

Page({
  data: {
    show: false,
    embedShow: false,
  },
  onClickShow() {
    this.setData({ show: true });
  },

  onClickHide() {
    this.setData({ show: false });
  },
  embedShowShow() {
    this.setData({ embedShow: true });
  },
  embedShowHide() {
    this.setData({ embedShow: false });
  },
});
