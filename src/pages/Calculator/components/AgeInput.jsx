import { useFormContext } from 'react-hook-form';

export default function AgeInput() {
  const { register, formState: { errors } } = useFormContext()
  return (
    <label>
      <div>
        Idade <span aria-hidden className='text-red-400'>*</span>
      </div>
      <input
        className='inline-block action w-14'
        type='number'
        placeholder='20'
        {...register('age', {
          required: 'A idade é obrigatória',
          min: { value: 18, message: 'Idade mínima é de 18 anos' },
          max: { value: 150, message: 'Idade máxima é de 150 anos' },
          valueAsNumber: true
        })
        }
        {...register}
      />
      {errors.age && <span>{errors.age.message}</span>}
    </label>
  );
};