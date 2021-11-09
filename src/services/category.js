/* eslint-disable default-case */
export function displayRestaurantsByCategories(
  listOfRestaurants,
  categories,
  separate
) {
  let restaurantsByCategory = [];
  const categoriesArray = categories.split(',');
  for (let i = 0; i < categoriesArray.length; i++) {
    categoriesArray[i] =
      categoriesArray[i].charAt(0).toUpperCase() + categoriesArray[i].slice(1);
  }

  switch (separate) {
    case 'any':
      restaurantsByCategory = getRestaurantsByCategorySeparate(
        listOfRestaurants,
        categoriesArray
      );
      break;
    case 'all':
      restaurantsByCategory = getRestaurantsByCategory(
        listOfRestaurants,
        categoriesArray
      );
      break;
  }
  return restaurantsByCategory;
}

export const getRestaurantsByCategory = (list, listOfCategories) => {
  return list.filter(res =>
    listOfCategories.every(category => res.category.includes(category))
  );
};
export const getRestaurantsByCategorySeparate = (list, listOfCategories) => {
  return list.filter(res =>
    listOfCategories.some(category => res.category.includes(category))
  );
};
