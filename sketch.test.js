
const {sum, prod, div, sub}  = require('./sketch');
const { test, expect } = require('@jest/globals');

test('add 1 + 2 equals 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('multiply 3 * 10 equals 30', () => {
    expect(prod(3, 10)).toBe(30);
});

test('divide 30 / 3 equals 10', () => {
    expect(div(30, 3)).toBe(10);
});

test('subtruction 30 - 10 equals 20', () => {
    expect(sub(30, 10)).toBe(20);
});