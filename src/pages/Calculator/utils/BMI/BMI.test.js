import BMI from './BMI';

test('Correct BMI', () => {
  const userInfo1 = { height: 179, weight: 61 }
  const userInfo2 = { height: 180, weight: 65 }
  
  expect(BMI(userInfo1)).toBeCloseTo(19.0)
  expect(BMI(userInfo2)).toBeCloseTo(20.1)
});