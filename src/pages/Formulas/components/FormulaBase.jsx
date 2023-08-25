export default function Base({ children, title }) {
  return (
    <section className='mb-10 w-[min(95%,650px)] border border-solid border-neutral-500'>
      <h3 className='bg-[limegreen] py-3 text-center text-2xl font-bold border border-solid border-neutral-500'>{title}</h3>
      {children}
    </section>
  );
};