import { Table } from './Table';

export default function IBW({ results }) {
  return (
    <Table.Base className='w-[min(90%,768px)]'>
      <thead>
        <tr className='w-full'>
          <Table.Header className='bg-[limegreen]' header='IBW - Peso Ideal' colSpan='2' />
        </tr>
      </thead>
      <tbody className='md:grid md:grid-cols-2'>
        {
          results.map((ibw, index) => {
            return (ibw.name === 'BMI')
              ? (
                <tr key={index} className='grid grid-cols-2'>
                  <Table.Header className='bg-[limegreen]/50 text-left' header='IMC' />
                  <Table.Data className='text-right' data={`${ibw.result.min} - ${ibw.result.max}kg`} />
                </tr>
              )
              : (
                <tr key={index} className='grid grid-cols-2'>
                  <Table.Header className='bg-[limegreen]/50 text-left' header={ibw.name} />
                  <Table.Data className='text-right' data={`${ibw.result}kg`} />
                </tr>
              )
          })
        }
      </tbody>
    </Table.Base>
  );
};