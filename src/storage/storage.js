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

export const setStorage = newValue => localStorage.setItem('diary', JSON.stringify(newValue))