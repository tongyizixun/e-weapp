/*
 * @Author: 刘利军
 * @Date: 2021-12-20 15:01:10
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-12-20 15:07:42
 * @Description:
 * @PageName:
 */
import path from "path";
import simulate from "miniprogram-simulate";

describe("input", () => {
  let id;

  beforeAll(() => {
    id = simulate.load(path.resolve(__dirname, "../input"), { less: true });
  });

  test("should match snapshot", () => {
    const comp = simulate.render(id, {});
    comp.attach(document.createElement("parent-wrapper"));

    expect(comp.toJSON()).toMatchSnapshot();
  });
});
