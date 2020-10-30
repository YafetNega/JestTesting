
const sum = require('./sketch');
const { test, expect } = require('@jest/globals');

test('add 1 + 2 equals 3', () => {
    expect(sum(1, 2)).toBe(3);
});