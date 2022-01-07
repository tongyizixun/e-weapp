/*
 * @Author: 刘利军
 * @Date: 2021-12-19 16:25:02
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-12-31 14:54:33
 * @Description:
 * @PageName:
 */

const { Toast } = require("../../components/toast/toast");
Page({
  data: {},
  handleDefault() {
    Toast("这是文本提示");
  },
  handleSuccess() {},
  handleWarning() {},
  handleError() {},
  handleDuration() {},
});
