const assert = require('assert')

describe('Sum', () => {
    it('2+2 should be 4', () => {
        const sum = 2 + 2
        const expected = 4

        assert.strictEqual(sum, expected)
    })


    it('1+3 should be 4', () => {
        const sum = 1 + 3
        const expected = 4

        assert.strictEqual(sum, expected)
    })

    it('1+1 should be 2', () => {
        const sum = 1 + 1
        const expected = 2

        assert.strictEqual(sum, expected)
    })
})