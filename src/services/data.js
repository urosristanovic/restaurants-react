export async function getRestaurants() {
  const response = await fetch('../assets/json/restaurants.json');
  return response.json();
}
export async function getPrices() {
  const response = await fetch('../assets/json/prices.json');
  return response.json();
}
export async function getCapacities() {
  const response = await fetch('../assets/json/capacity.json');
  return response.json();
}
export async function getFoods() {
  const response = await fetch('../assets/json/food.json');
  return response.json();
}
