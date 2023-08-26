import { useFormContext } from 'react-hook-form';

export default function ActivitySelect({ }) {
  const { register } = useFormContext();
  return (
    <label className='flex flex-col'>
      Atividade
      <select
        className='action text-xs text-center'
        {...register('activity')}
      >
        <option value='Sedentary'>
          Sedentário - Pouco ou nenhum exercício
        </option>
        <option value='Light'>
          Levemente ativo - exercício 1 - 2 vezes por semana
        </option>
        <option value='Moderate' >
          Moderadamente ativo - exercício 2 - 3 vezes por semana
        </option>
        <option value='Very'>
          Muito ativo - exercício 4 - 5 vezes por semana
        </option>
        <option value='Extreme'>
          Extremamente ativo - exercício 6 - 7 vezes por semana
        </option>
      </select>
    </label>
  );
};