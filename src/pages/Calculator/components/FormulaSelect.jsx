import { useFormContext } from 'react-hook-form';

export default function FormulaSelect({ formula, setFormula }) {
  const { register } = useFormContext();
  return (
    <label>
      Fórmula de TMB
      <select
        className='w-full action text-xs text-center'
        {...register('BMRFormula')}
      >
        <option value='originalHarrisBenedict'>
          Harris Benedict (1919)
        </option>
        <option value='revisedHarrisBenedict'>
          Harris Benedict revisado por Rozan e Shizgan (1984)
        </option>
        <option value='mifflinStJeor' >
          Mifflin-St Jeor (1990)
        </option>
        <option value='katchMcArdle'>
          Katch-McArdle (2001)
        </option>
        <option value='schofield'>
          Schofield (1985)
        </option>
      </select>
    </label>
  );
};