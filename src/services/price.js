export const choosePriceRange = (prices, selectedPriceRange) => {
  return prices.find(element => element.label === selectedPriceRange);
};

export const getRestaurantsByPriceRange = (list, price) => {
  return list.filter(
    res => res.avgMealPrice >= price.min && res.avgMealPrice < price.max
  );
};

export function getRestaurantsByPrice(
  listOfRestaurants,
  prices,
  priceFromParams
) {
  const priceRange = choosePriceRange(prices, priceFromParams);
  const restaurantsByPrice = getRestaurantsByPriceRange(
    listOfRestaurants,
    priceRange
  );
  return restaurantsByPrice;
}
