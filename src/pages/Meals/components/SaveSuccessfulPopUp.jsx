import Icon from '@mdi/react';
import { mdiCheckCircleOutline, mdiClose } from '@mdi/js';

export default function SaveSuccessfulPopUp({ close }) {
  return (
    <div className='fixed inset-0 bg-black/75 flex'>
      <div className='animate-popup opacity-0 -translate-y-20 m-auto rounded p-4 bg-[ghostwhite] w-72'>
        <Icon className='mx-auto' color='limegreen' path={mdiCheckCircleOutline} size={2} />
        <div className='mt-2 mb-4 text-center text-xl'>Diário salvo</div>
        <button className='block mx-auto btn-primary' onClick={close}>
          Ok
        </button>
      </div>
    </div>
  );
};