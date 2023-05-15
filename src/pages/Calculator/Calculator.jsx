import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GenderField from './components/GenderFieldset.jsx';
import FormulaSelect from './components/FormulaSelect.jsx';
import AgeInput from './components/AgeInput.jsx';
import HeightInput from './components/HeightInput.jsx';
import WeightInput from './components/WeightInput.jsx';
import LBM from './components/LBM.jsx';
import {Main, Ul, Form, Button} from './styles/Calculator.style.js';
import { handleResults } from './utils/submit_handlers.js';

const Calculator = () => {
  const [state, setState] = useState({
    gender: 'm',
    BMRFormula: 'mifflinStJeorBMR',
    age: '',
    height: '',
    weight: '',
    LBM: 'boerLBM'
  });
  const navigate = useNavigate();
  
  const handleChange = event => {
    setState(prevState => {
      return {
        ...prevState,
        [event.target.name]: event.target.value
      };
    });
  };
  const handleSubmit = event => {
    event.preventDefault();
    if(!event.target.checkValidity()) {
      event.target.reportValidity()
    } else {
      const result = handleResults(state);
      navigate('/resultados', {state: result});
    }
  };
  
  return (
    <Main>
      <Ul>
        <li><b>IMC</b> - Índice de Massa Corporal </li>
        <li><b>IBW</b> - Peso Corporal Ideal</li>
        <li><b>TMB</b> - Taxa Metabólica Basal</li>
        <li><b>TDEE</b> - Gasto Diário Total de Energia</li>
      </Ul>
      <Form onSubmit={handleSubmit}>
        <GenderField gender={state.gender} setGender={handleChange} />
        <FormulaSelect formula={state.BMRFormula} setFormula={handleChange}/>
        <AgeInput age={state.age} setAge={handleChange} />
        <HeightInput height={state.height} setHeight={handleChange} />
        <WeightInput weight={state.weight} setWeight={handleChange} />
        {
          (state.BMRFormula === 'katchMcArdleBMR') && <LBM lbm={state.LBM} setLBM={handleChange} />
        }
        <button className='btn' type='submit'>Calcular</button>
      </Form>
    </Main>
  );
};

export default Calculator;