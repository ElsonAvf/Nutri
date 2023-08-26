import { useFormContext } from 'react-hook-form';
import ErrorMessage from './ErrorMessage';

export default function WeightInput() {
  const { register, formState: { errors } } = useFormContext()
  return (
    <label className='flex justify-between'>
      <div>
        <div>
          Peso <span aria-hidden className='text-red-400'>*</span>
        </div>
        <input
          className='inline-block action w-14'
          type='number'
          placeholder='60'
          {
          ...register('weight', {
            required: 'O peso é obrigatório',
            min: { value: 15, message: 'O peso mínimo é de 15kg' },
            max: { value: 635, message: 'O peso máximo é de 635kg' },
            valueAsNumber: true
          })
          }
        />
        <span className='measurement-unit'>kg</span>
      </div>
      {errors.weight && <ErrorMessage error={errors.weight.message} />}
    </label>
  );
};