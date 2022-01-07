/*
 * @Author: 刘利军
 * @Date: 2021-12-30 13:03:27
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-12-30 13:03:28
 * @Description:
 * @PageName:
 */

import path from "path";
import simulate from "miniprogram-simulate";

describe("toast", () => {
  let id;
  beforeAll(() => {
    id = simulate.load(path.resolve(__dirname, "../toast"), {
      less: true,
    });
  });

  test("should match snapshot", () => {
    const comp = simulate.render(id, {});
    comp.attach(document.createElement("parent-wrapper"));

    expect(comp.toJSON()).toMatchSnapshot();
  });
});
