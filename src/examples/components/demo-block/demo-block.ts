/*
 * @Author: 刘利军
 * @Date: 2021-12-07 15:39:16
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-12-20 11:14:19
 * @Description:
 * @PageName:
 */

Component({
  externalClasses: ["e-class"],
  properties: {
    title: {
      type: String,
      value: "",
    },
    // 标题顶部距离
    hideTop: {
      type: Boolean,
      value: false,
    },
    hideBorder: {
      type: Boolean,
      value: false,
    },
  },
});
