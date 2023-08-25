export default function FormulaGender({ children, gender }) {
  return (
    <li className='[&:not(:nth-last-child(2))]:mb-5 ml-5'>
      <h5 className='text-lg font-bold text-neutral-800'>{gender}</h5>
      {children}
    </li>
  );
};