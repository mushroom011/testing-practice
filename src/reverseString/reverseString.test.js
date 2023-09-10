import reverseString from './reverseString';
test('reverseString', () => {
  expect(reverseString('Test')).toMatch(/tseT/);
});