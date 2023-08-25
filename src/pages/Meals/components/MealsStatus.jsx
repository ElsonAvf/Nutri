import { useEffect } from 'react';
import Macro from './Macro.jsx';
import { calculateTotals } from './../utils/calculateTotals.js';

export default function MealsStatus({ meals }) {
  const totals = calculateTotals(meals);
  return (
    <section className='mt-5 flex flex-col items-center justify-center mb-8 bg-[honeydew] p-4 rounded border border-solid border-neutral-400'>
      <h3 className='sr-only'>Informações nutricionais</h3>
      <div className='text-2xl font-extrabold'>{totals.kcal}Kcal</div>
      <section className='mt-5 flex gap-5'>
        <h4 className='sr-only'>Macros</h4>
        <Macro type='Proteína' className='bg-green-400 text-green-900' amount={totals.protein} />
        <Macro type='Carboidrato' className='bg-amber-400 text-amber-900' amount={totals.carb} />
        <Macro type='Gordura' className='bg-red-400 text-red-900' amount={totals.fat} />
      </section>
    </section>
  );
};