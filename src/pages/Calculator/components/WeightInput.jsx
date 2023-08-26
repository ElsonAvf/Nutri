import { useFormContext } from 'react-hook-form';

export default function WeightInput() {
  const { register, formState: { errors } } = useFormContext()
  return (
    <label>
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
          min: { value: 15, message: 'Peso mínima é de 15kg' },
          max: { value: 635, message: 'Peso máximo é de 635kg' },
          valueAsNumber: true
        })
        }
      />
      <span className='measurement-unit'>kg</span>
      {errors.weight && <span>{errors.weight.message}</span>}
    </label>
  );
};