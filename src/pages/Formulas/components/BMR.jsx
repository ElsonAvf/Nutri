import { Formula } from './Formula'

export default function BMR() {
  return (
    <Formula.Base title='TMB - Taxa Metabólica Basal'>
      <ul>
        <Formula.Variation title='Harris Benedict 1919'>
          <ul>
            <Formula.Gender gender='Homem'>
              <Formula.Algorithm algorithm='66.5 + (13.7516 x Peso[kg]) + (5.0033 x Altura[cm]) - (6.7550 x Idade)' />
            </Formula.Gender>
            <Formula.Gender gender='Mulher'>
              <Formula.Algorithm algorithm='655.1 + (9.56 x Peso[kg]) + (1.85 x Altura[cm]) - (4.676 x Idade)' />
            </Formula.Gender>
          </ul>
          <Formula.Resource href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1091498/' description='A Biometric Study Of Human Basal Metabolism' />
        </Formula.Variation>

        <Formula.Variation title='Harris Benedict 1984'>
          <ul>
            <Formula.Gender gender='Homem'>
              <Formula.Algorithm algorithm='88.362 + (13.397 x Peso[kg]) + (4.799 x Altura[cm]) - (5.667 x Idade)' />
            </Formula.Gender>
            <Formula.Gender gender='Mulher'>
              <Formula.Algorithm algorithm='447.593 + (9.247 x Peso[kg]) + (3.098 x Altura[cm]) - (4.330 x Idade)' />
            </Formula.Gender>
          </ul>
          <Formula.Resource href='https://pubmed.ncbi.nlm.nih.gov/6741850/' description='The Harris Benedict equation reevaluated: resting energy requirements and the body cell mass' />
        </Formula.Variation>

        <Formula.Variation title='Mifflin-St Jeor 1990'>
          <ul>
            <Formula.Gender gender='Homem'>
              <Formula.Algorithm algorithm='(10 x Peso[kg]) + (6.25 x Altura[cm]) - (5 x Idade) + 5' />
            </Formula.Gender>
            <Formula.Gender gender='Mulher'>
              <Formula.Algorithm algorithm='(10 x Peso[kg) + (6.25 x Altura[cm]) - (5 x Idade) - 161' />
            </Formula.Gender>
          </ul>
          <Formula.Resource href='https://pubmed.ncbi.nlm.nih.gov/2305711/' description='A new predictive equation for resting energy expenditure in healthy individuals' />
        </Formula.Variation>

        <Formula.Variation title='Katch-McArdle 2001'>
          <Formula.Algorithm algorithm='370 + (21.6 x Massa Magra)' />
          <Formula.Resource href='https://journals.lww.com/jopte/Citation/1991/07000/Exercise_Physiology__Energy,_Nutrition,_and_Human.24.aspx' description='Exercise Physiology: Energy, Nutrition, and Human Performanc' />
        </Formula.Variation>

        <Formula.Variation title='Schofield 1990'>
          <ul>
            <Formula.Gender gender='Homem'>
              <ul>
                <Formula.AgeRange ageRange='18-29 anos'>
                  <Formula.Algorithm algorithm='15.057 x Peso[kg] + 692.2' />
                </Formula.AgeRange >
                <Formula.AgeRange ageRange='30-59 anos'>
                  <Formula.Algorithm algorithm='11.472 x Peso[kg] + 873.1' />
                </Formula.AgeRange >
                <Formula.AgeRange ageRange='60+ anos'>
                  <Formula.Algorithm algorithm='11.711 x Peso[kg] + 587.7' />
                </Formula.AgeRange >
              </ul>
            </Formula.Gender>

            <Formula.Gender gender='Mulher'>
              <ul>
                <Formula.AgeRange ageRange='18-29 anos'>
                  <Formula.Algorithm algorithm='14.818 x Peso[kg] + 486.6' />
                </Formula.AgeRange >
                <Formula.AgeRange ageRange='30-59 anos'>
                  <Formula.Algorithm algorithm='8.126 x Peso[kg] + 845.6' />
                </Formula.AgeRange >
                <Formula.AgeRange ageRange='60+ anos'>
                  <Formula.Algorithm algorithm='9.082 x Peso[kg] + 658.56' />
                </Formula.AgeRange >
              </ul>
            </Formula.Gender>
          </ul>
          <Formula.Resource href='https://pubmed.ncbi.nlm.nih.gov/4044297/' description='Predicting basal metabolic rate, new standards and review of previous work' />
        </Formula.Variation>
      </ul>
    </Formula.Base>
  );
}