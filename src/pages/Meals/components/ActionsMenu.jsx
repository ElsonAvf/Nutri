import Icon from '@mdi/react';
import { mdiTrashCanOutline } from '@mdi/js';
import { removeFood } from 'storage/storage.js';

export default function ActionsMenu({ id, meal }) {
  return (
    <div className='absolute top-0 right-0 p-1 bg-black/60 h-9'>
      <button onClick={e => {
        e.stopPropagation()
        removeFood(id, meal)
      }}>
        <Icon path={mdiTrashCanOutline} size={1} color='ghostwhite' />
      </button>
    </div>
  );
};