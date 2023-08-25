import { useDispatch } from 'react-redux';
import Icon from '@mdi/react';
import { mdiTrashCanOutline } from '@mdi/js';
import { removeFood } from 'features/meals/mealsSlice.js';

export default function ActionsMenu({ id, meal }) {
  const dispatch = useDispatch()

  return (
    <div className='absolute top-0 right-0 p-1 bg-black/60 h-9'>
      <button onClick={(e) => {
        e.stopPropagation()
        dispatch(removeFood({ id, meal })
        )
      }}>
        <Icon path={mdiTrashCanOutline} size={1} color='ghostwhite' />
      </button>
    </div>
  );
};