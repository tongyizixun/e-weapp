/*
 * @Author: 刘利军
 * @Date: 2021-12-20 15:01:10
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-12-20 16:51:08
 * @Description:
 * @PageName:
 */
import path from "path";
import simulate from "miniprogram-simulate";

describe("icon", () => {
  let id;

  beforeAll(() => {
    id = simulate.load(path.resolve(__dirname, "../icon"), { less: true });
  });

  test("should match snapshot", () => {
    const comp = simulate.render(id, {});
    comp.attach(document.createElement("parent-wrapper"));

    expect(comp.toJSON()).toMatchSnapshot();
  });
});
