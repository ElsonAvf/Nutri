import { useState } from 'react';
import { useSelector } from 'react-redux';
import MealsCarousel from './components/MealsCarousel';
import MealsStatus from './components/MealsStatus';
import SaveSuccessfulPopUp from './components/SaveSuccessfulPopUp';
import { setStorage } from 'storage/storage.js'
import Search from './components/Search';

export default function MealsPlanner() {
  const meals = useSelector(state => state.meals)
  const [showSearchModal, setShowSearchModal] = useState(false)
  const [showSuccessfulPopUp, setShowSuccessfulPopUp] = useState(false);
  const [mealType, setMealType] = useState('');

  const handleSave = () => {
    setStorage(meals)
    setShowSuccessfulPopUp(true)
  }

  return (
    <main className='flex flex-col items-center pb-12'>
      <h2 className='text-2xl font-bold'>Refeições</h2>
      <MealsStatus meals={meals} />
      <div className='flex flex-col gap-5 w-full items-center'>
        <MealsCarousel
          mealName='Café da Manhã'
          meal='breakfast'
          foods={meals.breakfast}
          showModal={() => setShowSearchModal(true)}
          setMeal={setMealType}
        />
        <MealsCarousel
          mealName='Almoço'
          meal='lunch'
          foods={meals.lunch}
          showModal={() => setShowSearchModal(true)}
          setMeal={setMealType}
        />
        <MealsCarousel
          mealName='Jantar'
          meal='dinner'
          foods={meals.dinner}
          showModal={() => setShowSearchModal(true)}
          setMeal={setMealType}
        />
        <MealsCarousel
          mealName='Lanches'
          meal='snacks'
          foods={meals.snacks}
          showModal={() => setShowSearchModal(true)}
          setMeal={setMealType}
        />
      </div>
      <button className='mt-12 btn-primary text-lg' onClick={handleSave}>Salvar</button>
      {showSearchModal && <Search meal={mealType} close={() => setShowSearchModal(false)} />}
      {showSuccessfulPopUp && <SaveSuccessfulPopUp close={() => setShowSuccessfulPopUp(false)} />}
    </main>
  )
};