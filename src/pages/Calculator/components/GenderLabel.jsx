import { useFormContext } from 'react-hook-form';
import Icon from '@mdi/react';

export default function GenderLabel({ value, color, icon, title }) {
  const { register, watch } = useFormContext();
  const gender = watch('gender')
  const isChecked = gender === value;
  return (
    <label
      style={{ backgroundColor: isChecked ? color : 'honeydew' }}
      className={`w-[60px] h-[60px] rounded flex items-center justify-center transition duration-200 ease-in-out ${isChecked && 'shadow-md'}`}
    >
      <Icon
        color={isChecked ? 'honeydew' : color}
        path={icon}
        size={2}
        title={title}
      />
      <input
        hidden
        type='radio'
        {...register('gender')}
        value={value}
      />
    </label>
  );
};