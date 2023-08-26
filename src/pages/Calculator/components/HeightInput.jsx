import { useFormContext } from 'react-hook-form';
import ErrorMessage from './ErrorMessage';

export default function HeightInput() {
  const { register, formState: { errors } } = useFormContext()
  return (
    <label className='flex justify-between'>
      <div>
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
            min: { value: 50, message: 'A altura mínima é de 50cm' },
            max: { value: 272, message: 'A altura máxima é de 272cm' },
            valueAsNumber: true
          })
          }
        />
        <span className='measurement-unit'>cm</span>
      </div>
      {errors.height && <ErrorMessage error={errors.height.message} />}
    </label>
  );
};