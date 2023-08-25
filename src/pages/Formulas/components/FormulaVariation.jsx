export default function FormulaVariation({ children, title }) {
  return (
    <li className='[&:not(:last-child)]:mb-4 p-2 bg-[honeydew] border border-solid border-neutral-500'>
      <h4 className='mb-3 text-xl font-bold text-sm md:text-base'>{title}</h4>
      {children}
    </li>
  );
};