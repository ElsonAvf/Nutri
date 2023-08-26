import Icon from '@mdi/react';

export default function Activity({ className, label, Icon, value }) {
  return (
    <section className={`${className} border border-solid border-black p-2 rounded flex flex-col items-center mb-3`}>
      <Icon />
      <h4 className='text-xs text-center'>{label}</h4>
      <p className='mt-auto text-lg font-extrabold'>{value}</p>
    </section>
  );
};