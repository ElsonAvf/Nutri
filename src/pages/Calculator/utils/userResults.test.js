import { getUserResults } from './userResults.js';

test('If results are correct using Mifflin BMR formula', () => {
  expect(getUserResults({
    weight: 61,
    height: 179,
    age: 20,
    gender: 'm',
    BMRFormula: 'mifflinStJeor',
    LBM: '',
    activity: 'Extreme',
  })).toEqual({
    BMI: 19.0,
    BMR: 1634,
    IBW: [
      { name: 'Peterson', result: 71 },
      { name: 'Robinson', result: 72 },
      { name: 'Devine', result: 74 },
      { name: 'Miller', result: 71 },
      { name: 'Hamwi', result: 76 },
      { name: 'Broca', result: 71 },
      { name: 'Lemmens', result: 70 },
      { name: 'BMI', result: { min: 59, max: 80 } }
    ],
    TDEE: {
      sedentary: 1961,
      light: 2246,
      moderate: 2533,
      heavy: 2819,
      extreme: 3105
    },
    activity: 'Extreme',
  })
})
test('if results are correct using Katch-McArdle BMR formula', () => {
  expect(getUserResults({
    weight: 61,
    height: 179,
    age: 20,
    gender: 'm',
    BMRFormula: 'katchMcArdle',
    LBM: 'boer',
    activity: 'Sedentary'
  })).toEqual({
    BMI: 19.0,
    BMR: 1524,
    IBW: [
      { name: 'Peterson', result: 71 },
      { name: 'Robinson', result: 72 },
      { name: 'Devine', result: 74 },
      { name: 'Miller', result: 71 },
      { name: 'Hamwi', result: 76 },
      { name: 'Broca', result: 71 },
      { name: 'Lemmens', result: 70 },
      { name: 'BMI', result: { min: 59, max: 80 } }
    ],
    TDEE: {
      sedentary: 1829,
      light: 2095,
      moderate: 2362,
      heavy: 2629,
      extreme: 2896
    },
    activity: 'Sedentary'
  })
})
