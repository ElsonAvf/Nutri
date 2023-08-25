import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';

export default function SearchForm({ query, handleSubmit, handleChange }) {
  return (
    <form className='mb-5 md:mb-8' onSubmit={handleSubmit}>
      <label className='h-10 items-center rounded-lg flex px-3 gap-3 w-full bg-transparent border-2 border-solid border-[limegreen]'>
        <Icon path={mdiMagnify} size={1} />
        <input className='bg-transparent flex-1' type='search' name='query' value={query} placeholder='Ice cream' onChange={handleChange} />
      </label>
    </form>
  );
};