export default function FormulaAgeRange({ children, ageRange }) {
  return (
    <li className='[&:not(:last-child)]:mb-3 ml-5'>
      <h6>{ageRange}</h6>
      {children}
    </li>
  );
};