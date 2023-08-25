const handleNutriData = data => {
  const nutriData = {}
  const entries = Object.entries(data)
  for(const [key, value] of entries) {
    if(data[key] === undefined) {
      nutriData[key] = 0
      continue
    }
    nutriData[key] = value
    if(key === 'kcal') {
      nutriData[key] = Math.round(nutriData[key])
    }
  }
  return nutriData
}

const handleFoodDBResults = results => {
  const handledResults = results.map(result => {
    let nutri = {
      kcal: result.food.nutrients.ENERC_KCAL,
      protein: result.food.nutrients.PROCNT,
      carb: result.food.nutrients.CHOCDF,
      fat: result.food.nutrients.FAT
    }
    nutri = handleNutriData(nutri)
    return {
      url: result.food.image,
      ...nutri,
      name: result.food.label,
      serving: 'Porção - 100g',
    }
  })
  return handledResults
}

const edamamFetchFood = async searchQuery => {
  try {
    const data = await fetch(`https://api.edamam.com/api/food-database/v2/parser?app_id=573d76ed&app_key=401a6cc742bc8f9cbff219527aa6a319&ingr=${searchQuery}`, { mode: 'cors' });
    const json = await data.json();
    if(json.hints.length === 0) throw Error(`Nenhum resultado encontrado para: ${searchQuery}`)
    return handleFoodDBResults(json.hints);
  } catch(error) {
    throw Error(error.message)
  }
};

const handleRecipeResults = results => {
  const handledResults = results.map(result => {
    const serving = result.recipe.yield
    let nutri = {
      kcal: result.recipe.calories,
      protein: result.recipe.totalNutrients.PROCNT.quantity,
      carb: result.recipe.totalNutrients['CHOCDF.net'].quantity,
      fat: result.recipe.totalNutrients.FAT.quantity,
    }
    nutri = handleNutriData(nutri)
    return {
      url: result.recipe.image,
      name: result.recipe.label,
      kcal: Math.round(nutri.kcal / serving),
      protein: Math.round(nutri.protein / serving),
      carb: Math.round(nutri.carb / serving),
      fat: Math.round(nutri.carb / serving),
      serving: '1 Porção',
    }
  })
  return handledResults
};

const edamamFetchRecipe = async searchQuery => {
  try {
    const data = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${searchQuery}&Accept-Language=pt-BR&app_id=15b2c1dd&app_key=633ce871f98c6af59cf3e26e7fae94c5`, { mode: 'cors' });
    const json = await data.json();
    if(json.hits.length === 0) throw Error(`Nenhum resultado encontrado para: ${searchQuery}`)
    return handleRecipeResults(json.hits)
  } catch(error) {
    throw Error(error.message)
  }
};


const IsValidUrl = async url => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;
    img.onload = () => resolve()
    img.onerror = () => reject()
  })
}

const getDataWithValidUrl = async foodData => {
  const validData = []
  for(const data of foodData) {
    if(!data.url) continue
    try {
      await IsValidUrl(data.url)
      validData.push(data)
    } catch(error) {
      continue
    }
  };
  return validData;
};

const handleFoodData = async query => {
  let invalidCount = 0;
  try {
    const results = await Promise.allSettled([edamamFetchFood(query), edamamFetchRecipe(query)])
    const data = []
    results.forEach(result => {
      if(result.status === 'fulfilled') {
        data.push(...result.value)
      } else {
        invalidCount++
        // If both were reject throw an error
        if(invalidCount == 2) throw Error(result.reason);
      }
    })
    const valids = await getDataWithValidUrl(data);
    return valids
  } catch(error) {
    throw Error(error.message)
  }
};

export { handleFoodData };