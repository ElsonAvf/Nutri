import { Link } from 'react-router-dom';

export default function LinkCard({ path, src, name, attributionHref, attributionLabel }) {
  return (
    <>
      <Link to={path}>
        <article
          style={{ backgroundImage: `url(${src})` }}
          className='rounded-md bg-cover bg-center aspect-video active:brightness-75 transition duration-200'
        >
          <h2 className='pl-2 pt-1 text-xl md:text-2xl text-[ghostwhite]'>{name}</h2>
        </article>
      </Link>
      <div className='text-center text-xs mt-1 mb-5'>
        <a href={attributionHref}>{attributionLabel}</a>
      </div>
    </>
  );
};