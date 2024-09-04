const {addition, subtraction, multiplication, division} = require('../math')

test('adds a + b to equal exactly the value a + b', () => {
    expect(addition(1,2)).toBe(3)
})