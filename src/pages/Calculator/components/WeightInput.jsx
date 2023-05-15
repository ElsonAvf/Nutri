import { Label, ValidityInput, Span } from './../styles/Calculator.style.js';

const WeightInput = ({ weight, setWeight }) => {
  return (
    <Label>
      Peso *
      <div>
        <ValidityInput
          type='number'
          name='weight'
          min='15'
          max='635'
          placeholder='60'
          required
          value={weight}
          onChange={setWeight}
        />
        <Span>kg</Span>
      </div>
    </Label>
  );
};

export default WeightInput;