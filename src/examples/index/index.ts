/*
 * @Author: 刘利军
 * @Date: 2021-12-19 16:25:02
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-12-30 13:07:46
 * @Description:
 * @PageName:
 */
Page({
  data: {
    list: [
      {
        id: "basic",
        name: "基础",
        pages: [
          { label: "Button 按钮", value: "button" },
          { label: "Cell 单元格", value: "cell" },
          { label: "Icon 图标", value: "icon" },
          { label: "transition动画", value: "transition" },
        ],
      },
      {
        id: "show",
        name: "数据展示",
        pages: [
          { label: "Badge 徽标", value: "badge" },
          { label: "Card 卡片", value: "card" },
        ],
      },
      {
        id: "feedback",
        name: "操作反馈",
        pages: [
          { label: "Overlay 遮罩层", value: "overlay" },
          { label: "Toast 全局提醒", value: "toast" },
        ],
      },
      {
        id: "nav",
        name: "导航和布局",
        pages: [
          { label: "Collapse 折叠面板", value: "collapse" },
          { label: "Tabs 标签页", value: "tabs" },
        ],
      },
    ],
  },
});
