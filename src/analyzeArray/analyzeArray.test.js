import analyzeArray from './analyzeArray';

test('analyzeArray', () => {
  expect(analyzeArray([1,8,3,4,2,6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });

  const analyzeObject = analyzeArray([1,10,3,4,2,60,0]);

  expect(analyzeObject.average).toBeCloseTo(11.428);
  expect(analyzeObject.min).toBe(0);
  expect(analyzeObject.max).toBe(60);
  expect(analyzeObject.length).toBe(7);

});
