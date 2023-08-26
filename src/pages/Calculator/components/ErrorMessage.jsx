import Icon from '@mdi/react';
import { mdiAlertOutline } from '@mdi/js';

export default function ErrorMessage({ error }) {
  return (
    <span className='flex gap-2 items-end'>
      <Icon className='text-red-600 w-5' path={mdiAlertOutline} />
      <span className='text-sm/[14px] text-right text-red-600'>{error}</span>
    </span>
  );
};