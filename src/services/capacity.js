export function displayRestaurantsByCapacity(
  restaurants,
  capacities,
  capacityFromParams
) {
  const capacity = chooseCapacityRange(capacities, capacityFromParams);
  const restaurantsByCapacity = getRestaurantByCapacityRange(
    restaurants,
    capacity
  );
  return restaurantsByCapacity;
}

export function displayRestaurantsByAdvancedCapacity(
  restaurants,
  minCapacity,
  maxCapacity
) {
  const capacityRange = {
    min: minCapacity,
    max: maxCapacity,
  };
  return getRestaurantByCapacityRange(restaurants, capacityRange);
}

const chooseCapacityRange = (capacities, selectedCapacity) => {
  return capacities.find(element => element.label === selectedCapacity);
};

const getRestaurantByCapacityRange = (list, capacity) => {
  return list.filter(
    restaurant =>
      restaurant.capacity >= capacity.min && restaurant.capacity <= capacity.max
  );
};
