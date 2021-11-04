export const chooseCapacityRange = (capacities, selectedCapacity) => {
  return capacities.find(element => element.label === selectedCapacity);
};

export const getRestaurantByCapacityRange = (list, capacity) => {
  return list.filter(
    restaurant =>
      restaurant.capacity >= capacity.min && restaurant.capacity <= capacity.max
  );
};

export function getRestaurantsByCapacity(
  listOfRestaurants,
  capacities,
  capacityFromParams
) {
  const capacity = chooseCapacityRange(capacities, capacityFromParams);
  const restaurantsByCapacity = getRestaurantByCapacityRange(
    listOfRestaurants,
    capacity
  );
  return restaurantsByCapacity;
}
