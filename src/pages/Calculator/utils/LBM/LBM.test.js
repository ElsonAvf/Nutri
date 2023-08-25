import LBM from './LBM';

describe('Lean Body Mass', () => {
  const maleUserInfo = { height: 179, weight: 61, gender: 'm' }
  const femaleUserInfo = { height: 165, weight: 59, gender: 'f' }
  
  const lbmMale = new LBM(maleUserInfo);
  const lbmFemale = new LBM(femaleUserInfo);
  
  test('if Boer function for male && female is correct', () => {
    expect(lbmMale.boer()).toBeCloseTo(53.42)
    expect(lbmFemale.boer()).toBeCloseTo(44.613)
  })
  
  test('if Hume function for male && female is correct', () => {
    expect(lbmMale.hume()).toBeCloseTo(51.213)
    expect(lbmFemale.hume()).toBeCloseTo(43.144)
  })
  
  test('if James function for male && female is correct', () => {
    expect(lbmMale.james()).toBeCloseTo(52.235)
    expect(lbmFemale.james()).toBeCloseTo(44.207)
  })
});