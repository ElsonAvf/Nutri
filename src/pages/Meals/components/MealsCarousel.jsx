import Icon from '@mdi/react'
import { mdiPlus } from '@mdi/js'
import Card from './MealsCarouselCard.jsx'

export default function MealsCarousel({ mealName, meal, foods, showModal, setMeal }) {
  const handleShowSearchModal = () => {
    setMeal(meal)
    showModal()
  }
  return (
    <section className='w-[min(95%,1000px)]'>
      <h3 className='font-bold text-lg'>{mealName}</h3>
      <ul className='flex gap-2 p-2 h-32 w-full overflow-x-auto rounded border border-solid border-black'>
        {foods.map(food => <Card key={food.id} food={food} meal={meal} />)}
      </ul>
      <button className='btn flex h-9 w-9 rounded-full mx-auto mt-3' onClick={handleShowSearchModal}>
        <Icon className='m-auto' path={mdiPlus} size={1} />
      </button>
    </section>
  );
};