import IBW from './IBW';

describe('Correct IBW', () => {
  const maleUserInfo = { height: 179, gender: 'm' }
  const femaleUserInfo = { height: 165, gender: 'f' }
  
  const ibwMale = new IBW(maleUserInfo);
  const ibwFemale = new IBW(femaleUserInfo);
  
  it('Should be correct for male', () => {
    expect(ibwMale.results()).toEqual([
      { name: 'Peterson', result: 71 },
      { name: 'Robinson', result: 72 },
      { name: 'Devine', result: 74 },
      { name: 'Miller', result: 71 },
      { name: 'Hamwi', result: 76 },
      { name: 'Broca', result: 71 },
      { name: 'Lemmens', result: 70 },
      { name: 'BMI', result: { min: 59, max: 80 } }
    ])
  })
  
  it('Should be correct for female', () => {
    expect(ibwFemale.results()).toEqual([
      { name: 'Peterson', result: 60 },
      { name: 'Robinson', result: 57 },
      { name: 'Devine', result: 57 },
      { name: 'Miller', result: 60 },
      { name: 'Hamwi', result: 56 },
      { name: 'Broca', result: 55 },
      { name: 'Lemmens', result: 60 },
      { name: 'BMI', result: { min: 50, max: 68 } }
    ])
  })
});