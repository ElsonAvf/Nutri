import { useFormContext } from 'react-hook-form';

export default function HeightInput() {
  const { register, formState: { errors } } = useFormContext()
  return (
    <label>
      <div>
        Altura <span aria-hidden className='text-red-400'>*</span>
      </div>
      <input
        className='inline-block action w-14'
        type='number'
        placeholder='175'
        {
        ...register('height', {
          required: 'A altura é obrigatória',
          min: { value: 50, message: 'Altura mínima é de 50cm' },
          max: { value: 272, message: 'Altura máxima é de 272cm' },
          valueAsNumber: true
        })
        }
      />
      <span className='measurement-unit'>cm</span>
      {errors.height && <span>{errors.height.message}</span>}
    </label>
  );
};