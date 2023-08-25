export default function Macro({ type, amount, className }) {
  return (
    <section className='flex flex-col items-center justify-center'>
      <h3>{type}</h3>
      <p className={`min-w-fit font-bold py-1 px-2 rounded ${className}`}>
        {amount && amount.toFixed(1)}g
      </p>
    </section>
  );
};