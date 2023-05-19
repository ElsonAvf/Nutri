import uniqid from 'uniqid';

const createStorage = () => {
  if(!localStorage.getItem('diary')) {
    localStorage.setItem('diary', JSON.stringify([]))
  }
}

const getStorage = () => JSON.parse(localStorage.getItem('diary'));

const setStorage = newValue => localStorage.setItem('diary', JSON.stringify(newValue))

const getMeals = id => {
  const diary = getStorage()
  for(let i = 0; i < diary.length; i++) {
    if(diary[i].id === id) {
      return diary[i]
    }
  }
}

const addMeals = title => {
  const diary = getStorage()
  diary.push({
    id: uniqid(),
    title, 
    breakfast: [],
    lunch: [],
    dinner: [],
    snacks: [],
    kcalAmount: 0,
    proteinAmount: 0,
    carbAmount: 0,
    fatAmount: 0,
  })
  setStorage(diary)
}

const deleteMeals = id => {
  let diary = getStorage()
  diary = diary.filter(meals => meals.id !== id)
  setStorage(diary)
}

const updateMeals = newMeals => {
  let diary = getStorage()
  diary = diary.map(meals => {
    if(meals.id === newMeals.id) {
      return newMeals
    }
    return meals
  })
  setStorage(diary)
}

export {
  createStorage,
  getStorage,
  getMeals,
  addMeals,
  deleteMeals,
  updateMeals,
}