/*
 * @Author: 刘利军
 * @Date: 2021-12-20 15:01:10
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-12-20 15:07:54
 * @Description:
 * @PageName:
 */
import path from "path";
import simulate from "miniprogram-simulate";

describe("collapse-item", () => {
  let id;

  beforeAll(() => {
    id = simulate.load(path.resolve(__dirname, "../collapse-item"), { less: true });
  });

  test("should match snapshot", () => {
    const comp = simulate.render(id, {});
    comp.attach(document.createElement("parent-wrapper"));

    expect(comp.toJSON()).toMatchSnapshot();
  });
});
