import { handleResults } from './result-handlers.js';

test('If results are correct using Mifflin BMR formula', () => {
  expect(handleResults({
    weight: '61',
    height: '179',
    age: '20',
    gender: 'm',
    BMRFormula: 'mifflinStJeorBMR',
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
    TDEE: [
      { activity: 'Sedentary', kcal: 1961 },
      { activity: 'Light', kcal: 2246 },
      { activity: 'Moderate', kcal: 2533 },
      { activity: 'Heavy', kcal: 2819 },
      { activity: 'Extreme', kcal: 3105 },
    ],
    macros: {
      loss: { protein: 248, carb: 248, fat: 55 },
      maintenance: { protein: 233, carb: 311, fat: 104 },
      gain: { protein: 270, carb: 361, fat: 120 }
    },
    activity: 'Extreme',
  })
})
test('if results are correct using Katch-McArdle BMR formula', () => {
  expect(handleResults({
    weight: '61',
    height: '179',
    age: '20',
    gender: 'm',
    BMRFormula: 'katchMcArdleBMR',
    LBM: 'boerLBM',
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
    TDEE: [
      { activity: 'Sedentary', kcal: 1829 },
      { activity: 'Light', kcal: 2095 },
      { activity: 'Moderate', kcal: 2362 },
      { activity: 'Heavy', kcal: 2629 },
      { activity: 'Extreme', kcal: 2896 }
    ],
    macros: {
      loss: { protein: 146, carb: 146, fat: 33 },
      maintenance: { protein: 137, carb: 183, fat: 61 },
      gain: { protein: 175, carb: 233, fat: 78 }
    },
    activity: 'Sedentary'
  })
})
