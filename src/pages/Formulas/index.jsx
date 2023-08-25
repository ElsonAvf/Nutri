import BMI from './components/BMI';
import BMR from './components/BMR';
import TDEE from './components/TDEE';
import IBW from './components/IBW'
import LBM from './components/LBM';

export default function Formulas() {
  return (
    <main className='flex flex-col items-center'>
      <h2 className='mb-10 font-bold text-xl'>Fórmulas e Referências</h2>
      <BMI />
      <BMR />
      <TDEE />
      <IBW />
      <LBM />
    </main>
  );
};