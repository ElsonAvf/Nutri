import Fit from './fit_calc.js';

const convertInputs = inputs => {
  return {
    weight: parseFloat(inputs.weight),
    height: parseInt(inputs.height),
    age: parseInt(inputs.age),
    gender: inputs.gender,
    BMRFormula: inputs.BMRFormula,
    LBM: (isNaN(parseFloat(inputs.LBM))) ? inputs.LBM : parseFloat(inputs.LBM),
    activity: inputs.activity
  }
}

const getBMR = (BMRFormula, weight, height, age, gender, LBM) => {
  let BMR;
  if(BMRFormula === 'katchMcArdleBMR') {
    BMR = Fit[BMRFormula](
      (isNaN(parseFloat(LBM))) ? Fit[LBM](weight, height, gender) : LBM
    )
  } else if(BMRFormula === 'schofieldBMR') {
    BMR = Fit[BMRFormula](weight, age, gender)
  } else {
    BMR = Fit[BMRFormula](weight, height, age, gender)
  }
  return BMR
}

const getActivity = (TDEE, activity) => {
  for(const result of TDEE) {
    if(result.activity === activity) return result.kcal
  }
}

const handleResults = inputs => {
  const {
    weight,
    height,
    age,
    gender,
    BMRFormula,
    LBM,
    activity
  } = convertInputs(inputs);

  const BMR = getBMR(BMRFormula, weight, height, age, gender, LBM)
  const TDEE = Fit.TDEE(BMR)

  const results = {
    BMI: Fit.BMI(weight, height),
    BMR,
    TDEE,
    IBW: Fit.IBW(height, gender),
    macros: Fit.macros(getActivity(TDEE, activity)),
    activity
  }
  return results
}

export { handleResults }