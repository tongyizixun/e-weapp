/*
 * @Author: 刘利军
 * @Date: 2021-12-07 16:52:07
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-12-18 18:30:59
 * @Description:
 * @PageName:
 */
// components/button/button.js
Component({
  externalClasses: ["e-class"],
  /**
   * 组件的属性列表
   */
  properties: {
    type: {
      type: String,
      value: "",
    },
    inline: {
      type: Boolean,
      value: false,
    },
    plain: {
      type: Boolean,
      value: false,
    },
    size: {
      type: String,
      value: "default",
    },
    disabled: {
      type: Boolean,
      value: false,
    },
    loading: {
      type: Boolean,
      value: false,
    },
    openType: String,
    appParameter: String,
    hoverStopPropagation: Boolean,
    hoverStartTime: {
      type: Number,
      value: 20,
    },
    hoverStayTime: {
      type: Number,
      value: 70,
    },
    lang: {
      type: String,
      value: "en",
    },
    sessionFrom: {
      type: String,
      value: "",
    },
    sendMessageTitle: String,
    sendMessagePath: String,
    sendMessageImg: String,
    showMessageCard: Boolean,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTap() {
      if (this.data.disabled) return false;
      this.triggerEvent("click");
    },
    bindgetuserinfo({ detail = {} } = {}) {
      this.triggerEvent("getuserinfo", detail);
    },
    bindcontact({ detail = {} } = {}) {
      this.triggerEvent("contact", detail);
    },
    bindgetphonenumber({ detail = {} } = {}) {
      this.triggerEvent("getphonenumber", detail);
    },
    binderror({ detail = {} } = {}) {
      this.triggerEvent("error", detail);
    },
  },
});
