var lib = require('../lib')

describe('list.utils.node.lib', () => {
  it('has three functions', () => {
    const keys = Object.keys(lib)
    const actual = keys.length
    const expected = 3
    expect(actual).toEqual(expected)
    keys.forEach(k => {
      expect(typeof lib[k]).toEqual('function')
    })
  })
  describe('asNextIs()', () => {
    it('is a function of arity 1', () => {
      expect(lib.asNextIs.length).toEqual(1)
    })
    it('returns an object containing two functions', () => {
      const obj = lib.asNextIs(i => i)
      const keys = Object.keys(obj)
      const expected = ['take', 'startingFrom']
      expect(keys).toEqual(expected)
    })
  })
})
