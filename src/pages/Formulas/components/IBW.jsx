import { Formula } from './Formula';

export default function IBW() {
  return (
    <Formula.Base title='IBW - Peso Ideal'>
      <ul>
        <Formula.Variation title='Robinson'>
          <ul>
            <Formula.Gender gender='Homem'>
              <Formula.Algorithm algorithm='52 + 1.9 x (Altura[inch] - 60' />
            </Formula.Gender>
            <Formula.Gender gender='Mulher'>
              <Formula.Algorithm algorithm='49 + 1.7 x (Altura[inch] - 60)' />
            </Formula.Gender>
          </ul>
        </Formula.Variation>

        <Formula.Variation title='Peterson'>
          <Formula.Algorithm algorithm='2.2 x (IMC Alvo) + 3.5 x (IMC Alvo) x (Altura[m] - 1.5)' />
        </Formula.Variation>

        <Formula.Variation title='Devine'>
          <ul>
            <Formula.Gender gender='Homem'>
              <Formula.Algorithm algorithm='50 + 2.3 x (Altura[lb] - 60)' />
            </Formula.Gender>
            <Formula.Gender gender='Mulher'>
              <Formula.Algorithm algorithm='45.5 + 2.3 x (Altura[lb] - 60)' />
            </Formula.Gender>
          </ul>
        </Formula.Variation>

        <Formula.Variation title='Miller'>
          <ul>
            <Formula.Gender gender='Homem'>
              <Formula.Algorithm algorithm='56.2 + 1.41 x (Altura[inch] - 60)' />
            </Formula.Gender>
            <Formula.Gender gender='Mulher'>
              <Formula.Algorithm algorithm='53.1 + 1.36 x (Altura[inch] - 60)' />
            </Formula.Gender>
          </ul>
        </Formula.Variation>

        <Formula.Variation title='Hamwi'>
          <ul>
            <Formula.Gender gender='Homem'>
              <Formula.Algorithm algorithm='48 + 2.7 x (Altura[inch] - 60)' />
            </Formula.Gender>
            <Formula.Gender gender='Mulher'>
              <Formula.Algorithm algorithm='45 + 2.2 x (Altura[inch] - 60)' />
            </Formula.Gender>
          </ul>
        </Formula.Variation>

        <Formula.Variation title='Broca'>
          <ul>
            <Formula.Gender gender='Homem'>
              <Formula.Algorithm algorithm='(Altura[cm] - 100) - ([Altura{cm} - 100] x 0.1)' />
            </Formula.Gender>
            <Formula.Gender gender='Mulher'>
              <Formula.Algorithm algorithm='(Altura[cm] - 100) - ([Altura{cm} - 100] x 0.15)' />
            </Formula.Gender>
          </ul>
        </Formula.Variation>

        <Formula.Variation title='Lemmens'>
          <Formula.Algorithm algorithm='(IMC Alvo) x Altura(m)²' />
        </Formula.Variation>
      </ul>
    </Formula.Base>
  );
};