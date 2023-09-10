import capitalize from './capitalize';
test('capitalize', () => {
  expect(capitalize('Test')).toMatch(/Test/);
});