import caesarCipher from './caesarCipher';
test('caesarCipher', () => {
  expect(caesarCipher('test', 0)).toMatch(/test/);
  expect(caesarCipher('test', 1)).toMatch(/uftu/);
  expect(caesarCipher('test', 5)).toMatch(/yjxy/);
  expect(caesarCipher('test test', 5)).toMatch(/yjxy yjxy/);
  expect(caesarCipher('test  test  test ', 5)).toMatch(/yjxy  yjxy  yjxy /);
  expect(caesarCipher('test', 30)).toMatch(/Shift must be less than 25 and more than 0/);
  expect(caesarCipher('test', -1)).toMatch(/Shift must be less than 25 and more than 0/);
});
