import path from 'path'
import simulate from 'miniprogram-simulate'

describe('badge', () => {
    let id

    beforeAll(() => {
        id = simulate.load(path.resolve(__dirname, '../badge'), { less: true })
    })

    test('should match snapshot', () => {
        const comp = simulate.render(id, {})
        comp.attach(document.createElement('parent-wrapper'))

        expect(comp.toJSON()).toMatchSnapshot()
    })
})
