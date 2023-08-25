export const calculateTotals = meals => {
  const totals = { kcal: 0, protein: 0, carb: 0, fat: 0 };
  for(let meal in meals) {
    for(let food of meals[meal]) {
      totals.kcal += food.kcal;
      totals.protein += food.protein;
      totals.carb += food.carb;
      totals.fat += food.fat;
    };
  };
  return totals;
};