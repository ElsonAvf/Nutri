import { useFormContext } from 'react-hook-form';

export default function LBM() {
  const { register, setValue, formState: { errors } } = useFormContext();

  return (
    <fieldset className='mt-4'>
      <legend className=''>LBM - Massa Corporal Magra</legend>
      <label>
        <span className='text-sm'>Fórmula</span>
        <select
          className='action block'
          {...register('LBM', {
            required: 'LBM é obrigatório'
          })}
        >
          <option value='boer'>Boer</option>
          <option value='hume'>Hume</option>
          <option value='james'>James</option>
        </select>
      </label>
    </fieldset>
  );
};