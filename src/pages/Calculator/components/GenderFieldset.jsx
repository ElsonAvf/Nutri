import Icon from '@mdi/react';
import { mdiGenderMale, mdiGenderFemale } from '@mdi/js';
import GenderLabel from './GenderLabel';

const GenderField = ({ gender, setGender }) => {
  return (
    <fieldset className='w-full flex justify-center gap-3'>
      <legend>Gênero</legend>
      <GenderLabel
        gender={gender}
        value='m'
        color='deepskyblue'
        icon={mdiGenderMale}
        title='Homem'
        setGender={setGender}
      />
      <GenderLabel
        gender={gender}
        value='f'
        color='hotpink'
        icon={mdiGenderFemale}
        title='Mulher'
        setGender={setGender}
      />
    </fieldset>
  );
};

export default GenderField;