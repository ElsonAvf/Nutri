import { Formula } from './Formula';

export default function TDEESection() {
  return (
    <Formula.Base title='TDEE ou GET - Gasto Energético Diário Total'>
      <ul>
        <Formula.Variation title='Sedentário'>
          <Formula.Algorithm algorithm='GET = 1.2 x TMB' />
        </Formula.Variation>
        <Formula.Variation title='Levemente Ativo'>
          <Formula.Algorithm algorithm='GET = 1.3745 x TMB' />
        </Formula.Variation>
        <Formula.Variation title='Moderadamente Ativo'>
          <Formula.Algorithm algorithm='GET = 1.55 x TMB' />
        </Formula.Variation>
        <Formula.Variation title='Ativo'>
          <Formula.Algorithm algorithm='GET = 1.725 x TMB' />
        </Formula.Variation>
        <Formula.Variation title='Extremamente Ativo'>
          <Formula.Algorithm algorithm='GET = 1.9 x TMB' />
        </Formula.Variation>
      </ul>
    </Formula.Base>
  );
};