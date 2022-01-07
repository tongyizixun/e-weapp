// @ts-nocheck
/*
 * @Author: 刘利军
 * @Date: 2021-12-25 20:28:27
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-12-31 14:31:45
 * @Description:
 * @PageName:
 */

let systemInfo: WechatMiniprogram.SystemInfo;
export function getSystemInfoSync() {
  if (systemInfo == null) {
    systemInfo = wx.getSystemInfoSync();
  }

  return systemInfo;
}

export function requestAnimationFrame(cb: () => void) {
  const systemInfo = getSystemInfoSync();
  if (systemInfo.platform === "devtools") {
    return setTimeout(() => {
      cb();
    }, 1000 / 30);
  }

  return wx
    .createSelectorQuery()
    .selectViewport()
    .boundingClientRect()
    .exec(() => {
      cb();
    });
}

export function getContext(selector: any) {
  const pages = getCurrentPages();
  const ctx = pages[pages.length - 1];

  const componentCtx = ctx.selectComponent(selector);

  if (!componentCtx) {
    console.warn("无法找到对应的组件，请按文档说明使用组件");
    return null;
  }
  return componentCtx;
}
