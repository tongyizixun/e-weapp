/*
 * @Author: 刘利军
 * @Date: 2021-12-06 16:46:30
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-12-20 17:48:05
 * @Description:
 * @PageName:
 */
// components/tabs/tabs.js
Component({
  /**
   * 组件的属性列表
   */
  externalClasses: ["e-class"],

  relations: {
    "../tab/tab": {
      type: "child",
      linked() {
        this.changeCurrent();
      },
      linkChanged() {
        this.changeCurrent();
      },
      unlinked() {
        this.changeCurrent();
      },
    },
  },

  properties: {
    current: {
      type: String,
      value: "",
      observer: "changeCurrent",
    },
    color: {
      type: String,
      value: "",
    },
    scroll: {
      type: Boolean,
      value: false,
    },
    fixed: {
      type: Boolean,
      value: false,
    },
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    changeCurrent(val = this.data.current): void {
      const items = this.getRelationNodes("../tab/tab");
      const len = items.length;

      if (len > 0) {
        items.forEach(
          (item: {
            changeScroll: (arg0: any) => void;
            changeCurrent: (arg0: boolean) => void;
            data: { key: any };
            changeCurrentColor: (arg0: any) => void;
          }) => {
            item.changeScroll(this.data.scroll);
            item.changeCurrent(item.data.key === val);
            item.changeCurrentColor(this.data.color);
          }
        );
      }
    },
    emitEvent(key): void {
      this.triggerEvent("change", { key });
    },
  },
});
