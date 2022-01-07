/*
 * @Author: 刘利军
 * @Date: 2021-12-30 13:03:11
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-12-31 15:33:18
 * @Description:
 * @PageName:
 */

import { getContext } from "../common/utils";
import { isObj } from "../common/validator";

type ToastMessage = string | number;

interface ToastOptions {
  show?: boolean;
  type?: string;
  zIndex?: number;
  message?: string;
  duration?: number;
  selector?: string;
}

const defaultOptions = {
  show: true,
  message: "",
  duration: 2,
  zIndex: 2,
  type: "text", // text|| success || fail || loading
  selector: "#e-toast",
};

let queue: WechatMiniprogram.Component.TrivialInstance[] = [];
let currentOptions: ToastOptions = { ...defaultOptions };

Component({
  externalClasses: ["e-class"],
  properties: {
    show: Boolean,
    mask: Boolean,
    message: String,
    zIndex: {
      type: Number,
      value: 2,
    },
    type: {
      type: String,
      value: "text",
    },
  },
  data: { ...defaultOptions },
});

// API 调用方式
function parseOptions(message): ToastOptions {
  return isObj(message) ? message : { message };
}

function Toast(toastOptions: ToastOptions | ToastMessage) {
  const options = {
    ...defaultOptions,
    ...parseOptions(toastOptions),
  } as ToastOptions;
  const toast = getContext(options.selector as string);
  if (!toast) {
    return;
  }

  delete options.selector;

  toast.clear = () => {
    toast.setData({ show: false });
  };

  queue.push(toast);
  toast.setData(options);
  clearTimeout(toast.timer);

  if (options.duration != null && options.duration > 0) {
    toast.timer = setTimeout(() => {
      toast.clear();
      queue = queue.filter((item) => item !== toast);
    }, options.duration);
  }

  return toast;
}

const createMethod = (type: string) => (options: ToastOptions | ToastMessage) =>
  Toast({
    type,
    ...parseOptions(options),
  });

Toast.loading = createMethod("loading");
Toast.success = createMethod("success");
Toast.fail = createMethod("fail");

Toast.clear = () => {
  queue.forEach((toast) => {
    toast.clear();
  });
  queue = [];
};

Toast.setDefaultOptions = (options: ToastOptions) => {
  Object.assign(currentOptions, options);
};

Toast.resetDefaultOptions = () => {
  currentOptions = { ...defaultOptions };
};

export { Toast };
