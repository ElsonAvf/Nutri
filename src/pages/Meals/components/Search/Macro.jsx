export default function Macro({ className, label, value }) {
  return (
    <li className='text-sm'>
      <span className={`${className} text-[8px] align-middle`}>●</span>
      <span className='text-black/[.7] font-bold mx-2'>{label}</span>
      <span className='font-extrabold'>{value.toFixed(2)}g</span>
    </li>
  );
};