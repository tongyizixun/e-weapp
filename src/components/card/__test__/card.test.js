/*
 * @Author: 刘利军
 * @Date: 2021-12-20 15:01:07
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-12-20 15:02:02
 * @Description:
 * @PageName:
 */
import path from "path";
import simulate from "miniprogram-simulate";

describe("card", () => {
  let id;

  beforeAll(() => {
    id = simulate.load(path.resolve(__dirname, "../card"), { less: true });
  });

  test("should match snapshot", () => {
    const comp = simulate.render(id, {});
    comp.attach(document.createElement("parent-wrapper"));

    expect(comp.toJSON()).toMatchSnapshot();
  });
});
