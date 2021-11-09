export function displayRestaurantsByCategories(
  listOfRestaurants,
  categories,
  separate
) {
  let restaurantsByCategory = [];
  const categoriesArray = categories.split(',');

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
