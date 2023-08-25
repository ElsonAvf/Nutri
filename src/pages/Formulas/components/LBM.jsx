import { Formula } from './Formula';

export default function LBMSection() {
  return (
    <Formula.Base title='LBM - Massa Magra'>
      <ul>
        <Formula.Variation title='Boer'>
          <ul>
            <Formula.Gender gender='Homem'>
              <Formula.Algorithm algorithm='(0.407 x Peso[kg]) + (0.267 Altura[cm]) - 19.2' />
            </Formula.Gender>
            <Formula.Gender gender='Mulher'>
              <Formula.Algorithm algorithm='(0.252 x Peso[kg]) + (0.473 x Altura[cm]) - 48.3' />
            </Formula.Gender>
          </ul>
          <Formula.Resource href='https://pubmed.ncbi.nlm.nih.gov/6496691/' description='Estimated lean body mass as an index for normalization of body fluid volumes in humans' />
        </Formula.Variation>

        <Formula.Variation title='Hume'>
          <ul>
            <Formula.Gender gender='Homem'>
              <Formula.Algorithm algorithm='(0.32810 x Peso[kg]) + (0.33929 x Altura[cm]) - 29.5336' />
            </Formula.Gender>
            <Formula.Gender gender='Mulher'>
              <Formula.Algorithm algorithm='(0.29569 x Peso[kg]) + (0.41813 x Altura[cm]) - 43.2933' />
            </Formula.Gender>
          </ul>
        </Formula.Variation>

        <Formula.Variation title='James'>
          <ul>
            <Formula.Gender gender='Homem'>
              <Formula.Algorithm algorithm='1.1 x Peso[kg] - 128 x IMC' />
            </Formula.Gender>
            <Formula.Gender gender='Mulher'>
              <Formula.Algorithm algorithm='1.07 x Peso[kg] - 148 x IMC' />
            </Formula.Gender>
          </ul>
        </Formula.Variation>
      </ul>
    </Formula.Base>
  );
};