import Icon from '@mdi/react';
import { mdiGenderMale, mdiGenderFemale } from '@mdi/js';
import { GenderFieldset, GenderLabel, InputRadio } from './../styles/Calculator.style.js';

const GenderField = ({ gender, setGender }) => {
  return (
    <GenderFieldset>
      <legend>Gênero</legend>
      <GenderLabel gender='male'>
        <Icon path={mdiGenderMale} size={2} color={gender === 'm' ? 'honeydew' : 'deepskyblue'} title='Homem' />
        <InputRadio
          type='radio'
          name='gender'
          value='m'
          required
          checked={gender === 'm'}
          onChange={setGender}
        />
      </GenderLabel>
      <GenderLabel gender='female'>
        <Icon path={mdiGenderFemale} size={2} color={gender === 'f' ? 'honeydew' : 'hotpink'} title='Mulher' />
        <InputRadio
          type='radio'
          name='gender'
          value='f'
          required
          checked={gender === 'f'}
          onChange={setGender}
        />
      </GenderLabel>
    </GenderFieldset>
  );
};

export default GenderField;