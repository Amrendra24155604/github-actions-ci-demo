const { add, subtract, multiply } = require('./calculator');

test('addition works correctly', () => {
expect(add(2, 3)).toBe(5);
});

test('subtraction works correctly', () => {
expect(subtract(5, 3)).toBe(2);
});

test('multiplication works correctly', () => {
expect(multiply(4, 3)).toBe(12);
});
