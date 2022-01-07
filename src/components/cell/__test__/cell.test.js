/*
 * @Author: 刘利军
 * @Date: 2021-12-19 16:54:29
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-12-19 17:01:28
 * @Description:
 * @PageName:
 */
import path from "path";
import simulate from "miniprogram-simulate";

describe("cell", () => {
  let id;

  beforeAll(() => {
    id = simulate.load(path.resolve(__dirname, "../cell"), { less: true });
  });

  test("should match snapshot", () => {
    const comp = simulate.render(id, {});
    comp.attach(document.createElement("parent-wrapper"));

    expect(comp.toJSON()).toMatchSnapshot();
  });
});
