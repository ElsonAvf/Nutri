// Total Daily Energy Expenditure
export default function TDEE(BMR) {
  return {
    sedentary: Math.round(1.2 * BMR),
    light: Math.round(1.3745 * BMR),
    moderate: Math.round(1.55 * BMR),
    heavy: Math.round(1.725 * BMR),
    extreme: Math.round(1.9 * BMR),
  }
};