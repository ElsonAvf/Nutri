import { Label, ValidityInput, Span } from './../styles/Calculator.style.js';

const HeightInput = ({ height, setHeight }) => {
  return (
    <Label>
      Altura *
      <div>
        <ValidityInput
          type='number'
          name='height'
          min='50'
          max='272'
          placeholder='175'
          required
          value={height}
          onChange={setHeight}
        />
        <Span>cm</Span>
      </div>
    </Label>
  );
};

export default HeightInput;