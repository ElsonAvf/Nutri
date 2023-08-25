import BMR from './BMR';
import LBM from './../LBM/LBM';

const lbmMale = new LBM(179, 61, 'm')
const lbmFemale = new LBM(165, 59, 'f')

const maleUserInfo = {
  height: 179,
  weight: 61,
  age: 20,
  gender: 'm',
  LBM: lbmMale.boer(),
}

const femaleUserInfo = {
  height: 165,
  weight: 59,
  age: 20,
  gender: 'f',
  LBM: lbmFemale.boer(),
}

describe('Correct BMR', () => {
  const bmrMale = new BMR(maleUserInfo);
  const bmrFemale = new BMR(femaleUserInfo);

  test('Correct BMR male && female using the original Harris Benedict formula', () => {
    expect(bmrMale.originalHarrisBenedict()).toBe(1666)
    expect(bmrFemale.originalHarrisBenedict()).toBe(1431)
  })

  test('Correct BMR male && female using the revised Harris Benedict formula', () => {
    expect(bmrMale.revisedHarrisBenedict()).toBe(1651)
    expect(bmrFemale.revisedHarrisBenedict()).toBe(1418)
  })

  test('Correct BMR male && female using Mifflin formula', () => {
    expect(bmrMale.mifflinStJeor()).toBe(1634)
    expect(bmrFemale.mifflinStJeor()).toBe(1360)
  })

  test('Correct BMR male && female using Katch-McArdle formula && boer LBM', () => {
    expect(bmrMale.katchMcArdle()).toBe(1524)
    expect(bmrFemale.katchMcArdle()).toBe(1334)
  })

  describe('Correct BMR using Schofield formula', () => {
    it('Should be correct for male && female at age range of 18-29', () => {
      expect(bmrMale.schofield()).toBe(1611)
      expect(bmrFemale.schofield()).toBe(1361)
    })
    it('Should be correct for male && female at age range of 30-59', () => {
      bmrMale.age = 30;
      bmrFemale.age = 30;
      expect(bmrMale.schofield()).toBe(1573)
      expect(bmrFemale.schofield()).toBe(1325)
    })
    it('Should be correct for male && female at age range of 60+', () => {
      bmrMale.age = 60;
      bmrFemale.age = 60
      expect(bmrMale.schofield()).toBe(1302)
      expect(bmrFemale.schofield()).toBe(1194)
    })
  })
});