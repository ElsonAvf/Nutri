import { LBMFieldset, LBMLegend, Label, LBMLabel, Input, Select, Span } from './../styles/Calculator.style.js';

const LBM = ({ lbm, setLBM }) => {
  return (
    <LBMFieldset>
      <LBMLegend>LBM - Massa Corporal Magra</LBMLegend>
      <LBMLabel>
        Sua massa magra
        <div>
          <Input
            type='number'
            name='LBM'
            value={!isNaN(lbm) ? lbm : ''}
            onChange={setLBM}
          />
          <Span>kg</Span>
        </div>
      </LBMLabel>
      <Label>
        Fórmula
        <Select name='LBM' value={isNaN(lbm) && lbm} onChange={setLBM}>
          <option value='boerLBM'>Boer</option>
          <option value='humeLBM'>Hume</option>
          <option value='jamesLBM'>James</option>
        </Select>
      </Label>
    </LBMFieldset>
  )
}

export default LBM;