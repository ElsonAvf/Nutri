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
  expect(Fit.miffinStJeorBMR(61, 179, 20, 'm')).toBe(1634)
  expect(Fit.miffinStJeorBMR(59, 165, 20, 'f')).toBe(1360)
})

test('Correct BMR male && female using the revised Harris Benedict formula', () => {
  expect(Fit.miffinStJeorBMR(61, 179, 20, 'm')).toBe(1634)
  expect(Fit.miffinStJeorBMR(59, 165, 20, 'f')).toBe(1360)
})

test('Correct BMR male && female using Miffin formula', () => {
  expect(Fit.miffinStJeorBMR(61, 179, 20, 'm')).toBe(1634)
  expect(Fit.miffinStJeorBMR(59, 165, 20, 'f')).toBe(1360)
})

test('Correct BMR male && female using Katch-McArdle formula', () => {
  expect(Fit.katchMcArdleBMR(61, 179,'m')).toBe(1524)
  expect(Fit.katchMcArdleBMR(59, 165,'f')).toBe(1334)
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

describe('Correct TDEE using Miffin BMR formula', () => {
  it('Should be correct for male', () => {
    expect(Fit.TDEE(Fit.miffinStJeorBMR(61, 179, 20, 'm'))).toEqual({
      sedentary: 1961,
      light: 2246,
      moderate: 2533,
      heavy: 2819,
      extremely: 3105,
    })
  })
  it('Should be correct for female', () => {
    expect(Fit.TDEE(Fit.miffinStJeorBMR(59, 165, 20, 'f'))).toEqual({
      sedentary: 1632,
      light: 1869,
      moderate: 2108,
      heavy: 2346,
      extremely: 2584
  })
})
})

test('Correct IBW for male', () => {
  expect(Fit.IBW(179, 'm')).toEqual({
    peterson: 71,
    devine: 74,
    robinson: 72,
    miller: 71,
    hamwi: 76,
    broca: 71,
    lemmens: 70,
    bmi: { min: 59, max: 80 }
  })
})

test('Correct IBW for female', () => {
  expect(Fit.IBW(165, 'f')).toEqual({
    peterson: 60,
    devine: 57,
    robinson: 57,
    miller: 60,
    hamwi: 56,
    broca: 55,
    lemmens: 60,
    bmi: { min: 50, max: 68 }
  })
})