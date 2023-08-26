import Activity from './Activity';
import {
  Sedentary,
  SlightlyActive,
  ModeratelyActive,
  VeryActive,
  ExtremelyActive,
} from './ActivityIcons.jsx';

export default function TDEE({ tdee, activity }) {
  const userActivity = 'bg-[limegreen]/50'
  return (
    <section>
      <h3 className='text-center font-bold p-4 bg-[limegreen] max-w-3xl border border-solid border-neutral-500 mx-auto mb-2 w-[min(90%,768px)]'>TDEE ou GET</h3>
      <ul className='md:grid md:max-w-3xl md:grid-cols-[repeat(5,1fr)] md:gap-3 mx-auto w-[min(90%,768px)]'>
        <Activity
          label='Sedentário'
          Icon={Sedentary}
          value={tdee.sedentary}
          className={activity === 'Sedentary' && userActivity}
        />
        <Activity
          label='Levemente Ativo'
          Icon={SlightlyActive}
          value={tdee.light}
          className={activity === 'Light' && userActivity}
        />
        <Activity
          label='Moderadamente Ativo'
          Icon={ModeratelyActive}
          value={tdee.moderate}
          className={activity === 'Moderate' && userActivity}
        />
        <Activity
          label='Muito Ativo'
          Icon={VeryActive}
          value={tdee.heavy}
          className={activity === 'Very' && userActivity}
        />
        <Activity
          label='Extremamente Ativo'
          Icon={ExtremelyActive}
          value={tdee.extreme}
          className={activity === 'Extreme' && userActivity}
        />
      </ul>
    </section>
  );
};