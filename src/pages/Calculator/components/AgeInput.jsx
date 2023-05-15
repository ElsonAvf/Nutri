import { Label, ValidityInput } from './../styles/Calculator.style.js';

const AgeInput = ({ age, setAge }) => {
  return (
    <Label>
      Idade *
      <ValidityInput
        type='number'
        name='age'
        min='18'
        max='150'
        placeholder='20'
        required
        value={age}
        onChange={setAge}
      />
    </Label>
  );
};

export default AgeInput;