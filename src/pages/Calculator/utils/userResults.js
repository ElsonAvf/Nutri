import BMI from './BMI/BMI';
import BMR from './BMR/BMR';
import TDEE from './TDEE/TDEE';
import IBW from './IBW/IBW';
import LBM from './LBM/LBM';

export const getUserResults = userInfo => {
  const info = { ...userInfo } // Prevent mutation
  if(isNaN(info.LBM)) {
    const lbm = new LBM(info);
    info.LBM = lbm[info.LBM]();
    ;
  }
  const bmr = new BMR(info);
  const bmrResult = bmr[info.BMRFormula]();
  const ibw = new IBW(info);

  return {
    BMI: BMI(info),
    BMR: bmrResult,
    TDEE: TDEE(bmrResult),
    IBW: ibw.results(),
    activity: info.activity
  };
};