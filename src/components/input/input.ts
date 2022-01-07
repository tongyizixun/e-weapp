/*
 * @Author: 刘利军
 * @Date: 2021-12-10 14:37:08
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-12-18 13:28:21
 * @Description:
 * @PageName:
 */
// components/e/input/index.js
Component({
  behaviors: ["wx://form-field"],
  externalClasses: ["e-class"],
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
    },
    // text || textarea || password || number
    type: {
      type: String,
      value: "text",
    },
    disabled: {
      type: Boolean,
      value: false,
    },
    placeholder: {
      type: String,
      value: "",
    },
    autofocus: {
      type: Boolean,
      value: false,
    },
    mode: {
      type: String,
      value: "normal",
    },
    right: {
      type: Boolean,
      value: false,
    },
    error: {
      type: Boolean,
      value: false,
    },
    maxlength: {
      type: Number,
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleInputChange(event): void {
      const { detail = {} } = event;
      const { value = "" } = detail;
      this.setData({ value });

      this.triggerEvent("change", event);
    },

    handleInputFocus(event): void {
      this.triggerEvent("focus", event);
    },

    handleInputBlur(event): void {
      this.triggerEvent("blur", event);
    },
  },
});
