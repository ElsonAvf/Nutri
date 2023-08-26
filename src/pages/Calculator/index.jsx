import { useState, useEffect, useRef } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import GenderField from './components/GenderFieldset';
import FormulaSelect from './components/FormulaSelect';
import LBM from './components/LBM';
import ActivitySelect from './components/ActivitySelect';
import Results from './components/Results';
import AgeInput from './components/AgeInput';
import HeightInput from './components/HeightInput';
import WeightInput from './components/WeightInput';
import { getUserResults } from './utils/userResults.js';

export default function Calculator() {
  const methods = useForm({
    defaultValues: {
      gender: 'm',
      BMRFormula: 'mifflinStJeor',
      age: '',
      height: '',
      weight: '',
      LBM: 'boer',
      activity: 'Sedentary'
    }
  })
  const BMRFormula = methods.watch('BMRFormula');
  const resultRef = useRef(null);
  const [results, setResults] = useState({});
  const [showResults, setShowResults] = useState(false);

  const onSubmit = data => {
    setResults(getUserResults(data));
    setShowResults(true)
    methods.reset(data)
  };

  useEffect(() => {
    if(methods.formState.isDirty) setShowResults(false);
    if(resultRef.current) resultRef.current.scrollIntoView()
  }, [showResults, methods.formState.isDirty])

  return (
    <main>
      <ul className='px-4 mx-auto max-w-md flex flex-col mb-5'>
        <li><b>IMC</b> - Índice de Massa Corporal </li>
        <li><b>IBW</b> - Peso Corporal Ideal</li>
        <li><b>TMB</b> - Taxa Metabólica Basal</li>
        <li><b>TDEE</b> - Gasto Diário Total de Energia</li>
      </ul>
      <FormProvider {...methods} >
        <form
          className='mx-auto w-[95%] md:max-w-md shadow border border-solid border-neutral-400 bg-[honeydew] py-7 px-4 flex flex-col gap-4 mb-10'
          onSubmit={methods.handleSubmit(onSubmit)}
          novalidation='true'
        >
          <GenderField />
          <FormulaSelect />
          <AgeInput />
          <HeightInput />
          <WeightInput />
          <ActivitySelect />
          {
            (BMRFormula === 'katchMcArdle') && <LBM />
          }
          <button className='mt-2 btn-primary text-lg self-center' type='submit'>Calcular</button>
        </form>
      </FormProvider>
      {
        showResults && <Results resultRef={resultRef} state={results} />
      }
    </main>
  );
};