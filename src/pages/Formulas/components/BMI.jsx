import { Formula } from './Formula';

export default function BMI() {
  return (
    <Formula.Base title='IMC - Índice de Massa Corporal'>
      <Formula.Algorithm algorithm='IMC = peso / altura²' />
    </Formula.Base>
  );
};