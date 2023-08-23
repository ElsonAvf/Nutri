const cmToInch = heightInCm => heightInCm / 2.54
const cmToMeter = heightInCm => heightInCm / 100

class Fit {
  // Body Mass Index
  BMI(weight, height) {
    return parseFloat((weight / (cmToMeter(height) ** 2)).toFixed(1))
  }
  // Lean Body Mass
  //Boer formula LMB
  boerLBM(weight, height, gender) {
    if(gender === 'm') {
      return (0.407 * weight) + (0.267 * height) - 19.2
    } else if(gender === 'f') {
      return (0.252 * weight) + (0.473 * height) - 48.3
    }
  }
  // Hume formula LMB
  humeLBM(weight, height, gender) {
    if(gender === 'm') {
      return (0.32810 * weight) + (0.33929 * height) - 29.5336
    } else if(gender === 'f') {
      return (0.29569 * weight) + (0.41813 * height) - 43.2933
    }
  }
  // James formula LMB
  jamesLBM(weight, height, gender) {
    if(gender === 'm') {
      return 1.1 * weight - 128 * (weight / height) ** 2
    } else if(gender === 'f') {
      return 1.07 * weight - 148 * (weight / height) ** 2
    }
  }
  // Basal Metabolic Rate
  // Harris Benedict BMR formula (1919)
  originalHarrisBenedictBMR(weight, height, age, gender) {
    if(gender === 'm') {
      return Math.round(66.5 + 13.7516 * weight + 5.0033 * height - 6.7550 * age)
    } else if(gender === 'f') {
      return Math.round(655.1 + 9.56 * weight + 1.85 * height - 4.676 * age)
    }
  }
  // Harris Benedict BMR formula revised by Rozan and Shizgan (1984)
  revisedHarrisBenedictBMR(weight, height, age, gender) {
    if(gender === 'm') {
      return Math.round(88.362 + 13.397 * weight + 4.799 * height - 5.667 * age)
    } else if(gender === 'f') {
      return Math.round(447.593 + 9.247 * weight + 3.098 * height - 4.330 * age)
    }
  }
  // Miffin-St Jeor BMR formula (1990)
  mifflinStJeorBMR(weight, height, age, gender) {
    if(gender === 'm') {
      return Math.round(10 * weight + 6.25 * height - 5 * age + 5)
    } else if(gender === 'f') {
      return Math.round(10 * weight + 6.25 * height - 5 * age - 161)
    }
  }
  // Katch-McArdle BMR formula (2001)
  katchMcArdleBMR(LBM) {
    return Math.round(370 + (21.6 * LBM))
  }
  // Schofield BMR formula (1985)
  schofieldBMR(weight, age, gender) {
    if(gender === 'm') {
      if(age > 17 && age < 30) {
        return Math.round(15.057 * weight + 692.2);
      } else if(age > 29 && age <= 59) {
        return Math.round(11.472 * weight + 873.1);
      } else if(age >= 60) {
        return Math.round(11.711 * weight + 587.7);
      };
    } else if(gender === 'f') {
      if(age > 17 && age < 30) {
        return Math.round(14.818 * weight + 486.6);
      } else if(age > 29 && age < 59) {
        return Math.round(8.126 * weight + 845.6);
      } else if(age >= 60) {
        return Math.round(9.082 * weight + 658.5);
      };
    };
  };
  // Total Daily Energy Expenditure
  TDEE(BMR) {
    return {
      sedentary: Math.round(1.2 * BMR),
      light: Math.round(1.3745 * BMR),
      moderate: Math.round(1.55 * BMR),
      heavy: Math.round(1.725 * BMR),
      extreme: Math.round(1.9 * BMR),
    }

  }
  // Ideal Body Weight
  IBW(height, gender) {
    return [
      { name: 'Peterson', result: this.petersonIBW(height) },
      { name: 'Robinson', result: this.robinsonIBW(height, gender) },
      { name: 'Devine', result: this.devineIBW(height, gender) },
      { name: 'Miller', result: this.millerIBW(height, gender) },
      { name: 'Hamwi', result: this.hamwiIBW(height, gender) },
      { name: 'Broca', result: this.brocaIBW(height, gender) },
      { name: 'Lemmens', result: this.lemmensIBW(height) },
      { name: 'BMI', result: this.BMIRangeIBW(height) }
    ]
  }
  // Peterson formula for IBW
  petersonIBW(height) {
    // Chosen BMI target 22 as it is uses in many calculators
    return Math.round(2.2 * 22 + 3.5 * 22 * ((cmToMeter(height)) - 1.5))
  }
  // Devine formula for IBW
  devineIBW(height, gender) {
    if(gender === 'm') {
      return Math.round(50 + 2.3 * (cmToInch(height) - 60))
    } else if(gender === 'f') {
      return Math.round(45.5 + 2.3 * (cmToInch(height) - 60))
    }
  }
  //Robinson formula for IBW
  robinsonIBW(height, gender) {
    if(gender === 'm') {
      return Math.round(52 + 1.9 * (cmToInch(height) - 60))
    } else if(gender === 'f') {
      return Math.round(49 + 1.7 * (cmToInch(height) - 60))
    }
  }
  // Miller formula for IBW
  millerIBW(height, gender) {
    if(gender === 'm') {
      return Math.round(56.2 + 1.41 * (cmToInch(height) - 60))
    } else if(gender === 'f') {
      return Math.round(53.1 + 1.36 * (cmToInch(height) - 60))
    }
  }
  // Hamwi formula for IBW
  hamwiIBW(height, gender) {
    if(gender === 'm') {
      return Math.round(48 + 2.7 * (cmToInch(height) - 60))
    } else if(gender === 'f') {
      return Math.round((45 + 2.2 * (cmToInch(height) - 60)))
    }
  }
  brocaIBW(height, gender) {
    if(gender === 'm') {
      return Math.round((height - 100) - ((height - 100) * 0.1))
    } else if(gender === 'f') {
      return Math.round((height - 100) - ((height - 100) * 0.15))
    }
  }
  lemmensIBW(height) {
    // Ideal BMI = 22
    return Math.round(22 * ((cmToMeter(height)) ** 2))
  }
  BMIRangeIBW(height) {
    return {
      min: Math.round(18.5 * (cmToMeter(height) ** 2)),
      max: Math.round(24.9 * (cmToMeter(height) ** 2))
    }
  }
}

const fit = new Fit()

export default fit