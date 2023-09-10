import calculator from './calculator';
test('calculator', () => {
  expect(calculator.add(1, 1)).toBe(2);
  expect(calculator.subtract(2, 1)).toBe(1);
  expect(calculator.divide(8, 2)).toBe(4);
  expect(calculator.multiply(2, 4)).toBe(8);

  //'float numbers'
  expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
  expect(calculator.subtract(0.3, 0.2)).toBeCloseTo(0.1);
  expect(calculator.divide(4.4, 2)).toBe(2.2);
  expect(calculator.multiply(2.2, 4)).toBe(8.8);
});
