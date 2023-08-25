import TDEE from './TDEE';
import BMR from './../BMR/BMR';
import LBM from './../LBM/LBM';

describe('Correct TDEE using Mifflin formula', () => {
  const bmrMale = new BMR(179, 61, 20, 'm')
  const bmrFemale = new BMR(165, 59, 20, 'f')
  it('Should be correct for male', () => {
    expect(TDEE(bmrMale.mifflinStJeor())).toEqual({
      sedentary: 1961,
      light: 2246,
      moderate: 2533,
      heavy: 2819,
      extreme: 3105
    })
  })
  it('Should be correct for female', () => {
    expect(TDEE(bmrFemale.mifflinStJeor())).toEqual({
      sedentary: 1632,
      light: 1869,
      moderate: 2108,
      heavy: 2346,
      extreme: 2584
    })
  })
})
describe('Correct TDEE using Katch-McArdle BMR formula && Boer LBM', () => {
  const lbmMale = new LBM(179, 61, 'm')
  const lbmFemale = new LBM(165, 59, 'f')
  const bmrMale = new BMR(179, 61, 20, 'm', lbmMale.boer())
  const bmrFemale = new BMR(165, 59, 20, 'f', lbmFemale.boer())
  it('Should be correct for male', () => {
    expect(TDEE(bmrMale.katchMcArdle())).toEqual({
      sedentary: 1829,
      light: 2095,
      moderate: 2362,
      heavy: 2629,
      extreme: 2896
    })
  })
  it('Should be correct for female', () => {
    expect(TDEE(bmrFemale.katchMcArdle())).toEqual({
      sedentary: 1601,
      light: 1834,
      moderate: 2068,
      heavy: 2301,
      extreme: 2535
    })
  })
});