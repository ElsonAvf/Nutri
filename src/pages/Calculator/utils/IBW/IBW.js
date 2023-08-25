import { cmToMeter, cmToInch } from './../converters.js'

// Ideal Body Weight
export default class IBW {
  constructor(userInfo) {
    this.height = userInfo.height;
    this.gender = userInfo.gender;
  }
  results() {
    return [
      { name: 'Peterson', result: this.petersonIBW() },
      { name: 'Robinson', result: this.robinsonIBW() },
      { name: 'Devine', result: this.devineIBW() },
      { name: 'Miller', result: this.millerIBW() },
      { name: 'Hamwi', result: this.hamwiIBW() },
      { name: 'Broca', result: this.brocaIBW() },
      { name: 'Lemmens', result: this.lemmensIBW() },
      { name: 'BMI', result: this.BMIRangeIBW() }
    ]
  }
  // Peterson formula for IBW
  petersonIBW() {
    // Chosen BMI target 22 as it is uses in many calculators
    return Math.round(2.2 * 22 + 3.5 * 22 * ((cmToMeter(this.height)) - 1.5))
  }
  // Devine formula for IBW
  devineIBW() {
    if(this.gender === 'm') {
      return Math.round(50 + 2.3 * (cmToInch(this.height) - 60))
    } else if(this.gender === 'f') {
      return Math.round(45.5 + 2.3 * (cmToInch(this.height) - 60))
    }
  }
  //Robinson formula for IBW
  robinsonIBW() {
    if(this.gender === 'm') {
      return Math.round(52 + 1.9 * (cmToInch(this.height) - 60))
    } else if(this.gender === 'f') {
      return Math.round(49 + 1.7 * (cmToInch(this.height) - 60))
    }
  }
  // Miller formula for IBW
  millerIBW() {
    if(this.gender === 'm') {
      return Math.round(56.2 + 1.41 * (cmToInch(this.height) - 60))
    } else if(this.gender === 'f') {
      return Math.round(53.1 + 1.36 * (cmToInch(this.height) - 60))
    }
  }
  // Hamwi formula for IBW
  hamwiIBW() {
    if(this.gender === 'm') {
      return Math.round(48 + 2.7 * (cmToInch(this.height) - 60))
    } else if(this.gender === 'f') {
      return Math.round((45 + 2.2 * (cmToInch(this.height) - 60)))
    }
  }
  brocaIBW() {
    if(this.gender === 'm') {
      return Math.round((this.height - 100) - ((this.height - 100) * 0.1))
    } else if(this.gender === 'f') {
      return Math.round((this.height - 100) - ((this.height - 100) * 0.15))
    }
  }
  lemmensIBW() {
    // Ideal BMI = 22
    return Math.round(22 * ((cmToMeter(this.height)) ** 2))
  }
  BMIRangeIBW() {
    return {
      min: Math.round(18.5 * (cmToMeter(this.height) ** 2)),
      max: Math.round(24.9 * (cmToMeter(this.height) ** 2))
    }
  }
};