/*
 * @Author: 刘利军
 * @Date: 2021-12-07 19:18:59
 * @LastEditors: 刘利军
 * @LastEditTime: 2022-01-07 14:17:09
 * @Description:
 * @PageName:
 */

import { requestAnimationFrame } from "../common/utils";
// 阶段类名
const getClassNames = function (moveName: string) {
  return {
    enter: `e-${moveName}-enter e-${moveName}-enter-active `,
    "enter-to": `e-${moveName}-enter-to e-${moveName}-enter-active`,
    leave: `e-${moveName}-leave e-${moveName}-leave-active`,
    "leave-to": `e-${moveName}-leave-to e-${moveName}-leave-active`,
  };
};

Component({
  externalClasses: ["e-class"],

  /**
   * 组件的属性列表
   */
  properties: {
    show: { type: Boolean, value: false, observer: "observeShow" },
    name: {
      type: String,
      value: "fade",
    },
    duration: {
      type: Number,
      value: 0.3,
    },
  },
  data: {
    inited: false,
    display: false,
  },
  lifetimes: {
    ready() {
      if (this.data.show === true) {
        this.observeShow(true, false);
      }
    },
  },
  methods: {
    observeShow(value: boolean, old: boolean) {
      if (value === old) {
        return;
      }

      value ? this.enter() : this.leave();
    },

    enter() {
      const { duration, name } = this.data;
      const classNames = getClassNames(name);

      this.status = "enter";
      this.triggerEvent("before-enter");

      requestAnimationFrame(() => {
        if (this.status !== "enter") {
          return;
        }

        this.triggerEvent("enter");

        this.setData({
          inited: true,
          display: true,
          classes: classNames.enter,
          duration,
        });

        requestAnimationFrame(() => {
          if (this.status !== "enter") {
            return;
          }

          this.transitionEnded = false;
          this.setData({ classes: classNames["enter-to"] });
        });
      });
    },

    leave() {
      if (!this.data.display) {
        return;
      }

      const { duration, name } = this.data;
      const classNames = getClassNames(name);

      this.status = "leave";
      this.triggerEvent("before-leave");

      requestAnimationFrame(() => {
        if (this.status !== "leave") {
          return;
        }

        this.triggerEvent("leave");

        this.setData({
          classes: classNames.leave,
          duration,
        });

        requestAnimationFrame(() => {
          if (this.status !== "leave") {
            return;
          }

          this.transitionEnded = false;
          // setTimeout(() => this.onTransitionEnd(), duration);
          this.setData({ classes: classNames["leave-to"] });
        });
      });
    },

    onTransitionEnd() {
      if (this.transitionEnded) {
        return;
      }

      this.transitionEnded = true;
      this.triggerEvent(`after-${this.status}`);

      const { show, display } = this.data;
      if (!show && display) {
        this.setData({ display: false });
      }
    },
  },
});
