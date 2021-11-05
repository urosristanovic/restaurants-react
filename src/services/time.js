const getOpenRestaurantsNow = list => {
  const hours = new Date().getHours();
  console.log(hours);
  return getOpenRestaurants(list, hours);
};
const getOpenRestaurants = (list, hours) => {
  return list.filter(
    restaurant => restaurant.opening <= hours && restaurant.closing > hours
  );
};

export function displayRestaurantsByTime(listOfRestaurants, hours) {
  let openedRestaurants = null;
  if (hours === 'now') {
    openedRestaurants = getOpenRestaurantsNow(listOfRestaurants);
  } else {
    openedRestaurants = getOpenRestaurants(listOfRestaurants, hours);
  }
  return openedRestaurants;
}
