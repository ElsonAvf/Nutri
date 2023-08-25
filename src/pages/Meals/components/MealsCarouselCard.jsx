import { useState, useRef, useEffect } from 'react';
import ActionsMenu from './ActionsMenu.jsx';

export default function MealsCarouselCard({ food, meal }) {
  const fig = useRef(null);
  const [displayMenu, setDisplayMenu] = useState(false);

  useEffect(() => {
    const handleClickOutside = e => {
      if(fig.current && !fig.current.contains(e.target)) {
        setDisplayMenu(false)
      }
    }
    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [fig])

  return (
    <figure
      ref={fig}
      style={{ backgroundImage: `url(${food.url})`}}
      className='relative shrink-0 w-28 border border-solid border-black rounded overflow-hidden bg-cover bg-center'
      onClick={() => setDisplayMenu(true)}
    >
      <img className='sr-only' src={food.url} alt={food.name} />
      <figcaption className='caption text-xs md:text-sm'>{food.name}</figcaption>
      {displayMenu && <ActionsMenu id={food.id} meal={meal} />}
    </figure>
  );
};