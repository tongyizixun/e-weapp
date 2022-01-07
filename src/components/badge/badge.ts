/*
 * @Author: 刘利军
 * @Date: 2021-12-19 16:25:02
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-12-20 12:00:14
 * @Description:
 * @PageName:
 */
Component({
  externalClasses: ["e-class", "e-class-alone"],
  properties: {
    count: {
      type: Number,
      value: 0,
      observer: "finalCount",
    },
    overflowCount: {
      type: Number,
      value: 99,
    },
    dot: {
      type: Boolean,
      value: false,
    },
  },
  data: {
    finalCount: 0,
  },
  methods: {
    finalCount() {
      this.setData({
        finalCount:
          parseInt(this.data.count) >= parseInt(this.data.overflowCount)
            ? `${this.data.overflowCount}+`
            : this.data.count,
      });
    },
  },
});
