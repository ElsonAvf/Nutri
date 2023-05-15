import { Label, Select } from './../styles/Calculator.style.js';

const FormulaSelect = ({ formula, setFormula }) => {
  return (
    <Label>
      Fórmula de TMB
      <Select name='BMRFormula' value={formula} onChange={setFormula}>
        <option value='originalHarrisBenedictBMR'>
          Harris Benedict (1919)
        </option>
        <option value='revisedHarrisBenedictBMR'>
          Harris Benedict revisado por Rozan e Shizgan (1984)
        </option>
        <option value='mifflinStJeorBMR' >
          Mifflin-St Jeor (1990)
        </option>
        <option value='katchMcArdleBMR'>
          Katch-McArdle (2001)
        </option>
        <option value='schofieldBMR'>
          Schofield (1985)
        </option>
      </Select>
    </Label>
  );
};

export default FormulaSelect;