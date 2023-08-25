import { useDispatch } from 'react-redux';
import Icon from '@mdi/react';
import { mdiPlus } from '@mdi/js';
import { addFood } from 'features/meals/mealsSlice.js';
import Macro from './Macro';

export default function SearchResultCard({ food, meal, close }) {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(addFood({ food, meal }));
    close();
  };

  return (
    <li className='w-[min(100%,500px)] bg-[honeydew] p-3 rounded flex items-center gap-3 border border-solid border-black/[.3] shadow'>
      <figure className='relative'>
        <img className='w-36' src={food.url} />
        <figcaption className='caption text-xs md:text-sm'>{food.name}</figcaption>
      </figure>
      <div className='self-stretch flex flex-col items-center justify-between'>
        <div className=''>{food.serving}</div>
        <div className='font-bold text-[1.75rem]'>{food.kcal}kcal</div>
        <ul className='macros'>
          <Macro className='text-[green]' label='Proteína' value={food.protein} />
          <Macro className='text-[gold]' label='Carboidrato' value={food.carb} />
          <Macro className='text-[tomato]' label='Gordura' value={food.fat} />
        </ul>
      </div>
      <button type='button' className='btn h-9 w-9 rounded-full flex' onClick={handleClick}>
        <Icon className='m-auto' path={mdiPlus} size={1} />
      </button>
    </li >
  );
};