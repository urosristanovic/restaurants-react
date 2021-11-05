export function displayRestaurantsByPrice(
  restaurants,
  prices,
  priceFromParams
) {
  const priceRange = choosePriceRange(prices, priceFromParams);
  const restaurantsByPrice = getRestaurantsByPriceRange(
    restaurants,
    priceRange
  );
  return restaurantsByPrice;
}

export function displayRestaurantsByAdvancedPrice(
  restaurants,
  minPrice,
  maxPrice
) {
  const priceRange = {
    min: minPrice,
    max: maxPrice,
  };
  return getRestaurantsByPriceRange(restaurants, priceRange);
}

const choosePriceRange = (prices, selectedPriceRange) => {
  return prices.find(element => element.label === selectedPriceRange);
};

const getRestaurantsByPriceRange = (list, price) => {
  return list.filter(
    res => res.avgMealPrice >= price.min && res.avgMealPrice < price.max
  );
};
