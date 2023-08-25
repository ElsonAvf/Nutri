export default function FormulaResource({ href, description }) {
  return (
    <section className='mt-5'>
      <h4 className='text-sm'>Fonte</h4>
      <a className='underline text-[darkgreen]' href={href}>{description}</a>
    </section>
  );
};