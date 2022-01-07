/*
 * @Author: 刘利军
 * @Date: 2021-12-19 16:54:30
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-12-19 17:01:19
 * @Description: 
 * @PageName: 
 */
import path from 'path'
import simulate from 'miniprogram-simulate'

describe('cells', () => {
    let id

    beforeAll(() => {
        id = simulate.load(path.resolve(__dirname, '../cells'), { less: true })
    })

    test('should match snapshot', () => {
        const comp = simulate.render(id, {})
        comp.attach(document.createElement('parent-wrapper'))

        expect(comp.toJSON()).toMatchSnapshot()
    })
})
