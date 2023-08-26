import { useFormContext } from 'react-hook-form';
import ErrorMessage from './ErrorMessage';

export default function AgeInput() {
  const { register, formState: { errors } } = useFormContext()
  return (
    <label className='flex justify-between'>
      <div>
        <div>
          Idade <span aria-hidden className='text-red-400'>*</span>
        </div>
        <input
          className='inline-block action w-14'
          type='number'
          placeholder='20'
          {...register('age', {
            required: 'A idade é obrigatória',
            min: { value: 18, message: 'A idade mínima é de 18 anos' },
            max: { value: 150, message: 'A idade máxima é de 150 anos' },
            valueAsNumber: true
          })
          }
          {...register}
        />
      </div>
      {errors.age && <ErrorMessage error={errors.age.message} />}
    </label>
  );
};