import uniqid from 'uniqid';

export const createStorage = () => {
  if(!localStorage.getItem('diary')) {
    localStorage.setItem('diary', JSON.stringify({
      breakfast: [],
      lunch: [],
      dinner: [],
      snacks: [],
    }))
  }
}

export const getStorage = () => JSON.parse(localStorage.getItem('diary'));

export const setStorage = newValue => {
  localStorage.setItem('diary', JSON.stringify(newValue))
  window.dispatchEvent(new Event('storage')) // As storage event needs to be trigged manually
}

export const addFood = (food, meal) => {
  food.id = uniqid()
  const meals = getStorage()
  meals[meal].push(food)
  setStorage(meals)
};

export const removeFood = (foodId, meal) => {
  const meals = getStorage()
  const updatedMeals = {
    ...meals,
    [meal]: meals[meal].filter(food => food.id !== foodId)
  }
  setStorage(updatedMeals)
};