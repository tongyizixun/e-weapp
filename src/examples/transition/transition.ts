/*
 * @Author: 刘利军
 * @Date: 2021-12-19 16:25:02
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-12-28 11:51:22
 * @Description:
 * @PageName:
 */

Page({
  data: {
    name: "",
    show: false,
  },
  fade() {
    this.setData({ name: "fade", show: true });
  },
  fadeUp() {
    this.setData({ name: "fade-up", show: true });
  },
  fadeDown() {
    this.setData({ name: "fade-down", show: true });
  },
  fadeLeft() {
    this.setData({ name: "fade-left", show: true });
  },
  fadeRight() {
    this.setData({ name: "fade-right", show: true });
  },
  slideUp() {
    this.setData({ name: "slide-up", show: true });
  },
  slideDown() {
    this.setData({ name: "slide-down", show: true });
  },
  slideLeft() {
    this.setData({ name: "slide-left", show: true });
  },
  slideRight() {
    this.setData({ name: "slide-right", show: true });
  },
  afterEnter() {
    setTimeout(() => {
      this.setData({ show: false });
    }, 1000);
  },
});
