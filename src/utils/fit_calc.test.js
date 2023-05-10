import Fit from './fit_calc.js'

test('Correct BMI', () => {
  expect(Fit.BMI(61, 179)).toBeCloseTo(19.0)
  expect(Fit.BMI(65, 180)).toBeCloseTo(20.1)
})

describe('Lean Body Mass', () => {
  test('if Boer function for male && female is correct', () => {
    expect(Fit.boerLBM(61, 179, 'm')).toBeCloseTo(53.42)
    expect(Fit.boerLBM(59, 165, 'f')).toBeCloseTo(44.613)
  })
  test('if Hume function for male && female is correct', () => {
    expect(Fit.humeLBM(61, 179, 'm')).toBeCloseTo(51.213)
    expect(Fit.humeLBM(59, 165, 'f')).toBeCloseTo(43.144)
  })
  test('if James function for male && female is correct', () => {
    expect(Fit.jamesLBM(61, 179, 'm')).toBeCloseTo(52.235)
    expect(Fit.jamesLBM(59, 165, 'f')).toBeCloseTo(44.207)
  })
})

test('Correct BMR male && female using the original Harris Benedict formula', () => {
  expect(Fit.originalHarrisBenedictBMR(61, 179, 20, 'm')).toBe(1666)
  expect(Fit.originalHarrisBenedictBMR(59, 165, 20, 'f')).toBe(1431)
})

test('Correct BMR male && female using the revised Harris Benedict formula', () => {
  expect(Fit.revisedHarrisBenedictBMR(61, 179, 20, 'm')).toBe(1651)
  expect(Fit.revisedHarrisBenedictBMR(59, 165, 20, 'f')).toBe(1418)
})

test('Correct BMR male && female using Mifflin formula', () => {
  expect(Fit.mifflinStJeorBMR(61, 179, 20, 'm')).toBe(1634)
  expect(Fit.mifflinStJeorBMR(59, 165, 20, 'f')).toBe(1360)
})

test('Correct BMR male && female using Katch-McArdle formula && boer LBM', () => {
  expect(Fit.katchMcArdleBMR(Fit.boerLBM(61, 179, 'm'))).toBe(1524)
  expect(Fit.katchMcArdleBMR(Fit.boerLBM(59, 165, 'f'))).toBe(1334)
})

describe('Correct BMR using Schofield formula', () => {
  it('Should be correct for male && female at age range 18-29', () => {
    expect(Fit.schofieldBMR(61, 20,'m')).toBe(1611)
    expect(Fit.schofieldBMR(59, 20,'f')).toBe(1361)
  })
  it('Should be correct for male && female at age range 30-59', () => {
    expect(Fit.schofieldBMR(61, 30,'m')).toBe(1573)
    expect(Fit.schofieldBMR(59, 30,'f')).toBe(1325)
  })
  it('Should be correct for male && female at age 60+', () => {
    expect(Fit.schofieldBMR(61, 60,'m')).toBe(1302)
    expect(Fit.schofieldBMR(59, 60,'f')).toBe(1194)
  })
})

describe('Correct TDEE using Mifflin BMR formula && Boer LBM', () => {
  it('Should be correct for male', () => {
    expect(Fit.TDEE(Fit.mifflinStJeorBMR(61, 179, 20, 'm'))).toEqual([
      {activity: 'Sedentary', kcal: 1961},
      {activity: 'Light', kcal: 2246},
      {activity: 'Moderate', kcal: 2533},
      {activity: 'Heavy', kcal: 2819},
      {activity: 'Extreme', kcal: 3105},
    ])
  })
  it('Should be correct for female', () => {
    expect(Fit.TDEE(Fit.mifflinStJeorBMR(59, 165, 20, 'f'))).toEqual([
      {activity: 'Sedentary', kcal: 1632},
      {activity: 'Light', kcal: 1869},
      {activity: 'Moderate', kcal: 2108},
      {activity: 'Heavy', kcal: 2346},
      {activity: 'Extreme', kcal: 2584}
  ])
})
})
describe('Correct TDEE using Katch-McArdle BMR formula && Boer LBM', () => {
  it('Should be correct for male', () => {
    expect(Fit.TDEE(Fit.katchMcArdleBMR(Fit.boerLBM(61, 179, 'm')))).toEqual([
      {activity: 'Sedentary', kcal: 1829},
      {activity: 'Light', kcal: 2095},
      {activity: 'Moderate', kcal: 2362},
      {activity: 'Heavy', kcal: 2629},
      {activity: 'Extreme', kcal: 2896},
    ])
  })
  it('Should be correct for female', () => {
    expect(Fit.TDEE(Fit.katchMcArdleBMR(Fit.boerLBM(59, 165, 'f')))).toEqual([
      {activity: 'Sedentary', kcal: 1601},
      {activity: 'Light', kcal: 1834},
      {activity: 'Moderate', kcal: 2068},
      {activity: 'Heavy', kcal: 2301},
      {activity: 'Extreme', kcal: 2535}
  ])
})
})

test('Correct IBW for male', () => {
  expect(Fit.IBW(179, 'm')).toEqual([
    {name: 'Peterson', result: 71},
    {name: 'Robinson', result: 72},
    {name: 'Devine', result: 74},
    {name: 'Miller', result: 71},
    {name: 'Hamwi', result: 76},
    {name: 'Broca', result: 71},
    {name: 'Lemmens', result: 70},
    {name: 'BMI', result: { min: 59, max: 80 }}
  ])
})
test('Correct IBW for female', () => {
  expect(Fit.IBW(165, 'f')).toEqual([
    {name: 'Peterson', result: 60},
    {name: 'Robinson', result: 57},
    {name: 'Devine', result: 57},
    {name: 'Miller', result: 60},
    {name: 'Hamwi', result: 56},
    {name: 'Broca', result: 55},
    {name: 'Lemmens', result: 60},
    {name: 'BMI', result: { min: 50, max: 68 }}
  ])
})