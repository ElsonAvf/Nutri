import { cmToMeter } from './../converters.js';

// Body Mass Index
export default function BMI(userInfo) {
  return parseFloat((userInfo.weight / (cmToMeter(userInfo.height) ** 2)).toFixed(1))
};