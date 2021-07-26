import React from 'react';
import renderer from 'react-test-renderer';
import sum from '../sum';

test('adds 1+2 should be equal to 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 3+5 should be equal to 8', () => {
  expect(sum(3, 5)).toBe(8);
});
