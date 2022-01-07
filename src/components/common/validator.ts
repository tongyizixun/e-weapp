/*
 * @Author: 刘利军
 * @Date: 2021-12-31 14:34:36
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-12-31 14:34:36
 * @Description:
 * @PageName:
 */

export function isFunction(val: unknown): val is Function {
  return typeof val === "function";
}

export function isObj(x: unknown): x is Record<string, unknown> {
  const type = typeof x;
  return x !== null && (type === "object" || type === "function");
}

export function isNumber(value: string) {
  return /^\d+(\.\d+)?$/.test(value);
}

export function isBoolean(value: unknown): value is boolean {
  return typeof value === "boolean";
}
