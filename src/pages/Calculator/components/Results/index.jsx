import IBW from './IBW'
import TDEE from './TDEE';
import { Table } from './Table';

export default function Result({ state, resultRef }) {
  return (
    <main ref={resultRef}>
      <div className='mx-auto md:flex md:gap-3 w-[min(90%,768px)]'>
        <Table.Base className='w-[min(100%,500px)]'>
          <thead>
            <tr>
              <Table.Header className='bg-[limegreen]' header='IMC - Índice de Massa Corporal ' />
            </tr>
          </thead>
          <tbody>
            <tr>
              <Table.Data className='text-center' data={state.BMI} />
            </tr>
          </tbody>
        </Table.Base>
        <Table.Base className='w-[min(100%,500px)]'>
          <thead>
            <tr>
              <Table.Header className='bg-[limegreen]' header='TMB - Taxa Metabólica Basal' />
            </tr>
          </thead>
          <tbody>
            <tr>
              <Table.Data className='text-center' data={state.BMR} />
            </tr>
          </tbody>
        </Table.Base>
      </div>
      <IBW results={state.IBW} />
      <TDEE tdee={state.TDEE} activity={state.activity} />
    </main>
  );
};